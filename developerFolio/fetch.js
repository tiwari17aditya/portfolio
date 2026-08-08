const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config();
const logger = require("./scripts/logger");

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

const startTime = Date.now();
let githubHits = 0;
let mediumHits = 0;
let githubStatus = "SKIPPED";
let mediumStatus = "SKIPPED";

const fetchGithub = () => {
  return new Promise((resolve, reject) => {
    if (USE_GITHUB_DATA !== "true") {
      logger.info("GitHub data fetch is disabled (USE_GITHUB_DATA is not true).");
      if (!fs.existsSync("./public/profile.json")) {
        const fallback = {
          data: {
            user: {
              name: "Aditya Tiwari",
              bio: "AI / ML Engineer & MLOps Specialist",
              avatarUrl: "https://avatars.githubusercontent.com/u/tiwari17aditya",
              location: "Navi Mumbai, India",
              pinnedItems: {
                totalCount: 6,
                edges: [
                  {
                    node: {
                      id: "1",
                      name: "VitalsGuard-Health-Medication-Tracker",
                      description: "A production-ready health tracking SPA + PWA app with Supabase cloud and LocalStorage dual-storage resilience.",
                      forkCount: 2,
                      stargazers: {totalCount: 5},
                      url: "https://github.com/tiwari17aditya/VitalsGuard-Health-Medication-Tracker",
                      diskUsage: 1200,
                      primaryLanguage: {name: "TypeScript", color: "#3178c6"}
                    }
                  },
                  {
                    node: {
                      id: "2",
                      name: "mahabharata-series-yt-animated",
                      description: "An automated multi-platform video production system featuring AI-powered script generation and Remotion dynamic rendering.",
                      forkCount: 3,
                      stargazers: {totalCount: 8},
                      url: "https://github.com/tiwari17aditya/mahabharata-series-yt-animated",
                      diskUsage: 3400,
                      primaryLanguage: {name: "Python", color: "#3572A5"}
                    }
                  },
                  {
                    node: {
                      id: "3",
                      name: "stocks_insights_agent",
                      description: "Agentic AI stock insights generator performing multi-agent reasoning, transcript fetching, and automated daily email reports.",
                      forkCount: 4,
                      stargazers: {totalCount: 12},
                      url: "https://github.com/tiwari17aditya/stocks_insights_agent",
                      diskUsage: 1500,
                      primaryLanguage: {name: "Python", color: "#3572A5"}
                    }
                  },
                  {
                    node: {
                      id: "4",
                      name: "pulsevector",
                      description: "Intelligent automated content production engine featuring CAD-based scheduling with Gemini API and Supabase Storage.",
                      forkCount: 1,
                      stargazers: {totalCount: 6},
                      url: "https://github.com/tiwari17aditya/pulsevector",
                      diskUsage: 2100,
                      primaryLanguage: {name: "Python", color: "#3572A5"}
                    }
                  },
                  {
                    node: {
                      id: "5",
                      name: "Antigravity-daily-CA-Insights",
                      description: "Cloud-native agentic system running on GitHub Actions that fetches YouTube transcripts and generates current affairs insights.",
                      forkCount: 2,
                      stargazers: {totalCount: 7},
                      url: "https://github.com/tiwari17aditya/Antigravity-daily-CA-Insights",
                      diskUsage: 980,
                      primaryLanguage: {name: "Python", color: "#3572A5"}
                    }
                  },
                  {
                    node: {
                      id: "6",
                      name: "vibrant-music-academy",
                      description: "Modern high-performance web application & interactive music academy platform for Vibrant Music Academy.",
                      forkCount: 1,
                      stargazers: {totalCount: 4},
                      url: "https://github.com/tiwari17aditya/vibrant-music-academy",
                      diskUsage: 1800,
                      primaryLanguage: {name: "JavaScript", color: "#f1e05a"}
                    }
                  }
                ]
              }
            }
          }
        };
        fs.writeFileSync("./public/profile.json", JSON.stringify(fallback, null, 2), "utf8");
      }
      return resolve();
    }

    if (!GITHUB_USERNAME) {
      logger.error(ERR.noUserName);
      githubStatus = "FAILED";
      return reject(new Error(ERR.noUserName));
    }

    logger.info(`Fetching GitHub profile data for user: ${GITHUB_USERNAME}`);
    githubHits++;

    const queryData = JSON.stringify({
      query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
    });

    const options = {
      hostname: "api.github.com",
      path: "/graphql",
      port: 443,
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "User-Agent": "Node",
        "Content-Length": Buffer.byteLength(queryData)
      }
    };

    const req = https.request(options, res => {
      let responseBody = "";
      
      // Parse GitHub Quota headers
      const rateLimit = res.headers["x-ratelimit-limit"];
      const rateRemaining = res.headers["x-ratelimit-remaining"];
      const rateReset = res.headers["x-ratelimit-reset"];
      if (rateLimit) {
        logger.info(`GitHub API Quota: ${rateRemaining}/${rateLimit} requests remaining. Reset time: ${new Date(rateReset * 1000).toISOString()}`);
        logger.logQuota("GitHub GraphQL API", rateLimit, rateRemaining, new Date(rateReset * 1000).toISOString());
      }

      if (res.statusCode !== 200) {
        logger.error(`GitHub API request failed with status: ${res.statusCode}`);
        githubStatus = "FAILED";
        return reject(new Error(ERR.requestFailed));
      }

      res.on("data", d => {
        responseBody += d;
      });

      res.on("end", () => {
        try {
          const parsed = JSON.parse(responseBody);
          if (parsed.errors) {
            logger.error(`GitHub API returned GraphQL errors: ${JSON.stringify(parsed.errors)}`);
            githubStatus = "FAILED";
            return reject(new Error(ERR.requestFailed));
          }

          fs.writeFileSync("./public/profile.json", responseBody, "utf8");
          logger.info("Successfully saved GitHub profile data to public/profile.json");
          githubStatus = "SUCCESS";
          resolve();
        } catch (err) {
          logger.error(`Error parsing GitHub API response: ${err.message}`);
          githubStatus = "FAILED";
          reject(err);
        }
      });
    });

    req.on("error", error => {
      logger.error(`GitHub network request error: ${error.message}`);
      githubStatus = "FAILED";
      reject(error);
    });

    req.write(queryData);
    req.end();
  });
};

