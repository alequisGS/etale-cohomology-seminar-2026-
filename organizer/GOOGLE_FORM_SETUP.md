# Google Form Setup

Codex cannot create the actual Google Form for you. This guide lets an organizer create it manually in a few minutes.

Do not publish the response Sheet. Do not commit form responses to this repository.

Authoritative public form URL:

```text
https://docs.google.com/forms/d/e/1FAIpQLSen1UvJUkqvQJ02HzUOPgFwIi9zpOo-xfBAYwa7NcQkACTO3w/viewform
```

Authoritative embed URL:

```text
https://docs.google.com/forms/d/e/1FAIpQLSen1UvJUkqvQJ02HzUOPgFwIi9zpOo-xfBAYwa7NcQkACTO3w/viewform?embedded=true
```

## 1. Create the form

Create a Google Form titled:

# Étale Cohomology Seminar 2026 — Registration

Use this description:

> Registration for the five-meeting pilot beginning Friday, August 28, 2026. Meetings are Fridays, 17:00-18:30 Lima / 19:00-20:30 Brasília, online via Google Meet.

Recommended confirmation message:

> Thank you for registering for the Étale Cohomology Seminar 2026. Confirmed participants will receive the Google Meet information and GitHub collaboration details by email.

Do not place the Google Meet link in the form description or confirmation message.

## 2. Add questions

### 1. Full name

Short answer.

Required.

### 2. Affiliation

Short answer.

Required.

Help text:

> University, institute, independent, or another appropriate description.

Do not require a formal institution.

### 3. Email

Short answer with email validation.

Required.

### 4. GitHub username

Short answer.

Required.

Help text:

> We will use this username to invite confirmed participants to collaborate on the seminar repository. You may enter `username` or `@username`.

### 5. Current stage

Multiple choice.

Optional.

Options:

- Undergraduate
- Master's
- PhD
- Postdoc
- Faculty
- Other
- Prefer not to say

### 6. Why are you interested in the seminar?

Paragraph.

Optional.

Keep this intentionally short.

### 7. Five-week commitment

Required checkbox.

Text:

> I expect to be available on Fridays, 17:00–18:30 Lima / 19:00–20:30 Brasília, for the five-meeting pilot.

### 8. Data-use consent

Required checkbox.

Text:

> I agree that my registration information may be used for organizing this seminar and that my GitHub username may be used to invite me to collaborate on the seminar repository.

Do not require participants to sign in to a particular university domain.

## 3. Link responses to a private Sheet

In the Google Form, open **Responses** and link responses to a private Google Sheet.

The Sheet should contain the normal Google Form response columns plus organizer-only columns:

```text
Approved
Welcome Email Sent
GitHub Invited
Notes
```

Suggested meaning:

- `Approved` is a checkbox controlled by the organizer.
- `Welcome Email Sent` is filled automatically by Apps Script after approval.
- `GitHub Invited` is manually checked after sending the repository collaborator invitation.
- `Notes` is private organizer information.

Organizer workflow:

```text
NEW GOOGLE FORM RESPONSE
          ↓
PRIVATE GOOGLE SHEET
          ↓
CHECK NAME / EMAIL / GITHUB
          ↓
APPROVED ✓
          ↓
WELCOME EMAIL SENT
          ↓
MANUALLY INVITE GITHUB USER
          ↓
GITHUB INVITED ✓
```

Do not publish the Sheet. Do not link it publicly.

## 4. Update public links

After creating the form, keep the public form URL in the root [`../README.md`](../README.md) and outreach source.

The current public form URL is:

```text
https://docs.google.com/forms/d/e/1FAIpQLSen1UvJUkqvQJ02HzUOPgFwIi9zpOo-xfBAYwa7NcQkACTO3w/viewform
```

Also update [`../outreach/seminar-invitation.tex`](../outreach/seminar-invitation.tex) if the public form URL changes.

## 5. Optional welcome-email automation

The optional Apps Script lives in [`google-apps-script/`](google-apps-script/).

It sends a welcome email only after an organizer checks `Approved` in the private response Sheet. It does not automate GitHub invitations or use a GitHub token.

The private Google Meet URL must be stored as a Script Property named:

```text
MEET_URL
```

Never place the Meet URL in GitHub.
