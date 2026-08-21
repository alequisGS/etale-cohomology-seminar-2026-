# Google Form Setup

Codex cannot create the actual Google Form for you. This guide lets an organizer create it manually in a few minutes.

Do not publish the response Sheet. Do not commit form responses to this repository.

## 1. Create the form

Create a Google Form titled:

# Étale Cohomology Seminar 2026 — Registration

Use this description:

> Registration for the five-meeting pilot beginning Friday, August 28, 2026. Meetings are Fridays, 17:00-18:30 Lima / 19:00-20:30 Brasília, online via Google Meet.

Recommended confirmation message:

> Thank you for registering for the Étale Cohomology Seminar 2026. We will contact confirmed participants by email with the Google Meet information and GitHub collaboration details.

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

> We use this username to invite confirmed participants to collaborate on the seminar repository. You may write `username` or `@username`.

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

> I expect to be available on Fridays, 17:00-18:30 Lima / 19:00-20:30 Brasília, for the five-meeting pilot.

### 8. Data-use consent

Required checkbox.

Text:

> I agree that my registration information may be used for organizing this seminar and that my GitHub username may be used to invite me to the seminar repository.

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

Optionally also add:

```text
GitHub Profile
```

Suggested meaning:

- `Approved` is a checkbox controlled by the organizer.
- `Welcome Email Sent` is filled automatically by Apps Script after approval.
- `GitHub Invited` is manually checked after sending the GitHub collaborator invitation.
- `Notes` is private organizer information.

Do not publish the Sheet. Do not link it publicly.

## 4. Configure the public site

After creating the form, paste the form URLs into [`../docs/config.js`](../docs/config.js):

```js
window.SEMINAR_CONFIG = {
  googleFormEmbedUrl: "PASTE_EMBED_URL_HERE",
  googleFormViewUrl: "PASTE_PUBLIC_FORM_URL_HERE"
};
```

Use the Google Forms embed URL for `googleFormEmbedUrl`. Use the normal public form URL for `googleFormViewUrl`.

## 5. Optional welcome-email automation

The optional Apps Script lives in [`google-apps-script/`](google-apps-script/).

It sends a welcome email only after an organizer checks `Approved` in the private response Sheet. GitHub invitations remain manual.

The private Google Meet URL must be stored as a Script Property named:

```text
MEET_URL
```

Never place the Meet URL in GitHub.
