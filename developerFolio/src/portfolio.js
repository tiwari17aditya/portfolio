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
    "I’m an ML & Platform Engineer with nearly 4 years of experience delivering highly reliable AI solutions and overseeing robust infrastructure operations. I specialize in bridging advanced predictive modeling with MLOps and platform management, ensuring machine learning systems are seamlessly deployed, scaled, and continuously maintained."
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
    // Generative AI & LLMs
    {
      skillName: "LangGraph",
      fontAwesomeClassname: "fas fa-network-wired",
      category: "Generative AI & LLMs"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link",
      category: "Generative AI & LLMs"
    },
    {
      skillName: "CrewAI",
      fontAwesomeClassname: "fas fa-users-cog",
      category: "Generative AI & LLMs"
    },
    {
      skillName: "Ollama",
      fontAwesomeClassname: "fas fa-microchip",
      category: "Generative AI & LLMs"
    },
    {
      skillName: "Gemini API",
      fontAwesomeClassname: "fas fa-brain",
      category: "Generative AI & LLMs"
    },
    {
      skillName: "Groq API",
      fontAwesomeClassname: "fas fa-bolt",
      category: "Generative AI & LLMs"
    },
    {
      skillName: "OpenAI API",
      fontAwesomeClassname: "fas fa-robot",
      category: "Generative AI & LLMs"
    },
    {
      skillName: "DeepSeek LLM",
      fontAwesomeClassname: "fas fa-brain",
      category: "Generative AI & LLMs"
    },

    // MLOps & Infrastructure
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
      category: "MLOps & Infrastructure"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra",
      category: "MLOps & Infrastructure"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fas fa-wind",
      category: "MLOps & Infrastructure"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github",
      category: "MLOps & Infrastructure"
    },
    {
      skillName: "Vercel",
      fontAwesomeClassname: "fas fa-cloud-upload-alt",
      category: "MLOps & Infrastructure"
    },
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "fas fa-chart-bar",
      category: "MLOps & Infrastructure"
    },
    {
      skillName: "Grafana",
      fontAwesomeClassname: "fas fa-tachometer-alt",
      category: "MLOps & Infrastructure"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal",
      category: "MLOps & Infrastructure"
    },

    // Databases & Vector Stores
    {
      skillName: "NeonDB",
      fontAwesomeClassname: "fas fa-database",
      category: "Databases & Vector Stores"
    },
    {
      skillName: "Supabase",
      fontAwesomeClassname: "fas fa-bolt",
      category: "Databases & Vector Stores"
    },
    {
      skillName: "ChromaDB",
      fontAwesomeClassname: "fas fa-layer-group",
      category: "Databases & Vector Stores"
    },
    {
      skillName: "Neo4j",
      fontAwesomeClassname: "fas fa-project-diagram",
      category: "Databases & Vector Stores"
    },

    // Backend & Web Dev
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
      category: "Backend & Web Dev"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-server",
      category: "Backend & Web Dev"
    },
    {
      skillName: "Streamlit",
      fontAwesomeClassname: "fas fa-desktop",
      category: "Backend & Web Dev"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-layer-group",
      category: "Backend & Web Dev"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react",
      category: "Backend & Web Dev"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code",
      category: "Backend & Web Dev"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      category: "Backend & Web Dev"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fas fa-paint-brush",
      category: "Backend & Web Dev"
    },
    {
      skillName: "Vite",
      fontAwesomeClassname: "fas fa-bolt",
      category: "Backend & Web Dev"
    },
    {
      skillName: "Remotion",
      fontAwesomeClassname: "fas fa-video",
      category: "Backend & Web Dev"
    },

    // Data Science & Machine Learning
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire",
      category: "Data Science & ML"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-microchip",
      category: "Data Science & ML"
    },
    {
      skillName: "Scikit-Learn",
      fontAwesomeClassname: "fas fa-cogs",
      category: "Data Science & ML"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-chart-pie",
      category: "Data Science & ML"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-calculator",
      category: "Data Science & ML"
    },
    {
      skillName: "Plotly",
      fontAwesomeClassname: "fas fa-chart-line",
      category: "Data Science & ML"
    },
    {
      skillName: "FFmpeg",
      fontAwesomeClassname: "fas fa-file-video",
      category: "Data Science & ML"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Global Nature Care Sangathan’s Group Of Institution, Jabalpur",
      logo: require("./assets/images/college-logo.png"),
      subHeader: "BTech in Electronics and Telecommunication",
      duration: "July 2018 – July 2022",
      desc: "CGPA: 8.35/10.0",
      descBullets: [
        "Got Distinction with Honors in the Academic Term",
        "Won District Level Robotics Hackathon with Gold Medal"
      ]
    },
    {
      schoolName: "Ashoka Hall Senior Secondary School",
      logo: require("./assets/images/school-logo.png"),
      subHeader: "Higher Secondary Education",
      duration: "Apr 2016 – Apr 2018",
      desc: "Completed with focus on science and mathematics.",
      descBullets: ["Won Medal at Mathematics Olympiad, 2015"]
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  categorizedExperience: [
    {
      categoryName: "🤖 Generative AI & Agentic Frameworks",
      skills: [
        { Stack: "LangGraph & LangChain" },
        { Stack: "CrewAI & Agentic AI" },
        { Stack: "Gemini & Groq LLMs" },
        { Stack: "Ollama & Local LLMs" },
        { Stack: "DeepSeek & AI Agents" }
      ]
    },
    {
      categoryName: "⚙️ MLOps & Infrastructure",
      skills: [
        { Stack: "Docker & Kubernetes" },
        { Stack: "Apache Airflow & MLOps" },
        { Stack: "GitHub Actions & CI/CD" },
        { Stack: "Prometheus & Grafana" }
      ]
    },
    {
      categoryName: "🗄️ Databases & Vector Stores",
      skills: [
        { Stack: "ChromaDB & Vector DBs" },
        { Stack: "NeonDB PostgreSQL" },
        { Stack: "Supabase" }
      ]
    },
    {
      categoryName: "🌐 Backend & Web Development",
      skills: [
        { Stack: "Python" },
        { Stack: "FastAPI & Backend" },
        { Stack: "Next.js & React" },
        { Stack: "Streamlit & UI Tools" },
        { Stack: "TypeScript & JS" }
      ]
    },
    {
      categoryName: "📊 Data Science & Machine Learning",
      skills: [
        { Stack: "Scikit-Learn & ML" },
        { Stack: "PyTorch & TensorFlow" },
        { Stack: "FFmpeg & Video Automation" }
      ]
    }
  ],
  experience: [
    { Stack: "Python" },
    { Stack: "NeonDB PostgreSQL" },
    { Stack: "Supabase" },
    { Stack: "Docker & Kubernetes" },
    { Stack: "LangGraph & LangChain" },
    { Stack: "CrewAI & Agentic AI" },
    { Stack: "ChromaDB & Vector DBs" },
    { Stack: "FastAPI & Backend" },
    { Stack: "Gemini & Groq LLMs" },
    { Stack: "Ollama & Local LLMs" },
    { Stack: "Apache Airflow & MLOps" },
    { Stack: "Next.js & React" },
    { Stack: "GitHub Actions & CI/CD" },
    { Stack: "Streamlit & UI Tools" },
    { Stack: "TypeScript & JS" },
    { Stack: "Scikit-Learn & ML" },
    { Stack: "DeepSeek & AI Agents" },
    { Stack: "FFmpeg & Video Automation" }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",
      company: "Jio Platforms Limited",
      companylogo: require("./assets/images/jioLogo.png"),
      date: "July 2022 – Present",
      desc: "Manage the internal JDSP Platform for the organization, taking full responsibility for development, cluster management, and maintaining a high-availability environment 99.9% for 500+ users.",
      descBullets: [
        "End-to-End Platform Ownership: Manage the internal JDSP Platform for the organization, taking full responsibility for development, cluster management, and maintaining a high-availability environment 99.9% for 500+ users.",
        "Infrastructure Migration & Stabilization: Successfully executed a zero-downtime migration of legacy Airflow and JDSP workloads, stabilizing core infrastructure and leading complex user workspace transitions across environments (e.g., HDP to CDP).",
        "Containerization & Orchestration: Orchestrate containerized services using Kubernetes and Docker, managing liveness probes and troubleshooting complex pod lifecycle issues (Exit Code 137) to ensure system resilience.",
        "Systems & OS Management: Handle comprehensive on-premise server activities, including OS-level maintenance, cluster upgrades, scaling operations, and infrastructure optimization to support data-intensive workloads.",
        "Automation & CI/CD: Streamline operational efficiency by automating manual processes and maintaining robust deployment pipelines through Git/GitHub, ensuring reliable version control and platform growth.",
        "Expert Technical Support: Provide dedicated L1/L2 end-to-end support, troubleshooting platform-specific bottlenecks and delivering fast resolution for data engineering and data science teams.",
        "Advanced Workflow Integration: Lead feature enhancements to streamline workflows, integrating modern tools for data orchestration with Apache Airflow and preparing the platform for scalable AI and RAG-based application deployments."
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
  subtitle: "A SHOWCASE OF 16 PRODUCTION-GRADE AI, AGENTIC SYSTEMS, MLOPS & WEB APPLICATIONS",
  projects: [
    {
      image: require("./assets/images/vitals_guard_logo.png"),
      projectName: "Medication Tracker (VitalsGuard)",
      projectDesc: "A robust health tracking SPA + PWA app with a dual-storage engine (Supabase cloud + LocalStorage fallback) for high network resilience, secure password-protected admin panels, server-side mail sending, and a semantically versioned release workflow.",
      techStack: ["React", "TypeScript", "Supabase", "PWA", "Vercel", "Vite"],
      footerLink: [
        {
          name: "Visit Deployed Site",
          url: "https://vitalsguard.vercel.app/"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/tiwari17aditya/VitalsGuard-Health-Medication-Tracker"
        }
      ]
    },
    {
      image: require("./assets/images/stock_analysis_logo.png"),
      projectName: "Local Stock Insights Autopilot Agent",
      projectDesc: "A 100% local, automated pipeline that fetches stock analysis videos from YouTube, transcribes audio locally with faster-whisper CPU int8 quantization, runs CrewAI with Ollama for market insight extraction, and sends HTML newsletter digests via SMTP TLS.",
      techStack: ["CrewAI", "Ollama", "Python", "faster-whisper", "YouTube API", "SMTP"],
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/tiwari17aditya/stocks_insights_agent"
        }
      ]
    },
    {
      image: require("./assets/images/mahabharat_pipeline_logo.png"),
      projectName: "Mahabharat (Automated Video Production)",
      projectDesc: "An automated multi-platform video production system featuring AI-powered story script and storyboard generation, dynamic React video template compiling via Remotion, quota manager systems, and automated YouTube Data API v3 upload scheduling.",
      techStack: ["Python", "Node.js", "Remotion", "React", "Gemini API", "GitHub Actions"],
      footerLink: [
        {
          name: "Watch on YouTube",
          url: "https://www.youtube.com/playlist?list=PLTdRkcKiCRVA"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/tiwari17aditya/mahabharata-series-yt-animated"
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
          name: "View on GitHub",
          url: "https://github.com/tiwari17aditya/pulsevector"
        }
      ]
    },
    {
      image: require("./assets/images/travel_planner_agent_logo.png"),
      projectName: "Agentic AI Travel Planner",
      projectDesc: "An autonomous multi-tool AI travel concierge built with LangGraph and Gemini Flash featuring a ReAct agentic loop, real-time web & weather intelligence tools, Pydantic data schemas, and an interactive Streamlit UI.",
      techStack: ["LangGraph", "Gemini API", "Streamlit", "Python", "Pydantic", "Docker"],
      footerLink: [
        {
          name: "View Codebase",
          url: "https://github.com/tiwari17aditya"
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
    },
    {
      image: require("./assets/images/orchestrator_prime_logo.png"),
      projectName: "Orchestrator Prime (Family Management)",
      projectDesc: "A fully local, 100% open-source, privacy-first multi-agent AI system for managing family interactions, tasks, schedules, and document intelligence with FastAPI backends and local LLM inference.",
      techStack: ["Python", "FastAPI", "Groq", "Ollama", "Multi-Agent"],
      footerLink: [
        {
          name: "View Local Architecture",
          url: "https://github.com/tiwari17aditya"
        }
      ]
    },
    {
      image: require("./assets/images/financial_hub_ai_logo.png"),
      projectName: "Intelligent Financial Hub AI",
      projectDesc: "An intelligent personal finance and wealth management dashboard integrating multi-agent calculators for SIP vs. Lumpsum, EMI optimization, and LangChain-assisted financial planning with glassmorphic Streamlit UI and Plotly visualizations.",
      techStack: ["Python", "Streamlit", "LangChain", "Plotly", "Financial Analytics"],
      footerLink: [
        {
          name: "View Codebase",
          url: "https://github.com/tiwari17aditya"
        }
      ]
    },
    {
      image: require("./assets/images/weather_agentic_ai_logo.png"),
      projectName: "Weather Intelligence Agent",
      projectDesc: "An agentic real-time meteorological system using LangGraph ReAct agents, Tavily Search integration, and Google Gemini LLMs to parse and provide deep predictive weather insights and activity advisories.",
      techStack: ["LangGraph", "Gemini API", "Tavily Search", "Streamlit", "Python"],
      footerLink: [
        {
          name: "View Codebase",
          url: "https://github.com/tiwari17aditya"
        }
      ]
    },
    {
      image: require("./assets/images/repo_insight_logo.png"),
      projectName: "TaskPulse Enterprise",
      projectDesc: "A modern, full-stack enterprise productivity workspace built with Next.js 14 App Router, React 19, Tailwind CSS, and NeonDB PostgreSQL for scalable task & workspace orchestration.",
      techStack: ["Next.js", "React 19", "Tailwind CSS", "NeonDB PostgreSQL", "TypeScript"],
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/tiwari17aditya/taskpulse"
        }
      ]
    },
    {
      image: require("./assets/images/vibrant_music_academy_logo.png"),
      projectName: "Vibrant Music Academy",
      projectDesc: "A modern, high-performance web application & interactive music academy platform built for Vibrant Music Academy with responsive dynamic course listings, audio previews, and sleek UI components.",
      techStack: ["React", "JavaScript", "Vite", "CSS3"],
      footerLink: [
        {
          name: "Visit Deployed Site",
          url: "https://vibrantmusicacademy.vercel.app/"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/tiwari17aditya/vibrant-music-academy"
        }
      ]
    },
    {
      image: require("./assets/images/target_air_10_logo.png"),
      projectName: "TARGET AIR 10 (Banking Exam Tracker)",
      projectDesc: "A high-performance single-page web application (SPA) for tracking 399 test papers across 20 mock test categories, featuring analytics, revision countdowns, and automated progress logging.",
      techStack: ["JavaScript", "HTML5", "CSS3", "GitHub Actions", "Neon PostgreSQL"],
      footerLink: [
        {
          name: "Live App",
          url: "https://tiwari17aditya.github.io/adda-timetable-revision/"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/tiwari17aditya/adda-timetable-revision"
        }
      ]
    },
    {
      image: require("./assets/images/git_auto_push_logo.png"),
      projectName: "Git Auto-Push Automation",
      projectDesc: "A minimal, professional background automation engine built in Python and VBScript that logs development milestones and orchestrates automated GitHub activity synchronization.",
      techStack: ["Python", "Git Automation", "VBScript", "Shell"],
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Adistar656/everydaypush"
        }
      ]
    },
    {
      image: require("./assets/images/personal_tracker_logo.png"),
      projectName: "Professional Personal Tracker",
      projectDesc: "A robust CLI-based progress and habit tracking platform built with Python and Rich for terminal-rendered charts, data exports, and milestone tracking.",
      techStack: ["Python", "Rich CLI", "JSON Engine"],
      footerLink: [
        {
          name: "View Codebase",
          url: "https://github.com/tiwari17aditya"
        }
      ]
    },
    {
      image: require("./assets/images/project_converter_logo.png"),
      projectName: "Utility Projects Suite",
      projectDesc: "A curated suite of productivity tools and single-functionality utilities, including Gmail Auto-Cleaner (IMAP SSL), Eye Care Tracker, System Maintenance scripts, and GitHub development tools.",
      techStack: ["Python", "IMAP SSL", "CLI Tooling", "Bash"],
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/tiwari17aditya/utility-projects"
        }
      ]
    },
    {
      image: require("./assets/images/google_takeout_organizer_logo.png"),
      projectName: "Google Takeout Organizer",
      projectDesc: "An automated media sorting and deduplication tool designed to process massive Google Takeout archives, extract EXIF metadata, and restore original folder hierarchies.",
      techStack: ["Python", "EXIF Data Engine"],
      footerLink: [
        {
          name: "View Codebase",
          url: "https://github.com/tiwari17aditya"
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
      title: "Machine Learning Specialization",
      subtitle: "Stanford Online / DeepLearning.AI | Provider: Coursera (2025)",
      image: require("./assets/images/stanfordLogo.png"),
      imageAlt: "Stanford Online / DeepLearning.AI Logo",
      footerLink: [
        {
          name: "Verify Certificate",
          url: "https://coursera.org/share/de22acdb045cda8dc07bd808ce609f49"
        },
        {
          name: "View PDF",
          url: require("./assets/certs/Coursera_SYGNJQH6UIWB.pdf")
        }
      ]
    },
    {
      title: "Generative AI Fundamentals Specialization",
      subtitle: "IBM | Provider: Coursera (2025)",
      image: require("./assets/images/ibm_logo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Verify Certificate",
          url: "https://coursera.org/share/fc139b1619d67a4a645ce39c22f34331"
        },
        {
          name: "View PDF",
          url: require("./assets/certs/Coursera_HWPQ9YAMLOG3.pdf")
        }
      ]
    },
    {
      title: "Linux Bash Scripting & Shell Programming Specialization",
      subtitle: "EDUCBA | Provider: Coursera (2026)",
      image: require("./assets/images/educba_logo.png"),
      imageAlt: "EDUCBA Logo",
      footerLink: [
        {
          name: "Verify Certificate",
          url: "https://coursera.org/share/b9c3a93bb82b489e29b8ccb4939ef358"
        },
        {
          name: "View PDF",
          url: require("./assets/certs/Coursera_G9J12KFZASDS.pdf")
        }
      ]
    },
    {
      title: "Python for Everybody Specialization",
      subtitle: "University of Michigan | Provider: Coursera (2024)",
      image: require("./assets/images/michigan_logo.png"),
      imageAlt: "University of Michigan Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set true to display this section, defaults to false
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
