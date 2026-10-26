# Security Policy

## Supported versions

This repository contains the TaskFlow frontend. Security fixes are applied to the
`main` branch. Older tags, forks, and copies are not maintained.

## Reporting a vulnerability

Please do not open a public issue for security problems.

Use GitHub's private vulnerability reporting:

1. Open the repository Security tab.
2. Select **Report a vulnerability**.
3. Include affected route or file, reproduction steps, impact, and any suggested fix.

If private reporting is unavailable, contact the maintainer through the GitHub profile
linked on the repository. Do not include secrets, access tokens, or personal data in a
report. You will receive a best-effort acknowledgement; this is a volunteer project and
no response time is guaranteed.

## Scope and known demo behavior

- This repository is a frontend. It does not include the Express or MongoDB backend.
- Login and registration are **demo only**. They write a placeholder user and token to
  `localStorage`; no credentials are validated server-side and no session is created.
- No production secrets exist in the repository. `.env` files are ignored; only
  `.env.example` with placeholders is committed.
- Every variable prefixed with `VITE_` is compiled into the public JavaScript bundle.
  Never put API keys, database URLs, or private tokens in these variables.
- Demo avatars are generated locally as SVG data URIs. The only third-party request in
  the browser is the Google Fonts stylesheet referenced by `index.html`.
- Privacy and terms pages are drafts with placeholder contacts. They are not legal advice.

## Deployment hardening checklist

- Serve over HTTPS and add `Strict-Transport-Security`.
- Send `Content-Security-Policy` that allows the fonts and API origins you actually use.
- Send `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`,
  and an appropriate `Permissions-Policy`.
- Keep `node_modules` out of the web root and run `npm audit --omit=dev` in CI.
- Replace the demo auth flow with an `httpOnly`, `Secure`, `SameSite` cookie issued by
  the backend before handling real user data.