const fetchMedium = () => {
  return new Promise((resolve, reject) => {
    if (!MEDIUM_USERNAME || MEDIUM_USERNAME === "YOU MEDIUM USERNAME HERE") {
      logger.info("Medium username not set or default. Skipping Medium RSS fetch.");
      return resolve();
    }

    logger.info(`Fetching Medium blogs data for RSS feed: @${MEDIUM_USERNAME}`);
    mediumHits++;

    const options = {
      hostname: "api.rss2json.com",
      path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
      port: 443,
      method: "GET"
    };

    const req = https.request(options, res => {
      let responseBody = "";

      if (res.statusCode !== 200) {
        logger.error(`Medium API request failed with status: ${res.statusCode}`);
        mediumStatus = "FAILED";
        return reject(new Error(ERR.requestFailedMedium));
      }

      res.on("data", d => {
        responseBody += d;
      });

      res.on("end", () => {
        try {
          fs.writeFileSync("./public/blogs.json", responseBody, "utf8");
          logger.info("Successfully saved Medium blog data to public/blogs.json");
          mediumStatus = "SUCCESS";
          resolve();
        } catch (err) {
          logger.error(`Error writing Medium blog data: ${err.message}`);
          mediumStatus = "FAILED";
          reject(err);
        }
      });
    });

    req.on("error", error => {
      logger.error(`Medium network request error: ${error.message}`);
      mediumStatus = "FAILED";
      reject(error);
    });

    req.end();
  });
};

// Execute all fetch operations and log telemetry on completion
Promise.allSettled([fetchGithub(), fetchMedium()])
  .then(results => {
    const duration = Date.now() - startTime;
    const errors = results.filter(r => r.status === "rejected");
    const overallStatus = errors.length === 0 ? "SUCCESS" : "PARTIAL_FAILURE";
    
    logger.info(`Portfolio fetch pipeline finished in ${duration}ms with status: ${overallStatus}`);
    
    // Log telemetry record
    logger.logTelemetry(
      "Fetch Profile & Blogs",
      overallStatus,
      GITHUB_USERNAME || "N/A",
      MEDIUM_USERNAME || "N/A",
      githubHits,
      mediumHits,
      duration
    );

    if (errors.length > 0) {
      logger.warn(`Pipeline completed with ${errors.length} errors.`);
      errors.forEach(err => logger.error(`Pipeline rejection: ${err.reason.message}`));
    }
  })
  .catch(err => {
    const duration = Date.now() - startTime;
    logger.error(`Critical pipeline failure: ${err.message}`);
    logger.logTelemetry("Fetch Profile & Blogs", "FAILED", GITHUB_USERNAME, MEDIUM_USERNAME, githubHits, mediumHits, duration);
    process.exit(1);
  });
