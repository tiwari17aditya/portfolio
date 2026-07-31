const fs = require("fs");
const path = require("path");

// Helper to get workspace-relative paths
const getLogsDir = () => {
  // Since scripts are run inside developerFolio/, the logs directory should be at the workspace root E:\hdd-data\Projects\portfolio-website\logs
  const rootDir = path.resolve(__dirname, "..", "..");
  const logsDir = path.join(rootDir, "logs");
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }
  return logsDir;
};

const getLogFileName = () => {
  const date = new Date();
  const day = date.getDate();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  return `log_${day}_${monthName}_${year}.log`;
};

const getTimestamp = () => {
  return new Date().toISOString().replace("T", " ").substring(0, 19);
};

const writeLog = (level, message) => {
  const logsDir = getLogsDir();
  const logFile = path.join(logsDir, getLogFileName());
  const entry = `[${getTimestamp()}] [${level}] ${message}\n`;
  fs.appendFileSync(logFile, entry, "utf8");
  console.log(`[${level}] ${message}`);
};

const logger = {
  info: (message) => writeLog("INFO", message),
  warn: (message) => writeLog("WARN", message),
  error: (message) => writeLog("ERROR", message),

  // Logs execution telemetry in logs/usage_telemetry.md (Markdown table format)
  logTelemetry: (action, status, githubUser, mediumUser, githubHits, mediumHits, execTimeMs) => {
    const logsDir = getLogsDir();
    const telemetryFile = path.join(logsDir, "usage_telemetry.md");
    
    // Create file with headers if it doesn't exist
    if (!fs.existsSync(telemetryFile)) {
      const headers = `# Build & Fetch Telemetry\n\n| Timestamp | Action | Status | GitHub Username | Medium Username | GitHub API Hits | Medium API Hits | Execution Time (ms) |\n|---|---|---|---|---|---|---|---|\n`;
      fs.writeFileSync(telemetryFile, headers, "utf8");
    }

    const row = `| ${getTimestamp()} | ${action} | ${status} | ${githubUser || "N/A"} | ${mediumUser || "N/A"} | ${githubHits} | ${mediumHits} | ${execTimeMs} |\n`;
    fs.appendFileSync(telemetryFile, row, "utf8");
  },

  // Logs API quota information in logs/quota_tracking.md
  logQuota: (apiSource, limit, remaining, resetTime) => {
    const logsDir = getLogsDir();
    const quotaFile = path.join(logsDir, "quota_tracking.md");

    // Initialize if not present
    if (!fs.existsSync(quotaFile)) {
      const headers = `# API Quota Tracking\n\n| API Source | Request Limit | Remaining Requests | Reset Time | Last Check |\n|---|---|---|---|---|\n`;
      fs.writeFileSync(quotaFile, headers, "utf8");
    }

    // Since we want to update the row or just append, let's append a fresh record
    const row = `| ${apiSource} | ${limit || "N/A"} | ${remaining || "N/A"} | ${resetTime || "N/A"} | ${getTimestamp()} |\n`;
    fs.appendFileSync(quotaFile, row, "utf8");
  }
};

module.exports = logger;
