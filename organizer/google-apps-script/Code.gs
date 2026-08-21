const DEFAULT_REPO_URL = "https://github.com/alequisGS/etale-cohomology-seminar-2026-";
const APPROVED_HEADER = "Approved";
const EMAIL_SENT_HEADER = "Welcome Email Sent";
const EMAIL_HEADER = "Email";
const NAME_HEADER = "Full name";
const GITHUB_HEADER = "GitHub username";

function handleApprovalEdit(e) {
  try {
    if (!e || !e.range) return;

    const sheet = e.range.getSheet();
    const row = e.range.getRow();
    const column = e.range.getColumn();

    if (row === 1) return;
    if (!isRegistrationSheet_(sheet)) return;

    const headers = getHeaders_(sheet);
    const approvedColumn = headers[APPROVED_HEADER];
    const sentColumn = headers[EMAIL_SENT_HEADER];
    const emailColumn = headers[EMAIL_HEADER];

    if (!approvedColumn || !sentColumn || !emailColumn) {
      console.error("Missing required headers. Required: Email, Approved, Welcome Email Sent.");
      return;
    }

    if (column !== approvedColumn) return;

    const approvedValue = sheet.getRange(row, approvedColumn).getValue();
    if (approvedValue !== true) return;

    const sentValue = sheet.getRange(row, sentColumn).getValue();
    if (sentValue) return;

    const email = String(sheet.getRange(row, emailColumn).getValue() || "").trim();
    if (!isValidEmail_(email)) {
      console.error(`No valid email for approved row ${row}.`);
      return;
    }

    const meetUrl = getRequiredProperty_("MEET_URL");
    const repoUrl = PropertiesService.getScriptProperties().getProperty("REPO_URL") || DEFAULT_REPO_URL;
    const fullName = getOptionalCell_(sheet, row, headers[NAME_HEADER]);
    const githubUsername = normalizeGitHubUsername_(getOptionalCell_(sheet, row, headers[GITHUB_HEADER]));

    sendWelcomeEmail_({
      email,
      fullName,
      githubUsername,
      meetUrl,
      repoUrl
    });

    sheet.getRange(row, sentColumn).setValue(new Date());
  } catch (error) {
    console.error(`Welcome email automation failed: ${error && error.stack ? error.stack : error}`);
  }
}

function getHeaders_(sheet) {
  const values = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const headers = {};
  values.forEach((value, index) => {
    const header = String(value || "").trim();
    if (header) headers[header] = index + 1;
  });
  return headers;
}

function isRegistrationSheet_(sheet) {
  const configuredName = PropertiesService.getScriptProperties().getProperty("REGISTRATION_SHEET_NAME");
  if (configuredName) {
    return sheet.getName() === configuredName;
  }
  return /^Form Responses\b/i.test(sheet.getName());
}

function getOptionalCell_(sheet, row, column) {
  if (!column) return "";
  return String(sheet.getRange(row, column).getValue() || "").trim();
}

function getRequiredProperty_(name) {
  const value = PropertiesService.getScriptProperties().getProperty(name);
  if (!value) {
    throw new Error(`Missing required Script Property: ${name}`);
  }
  return value;
}

function isValidEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeGitHubUsername_(value) {
  return String(value || "").trim().replace(/^@+/, "");
}

function firstName_(fullName) {
  const trimmed = String(fullName || "").trim();
  return trimmed ? trimmed.split(/\s+/)[0] : "";
}

function sendWelcomeEmail_({ email, fullName, githubUsername, meetUrl, repoUrl }) {
  const greetingName = firstName_(fullName);
  const greeting = greetingName ? `Dear ${greetingName},` : "Dear participant,";
  const githubLine = githubUsername
    ? `We have your GitHub username as @${githubUsername}. A GitHub collaborator invitation may arrive separately.`
    : "A GitHub collaborator invitation may arrive separately.";

  const body = `${greeting}

Welcome to the Étale Cohomology Seminar 2026.

First meeting: Friday, August 28, 2026

Time:
- 17:00-18:30 Lima
- 19:00-20:30 Brasília/Rio

Google Meet: ${meetUrl}

GitHub: ${repoUrl}

Course: Daniel Litt, Étale Cohomology and the Weil Conjectures
https://www.daniellitt.com/tale-cohomology/

Each week we use:

3 + 2 + 1 + E + R + P

3 — three things you think you understood
2 — two points of friction
1 — one question for humans
E — one example or non-example
R — one review of another contribution
P — Problem of the Week

For P, try the common Problem of the Week before the meeting. You are not required to solve it completely; bring your approach, partial progress, or point of difficulty.

${githubLine}

See you at the seminar.`;

  MailApp.sendEmail({
    to: email,
    subject: "Étale Cohomology Seminar 2026 — Welcome",
    body
  });
}
