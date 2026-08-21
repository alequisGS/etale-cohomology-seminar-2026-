# Outreach invitation

This folder contains a short invitation intended for sharing in WhatsApp, Telegram, and mathematics groups.

The invitation points readers to the public site, where registration is handled through Google Forms. It does not include the private Google Meet link.

- Source: [`seminar-invitation.tex`](seminar-invitation.tex)
- Generated PDF, when available: `seminar-invitation.pdf`

The invitation sends readers to the public GitHub Pages site:

https://alequisgs.github.io/etale-cohomology-seminar-2026-/

## Compile

From the repository root:

```text
pdflatex -interaction=nonstopmode -halt-on-error -output-directory outreach outreach/seminar-invitation.tex
```

Run the command twice if cross-reference or hyperlink metadata warnings request it.
