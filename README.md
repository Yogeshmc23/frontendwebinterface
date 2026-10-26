# TaskFlow

TaskFlow is a task and project management frontend built with React, Vite, and React Router. It provides a landing page, a Kanban task board, project views, a dashboard, team and profile screens, legal pages, and both light and dark themes.

The interface runs today on clearly labeled sample data. A centralized API client is ready for a Node.js, Express, and MongoDB backend, but no backend is included in this repository.

[![CI](https://github.com/Yogeshmc23/frontendwebinterface/actions/workflows/ci.yml/badge.svg)](https://github.com/Yogeshmc23/frontendwebinterface/actions/workflows/ci.yml)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

- Repository: https://github.com/Yogeshmc23/frontendwebinterface
- Default branch: `main`
- Package: `taskflow-frontend` version `1.1.0`

## 1. What this project is

A production-oriented **frontend** for a MERN work management application. The UI is complete enough to navigate, filter, sort, paginate, and run local create/update/delete flows. Persistence, authentication, email, and billing require a backend.

| Area | Current state |
|---|---|
| UI, routing, responsive layout | Implemented |
| Search, filters, sorting, pagination | Implemented client-side |
| Project and task CRUD | In-memory demo state; resets on refresh |
| Authentication | Demo only; writes a placeholder user to `localStorage` |
| API integration layer | Implemented in `src/services/api.js`, not called by pages yet |
| Backend, database, email, payments | Not included |
| Automated tests | 39 Vitest tests across 6 files |
| CI | GitHub Actions runs lint, tests, build, and a production dependency audit |

This is not a hosted SaaS product. The demo does not validate credentials, persist data, send email, or process payments.

## 2. Features

- **Landing page** with product explanation, feature overview, and integration guidance. No invented testimonials, customer counts, or ratings.
- **Kanban board** with four columns (Todo, In Progress, Review, Done), search, project and priority filters, sorting, pagination, a list view, a task detail dialog, and create/edit/delete flows.
- **Projects** with cards, progress, status and priority filters, sorting, pagination, and project detail pages.
- **Dashboard** with stat cards, project progress, overdue sample tasks, recent tasks, and a clearly labeled sample activity feed.
- **Team** page with workload bars and demo-only member actions.
- **Authentication screens** with client-side validation, password visibility control, inline errors, and protected routes that return to the requested page after sign in.
- **Profile and settings** with a theme toggle stored in `localStorage`, notification preferences, and the active API base URL.
- **Supporting pages** for about, contact, help/FAQ, privacy, terms, and a custom 404.
- **Accessibility basics**: semantic landmarks, labeled form fields, `aria-invalid` and `aria-describedby` on errors, focus-visible outlines, keyboard-operable dialogs with focus trapping, and a reduced-motion media query.
- **Design system** in plain CSS with variables, restrained radii, thin borders, and light and dark themes. No CSS framework.

## 3. Technology stack

| Layer | Technology |
|---|---|
| UI | React 18.3.1, React Router DOM 7.18.4 |
| Build and dev server | Vite 7.3.7 with `@vitejs/plugin-react` 5.2.0 |
| Styling | CSS3 with custom properties (`src/styles/global.css`, `src/styles/components.css`) |
| HTTP client | Axios 1.20.0, configured in `src/services/api.js` |
| State | React hooks and Context API (`AuthContext`, `ThemeContext`) |
| Linting | ESLint 9 (flat config) |
| Tests | Vitest 4 with jsdom and Testing Library |
| Formatting | Prettier 3 config included, not enforced in CI |
| CI | GitHub Actions, Node.js 22 |
| License | Apache 2.0 |

## 4. Requirements

- Node.js **20.19 or newer**, or 22.12 or newer (Vite 7 and Vitest 4 require this). Node 22 LTS is recommended and is what CI uses.
- npm **10 or newer**.
- Git.
- A browser for manual checks.

The repository includes `.nvmrc` with Node 22. Run `nvm use` if you use nvm.

## 5. Installation

```bash
git clone https://github.com/Yogeshmc23/frontendwebinterface.git
cd frontendwebinterface
npm ci
cp .env.example .env
```

On Windows PowerShell, copy the environment file with:

```powershell
Copy-Item .env.example .env
```

Then edit `.env` and set `VITE_API_BASE_URL` if you have a backend. The app runs without a backend by using sample data.

## 6. Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Vite dev server on `0.0.0.0:5173` with the `/api` proxy |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build on `0.0.0.0:4173` |
| `npm run lint` | ESLint with zero warnings allowed |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run test:coverage` | Run tests with coverage reporting |
| `npm run verify` | Lint, tests, and production build in sequence |
| `npm run format` | Format `src/**/*.{js,jsx,css}` with Prettier |

`test:coverage` requires the optional `@vitest/coverage-v8` package. Install it only if you need coverage output.

## 7. Environment variables

| Variable | Required | Description |
|---|---|---|
| `VITE_API_BASE_URL` | For a live API | Backend base URL, for example `http://localhost:5000/api`. Used by `src/services/api.js` and the settings screen. |
| `VITE_DEV_PROXY_TARGET` | No | Origin for the Vite dev proxy. Defaults to `VITE_API_BASE_URL` with a trailing `/api` removed. |

Important:

- Anything prefixed with `VITE_` is compiled into the public JavaScript bundle. Never put secrets in these variables.
- `.env` and `.env.*` are ignored by Git except `.env.example`.
- The app never connects to MongoDB directly. All data access belongs in the Express API.

## 8. Testing and quality gates

The repository has a real test suite. It covers:

- form validators (login, signup, project, task);
- date formatting and status/priority helpers;
- avatar generation, including a guard that demo images are local data URIs;
- demo data integrity and pagination;
- route rendering for home, projects, tasks, project detail, legal pages, and 404;
- protected-route redirect from `/dashboard` to `/login`;
- signup legal links pointing to `/privacy` and `/terms`;
- `EmptyState` rendering a named icon instead of raw text;
- keyboard-accessible task titles and status changes;
- modal labeling, scroll lock, Escape handling, and focus restoration.

Commands:

```bash
npm run lint
npm test
npm run build
```

Verification performed in this repository on 2026-10-26:

| Check | Result |
|---|---|
| `npm ci` from the committed lockfile | Passed, 378 packages |
| `npm run lint` | Passed, 0 warnings and 0 errors |
| `npm test` | Passed, 39 tests in 6 files |
| `npm run build` | Passed, 78 modules; JS 304.20 kB (88.27 kB gzip), CSS 22.12 kB (4.73 kB gzip), HTML 2.04 kB |
| `npm run preview` route checks | `/`, `/projects`, `/tasks`, `/privacy`, `/terms`, `/projects/p1`, and an unknown path all returned HTTP 200 with SPA fallback |
| Preview host header | Accepted with `allowedHosts: true` |
| `npm audit` | 0 vulnerabilities |
| `npm audit --omit=dev` | 0 vulnerabilities |

Automated browser E2E tests, visual regression screenshots, and automated accessibility audits (for example axe) are **not** configured. Those remain manual checks.

## 9. Project structure

```text
.
├── .github/
│   ├── dependabot.yml
│   └── workflows/ci.yml
├── public/
│   ├── apple-touch-icon.png
│   ├── favicon.svg
│   └── vite.svg            # unused Vite template asset, kept for reference
├── src/
│   ├── components/         # Badge, Button, Card, EmptyState, Footer, Icon, Loading,
│   │                       # Modal, Navbar, Pagination, ProjectCard, ProtectedRoute,
│   │                       # SearchBar, Sidebar, StatCard, TaskCard
│   ├── context/            # AuthContext, ThemeContext
│   ├── hooks/              # useDebounce, useLocalStorage
│   ├── layouts/            # AuthLayout, DashboardLayout, MainLayout
│   ├── pages/              # About, Contact, Dashboard, Help, Home, Login, NotFound,
│   │                       # Privacy, Profile, ProjectDetail, Projects, Settings,
│   │                       # Signup, Tasks, Team, Terms
│   ├── services/api.js     # Axios client and domain service functions
│   ├── styles/             # global.css, components.css
│   ├── test/setup.js       # Testing Library setup and cleanup
│   ├── utils/              # api helpers, avatar, format, mockData, validators
│   ├── App.jsx             # route map
│   ├── App.test.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── .nvmrc
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── prettier config files
├── SECURITY.md
├── LICENSE
└── vite.config.js
```

## 10. Routes

| Route | Layout | Access | Page |
|---|---|---|---|
| `/` | Main | Public | Landing |
| `/login` | Auth | Public | Login |
| `/signup` | Auth | Public | Registration with terms and privacy links |
| `/projects` | Main | Public demo | Project list and local CRUD |
| `/projects/:id` | Main | Public demo | Project detail and task list |
| `/tasks` | Main | Public demo | Kanban board and list view |
| `/team` | Main | Public demo | Team and workload |
| `/about` | Main | Public | Project background and architecture |
| `/contact` | Main | Public | Demo contact form |
| `/help` | Main | Public | Quick start and FAQ |
| `/privacy` | Main | Public | Privacy Policy draft |
| `/terms` | Main | Public | Terms and Conditions draft |
| `/dashboard` | Dashboard | Protected | Overview |
| `/profile` | Dashboard | Protected | Profile form |
| `/settings` | Dashboard | Protected | Theme and preferences |
| `/home` | none | Public | Redirects to `/` |
| `*` | Main | Public | Custom 404 |

Protected routes redirect unauthenticated visitors to `/login` and restore the originally requested location after sign in.

## 11. API contract expected by the frontend

`src/services/api.js` creates one Axios client:

```js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
  withCredentials: true,
})
```

A request interceptor adds a bearer token if `localStorage.taskflow_token` exists. A response interceptor normalizes error messages.

| Service | Methods | Expected endpoints |
|---|---|---|
| `authService` | `login`, `register`, `logout`, `me`, `forgotPassword` | `POST /auth/login`, `POST /auth/register`, `POST /auth/logout`, `GET /auth/me`, `POST /auth/forgot-password` |
| `projectsService` | `list`, `get`, `create`, `update`, `remove` | `GET/POST /projects`, `GET/PUT/DELETE /projects/:id` |
| `tasksService` | `list`, `get`, `create`, `update`, `remove`, `move` | `GET/POST /tasks`, `GET/PUT/DELETE /tasks/:id`, `PATCH /tasks/:id/status` |
| `teamService` | `list` | `GET /team` |
| `statsService` | `overview` | `GET /stats/overview` |

Suggested Express CORS configuration for local development:

```js
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
```

To move from demo data to live data, replace imports such as `mockProjects` and `mockTasks` in `Projects.jsx`, `Tasks.jsx`, `Dashboard.jsx`, and `ProjectDetail.jsx` with the corresponding service calls, and add loading and error handling where needed. The styles for those states already exist.

## 12. Demo data and known limitations

- Sample projects, tasks, team members, activity, and statistics live in `src/utils/mockData.js` and are labeled in the UI.
- Login and registration store a placeholder user and token in `localStorage` (`taskflow_user`, `taskflow_token`). No password is checked or stored.
- Project and task create, update, and delete only change React state and are lost on refresh.
- The contact form validates input and shows a confirmation but does not send or store data.
- Delete actions use the browser `confirm()` dialog.
- Demo avatars are generated locally as SVG data URIs. There are no remote avatar requests.
- The only third-party browser request is the Google Fonts stylesheet in `index.html`. Self-host the font if you need to avoid that request.
- Privacy and Terms are drafts. They contain placeholder contacts (`privacy@taskflow.example.com`, `support@taskflow.example.com`) and no governing law. Have them reviewed before collecting real data.
- `index.html` intentionally omits `canonical`, `og:url`, and `og:image` because no production domain is connected. Add absolute URLs after deployment.
- No E2E, visual regression, or axe tests are configured.
- There is no backend, database, email delivery, or payment flow in this repository.

## 13. Security notes

- No API keys, tokens, passwords, private keys, or production connection strings are stored in the repository.
- `.env` files are ignored. `.env.example` contains placeholders only.
- `npm audit` reported 0 vulnerabilities after the dependency upgrade performed in this audit. Before the upgrade, `react-router-dom` 6.x and `vite` 5.x had published advisories; the project now uses `react-router-dom` 7.18.4 and `vite` 7.3.7.
- React escapes rendered text by default. The codebase does not use `dangerouslySetInnerHTML`, `eval`, or direct `innerHTML` writes.
- Storing auth tokens in `localStorage` is a demo convenience and is not recommended for production. Use `httpOnly`, `Secure`, `SameSite` cookies issued by the backend.
- Configure security headers at the hosting layer (CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`). See `SECURITY.md`.
- Report vulnerabilities privately through the repository Security tab. Do not open a public issue with exploit details.

## 14. Deployment

The build output is a static site in `dist/`.

1. Set `VITE_API_BASE_URL` in the hosting provider's build environment.
2. Run `npm ci && npm run build`.
3. Publish `dist/`.
4. Configure SPA fallback so unknown paths serve `index.html` (required for `/projects/:id`, `/privacy`, and other client routes). Examples: Vercel rewrite, Netlify `_redirects` with `/* /index.html 200`, or GitHub Pages 404 fallback.
5. Add HTTPS and the security headers listed in `SECURITY.md`.
6. Add `canonical`, `og:url`, and a 1200x630 `og:image` with your real domain once one exists.
7. Replace placeholder legal contacts and have the legal pages reviewed.

No production deployment URL or custom domain is claimed by this repository. Deployment has not been performed as part of this audit.

## 15. Continuous integration

`.github/workflows/ci.yml` runs on pushes and pull requests to `main`:

1. checkout;
2. Node.js 22 with npm cache;
3. `npm ci`;
4. `npm run lint`;
5. `npm test`;
6. `npm run build`;
7. `test -f dist/index.html`;
8. `npm audit --omit=dev --audit-level=high`.

The workflow uses read-only repository permissions and cancels superseded runs on the same ref. `.github/dependabot.yml` checks npm weekly and GitHub Actions monthly.

Branch protection is a repository setting. If direct pushes to `main` are restricted, open a pull request from a feature branch instead of bypassing protection.

## 16. Contributing

1. Create a branch: `git checkout -b feat/your-feature`.
2. Keep HTTP access inside `src/services/api.js`; keep demo data in `src/utils/mockData.js`.
3. Reuse the CSS variables instead of hardcoding colors and spacing.
4. Run `npm run verify` before opening a pull request.
5. Do not commit `.env`, credentials, build output, or local database files.
6. Describe behavior changes and backend contract changes in the pull request.

## 17. Accessibility and responsiveness

Implemented: landmarks, headings, labeled inputs, inline validation text tied to fields with `aria-describedby`, focus-visible outlines, keyboard-operable modal dialogs with focus trapping and restoration, status messages for async or demo actions, and reduced-motion support.

Layouts are built with CSS Grid and Flexbox and include breakpoints for small phones through desktop. Automated accessibility and cross-browser visual checks are not part of CI; run them manually before a release.

## 18. License

Licensed under the Apache License 2.0. See [LICENSE](LICENSE).

```text
Copyright 2026 TaskFlow Contributors
Licensed under the Apache License, Version 2.0
http://www.apache.org/licenses/LICENSE-2.0
```

## 19. Roadmap (not implemented)

- Connect the Express and MongoDB backend and replace mock data.
- Replace demo auth with server-issued `httpOnly` cookies, password reset, and session invalidation.
- Drag-and-drop Kanban with optimistic updates and undo.
- Real-time updates, comments, and attachments.
- Role-based access control enforced by the API.
- Server-side pagination and filtering.
- Playwright E2E tests and automated accessibility checks.
- Containerized deployment with preview environments.
