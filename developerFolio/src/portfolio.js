/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aditya Tiwari",
  title: "Hola Amigos, I'm Aditya",
  subTitle: emoji(
    "I’m an AI / ML Engineer who loves turning complex data into smart, scalable solutions. While I speak \"human\" to my teammates, I speak Python and MLOps to my servers. I specialize in building end-to-end AI pipelines and Generative AI systems that actually solve real-world problems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1sr5eI5I_xwr2X3BE1bDm-_Gwwjx-yTnM/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/tiwari17aditya",
  gmail: "tiwari17aditya@gmail.com",
  github: "https://github.com/tiwari17aditya",
  medium: "https://medium.com/@tiwari17aditya",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "GENERATIVE AI SPECIALIST TURNING LLMs INTO REAL-WORLD SOLUTIONS ALONG WITH MLOPS AND DATA SCIENCE",
  skills: [
    emoji(
      "⚡ Architect and deploy advanced Generative AI applications using RAG (Retrieval-Augmented Generation) pipelines and LLM agents for context-aware solutions."
    ),
    emoji("⚡ Build end-to-end MLOps infrastructure with Docker and Kubernetes to automate the training, testing, and deployment of predictive and generative models."),
    emoji(
      "⚡ Engineer high-performance inference systems with FastAPI, reducing latency and ensuring scalable, real-time model serving."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "OpenAI",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "Hugging Face",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "LlamaIndex",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "MLflow",
      fontAwesomeClassname: "fas fa-sync-alt"
    },
    {
      skillName: "DVC",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-microchip"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Global Nature Care Sangathan's Group Of Institutions",
      logo: require("./assets/images/college-logo.png"),
      subHeader: "Bachelor's Of Technology in Electronics and TeleCommunication Engineering",
      duration: "Aug 2018 - Aug 2022",
      desc: "Got Distinction with Honors in the Academic Term",
      descBullets: [
        "Event Manager for the College Techfest",
        "Won District Level Robotics Hackathon with Gold Medal",
      ]
    },
    {
      schoolName: "Ashoka Hall Senior Secondary School",
      logo: require("./assets/images/school-logo.png"),
      subHeader: "Higher Secondary Education",
      duration: "Apr 2016 - Apr 2018",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Won Medal at Mathematics Olympiad , 2015"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Docker",
      progressPercentage: "90%"
    },
    {
      Stack: "Python",
      progressPercentage: "90%"
    },
    {
      Stack: "Kubernetes", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Airflow",
      progressPercentage: "80%"
    },
    {
      Stack: "MLOps / LLMOps",
      progressPercentage: "70%"
    },
    {
      Stack: "Artificial Intelligence",
      progressPercentage: "45%"
    },
    {
      Stack: "Agentic AI",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI / ML Engineer",
      company: "Jio Platforms",
      companylogo: require("./assets/images/jioLogo.png"),
      date: "Aug 2022 – Present",
      desc: "Working at the heart of India's largest digital ecosystem, I contribute to building intelligent, scalable AI infrastructure that powers millions of users. My role spans end-to-end ownership of ML and GenAI systems — from research and prototyping to production deployment.",
      descBullets: [
        "Architected and deployed Retrieval-Augmented Generation (RAG) systems using LangChain, LlamaIndex, and OpenAI APIs to enable context-aware, enterprise-grade conversational AI at scale.",
        "Built and maintained robust MLOps infrastructure using Docker, Kubernetes, and Apache Airflow — automating model training, evaluation, and deployment workflows across cloud environments.",
        "Engineered high-throughput real-time inference APIs with FastAPI, significantly reducing model serving latency and enabling seamless integration with production-grade Jio products.",
        "Collaborated with cross-functional teams including data engineering, product, and DevOps to deliver end-to-end Generative AI features with measurable business impact.",
        "Optimized LLM-based solutions using Groq, Ollama, and Hugging Face Transformers — balancing performance, cost-efficiency, and accuracy for diverse use cases across the Jio digital platform."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A SHOWCASE OF FIVE PRODUCTION-GRADE AI, AUTOMATION & WEB APPLICATIONS",
  projects: [
    {
      image: require("./assets/images/vitals_guard_logo.png"),
      projectName: "Medication Tracker (VitalsGuard)",
      projectDesc: "A robust health tracking SPA + PWA app with a dual-storage engine (Supabase cloud + LocalStorage fallback) for high network resilience, secure password-protected admin panels, server-side mail sending, and a semantically versioned release workflow.",
      techStack: ["React", "TypeScript", "Supabase", "PWA", "Vercel"],
      footerLink: [
        {
          name: "Visit Deployed Site",
          url: "https://vitalsguard-health-medication-track.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/mahabharat_pipeline_logo.png"),
      projectName: "Mahabharat (Automated Video)",
      projectDesc: "An automated multi-platform video production system featuring AI-powered story script and storyboard generation, dynamic React video template compiling via Remotion, quota manager systems, and an integrated deployment dashboard.",
      techStack: ["Python", "Node.js", "Remotion", "React", "Gemini API"],
      footerLink: [
        {
          name: "Watch on YouTube",
          url: "https://www.youtube.com/playlist?list=PLTdRkcKiCRVA"
        }
      ]
    },
    {
      image: require("./assets/images/stock_analysis_logo.png"),
      projectName: "Stocks Insights Agent",
      projectDesc: "An agentic AI stock insights generator performing multi-agent reasoning, transcript fetching, and local/cloud LLM analysis to send automated daily insights via SMTP, scheduled with GitHub Actions.",
      techStack: ["Python", "CrewAI", "Ollama", "Groq", "GitHub Actions", "SMTP"],
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/tiwari17aditya/stocks_insights_agent"
        }
      ]
    },
    {
      image: require("./assets/images/pulse_vector_logo.png"),
      projectName: "Pulse Vector",
      projectDesc: "A highly sophisticated automated content production engine featuring CAD-based scheduling (daily, weekly, monthly, brainteaser workflows) with Gemini API-powered content generation and Supabase Storage for asset offloading and video processing.",
      techStack: ["Python", "Gemini API", "Supabase", "FFmpeg", "YouTube API"],
      footerLink: [
        {
          name: "Playlist — Current Affairs",
          url: "https://www.youtube.com/playlist?list=PLENP5DyB-lS4"
        },
        {
          name: "Playlist — Science & Tech",
          url: "https://www.youtube.com/playlist?list=PL4PQLXRi54n0N77FH_C4UuQ-CbLOrlM6x"
        },
        {
          name: "Playlist — History",
          url: "https://www.youtube.com/playlist?list=PLOdUTUEs2aW4"
        },
        {
          name: "Playlist — Brainteaser",
          url: "https://www.youtube.com/playlist?list=PL4PQLXRi54n0f5deGjKOCuz3VbMOMzmxO"
        }
      ]
    },
    {
      image: require("./assets/images/daily_ca_insights_logo.png"),
      projectName: "Daily Current Affairs Insights",
      projectDesc: "A cloud-native, zero-CPU agentic system running on GitHub Actions. Automatically fetches transcripts from YouTube playlists, utilizes Groq API rate-limit header tracking to optimize execution, and commits idempotency states back to Git on SMTP success.",
      techStack: ["Python", "GitHub Actions", "Groq API", "YouTube API", "SMTP"],
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/tiwari17aditya/Antigravity-daily-CA-Insights"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+91-934-xxxx-7718",
  email_address: "tiwari17aditya@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
