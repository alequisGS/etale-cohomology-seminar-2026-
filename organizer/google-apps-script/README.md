# Google Apps Script Welcome Email

This optional automation sends a welcome email after an organizer approves a participant in the private Google Form response Sheet.

It does not invite GitHub collaborators. GitHub invitations remain manual during the five-week pilot.

## Install

1. Open the private Google Form response Sheet.
2. Go to **Extensions → Apps Script**.
3. Copy the contents of [`Code.gs`](Code.gs) into the Apps Script editor.
4. In **Project Settings → Script Properties**, add:

```text
MEET_URL
```

Set `MEET_URL` to the private Google Meet link. Do not place that link in GitHub.

You may optionally add:

```text
REPO_URL
REGISTRATION_SHEET_NAME
```

If omitted, the script uses:

```text
https://github.com/alequisGS/etale-cohomology-seminar-2026-
```

If `REGISTRATION_SHEET_NAME` is omitted, the script only acts on sheets whose names begin with `Form Responses`.

5. Create an installable trigger:

- Function: `handleApprovalEdit`
- Event source: From spreadsheet
- Event type: On edit

6. Authorize the requested spreadsheet and MailApp/Gmail permissions.

## Required Sheet Columns

The script locates columns by header name, not by hardcoded column number.

Required headers:

```text
Email
Approved
Welcome Email Sent
```

Recommended headers:

```text
Full name
GitHub username
GitHub Invited
Notes
```

## Approval Workflow

After reviewing a registration:

1. Check the `Approved` box for that participant.
2. The installable trigger runs `handleApprovalEdit`.
3. The script sends the welcome email only if `Approved` became TRUE, `Welcome Email Sent` is empty, and a valid email exists.
4. After successful sending, `Welcome Email Sent` receives a timestamp.
5. Copy/check the participant's GitHub username.
6. Open the repository collaborator settings.
7. Invite the participant manually.
8. Mark `GitHub Invited` in the private Sheet.

The manual GitHub step prevents typo-based invitations, spam submissions, and automatic access from arbitrary public form submissions.
