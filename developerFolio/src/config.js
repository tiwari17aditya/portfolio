import * as portfolio from "./portfolio";

// Centralized configuration wrapper resolving both environment variables (resolved at build time)
// and portfolio profile details from portfolio.js
const config = {
  ...portfolio,
  env: {
    githubToken: process.env.REACT_APP_GITHUB_TOKEN || "",
    githubUsername: process.env.REACT_APP_GITHUB_USERNAME || portfolio.greeting.username || "tiwari17aditya",
    useGithubData: process.env.REACT_APP_USE_GITHUB_DATA === "true",
    mediumUsername: process.env.REACT_APP_MEDIUM_USERNAME || "tiwari17aditya"
  }
};

export default config;
