# TaskFlow — Collaborative Task & Project Management Frontend

> **A modern, responsive, production-ready React frontend for a MERN stack work-management app.** Plan projects, track Kanban tasks, visualize progress, and manage teams — with a clean API layer ready for Node.js + Express + MongoDB.

![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![Router](https://img.shields.io/badge/React_Router-6-CA4245)
![CI](https://github.com/Yogeshmc23/frontendwebinterface/actions/workflows/ci.yml/badge.svg)

---

## 1. Overview

**TaskFlow** is a premium SaaS-style frontend that helps product teams organize work into projects, move tasks across a Kanban board, monitor overdue items, and keep ownership clear. It was built as a **MERN-ready frontend**: the UI is fully functional with curated mock data, and every network call is funneled through a single service layer (`src/services/api.js`) so swapping mocks for a real Express API is a one-line change (`VITE_API_BASE_URL`).

Repository: **https://github.com/Yogeshmc23/frontendwebinterface** · Branch: `main`

---

## 2. Problem Statement & Objectives

**Problem:** Teams lose momentum when tasks are scattered across spreadsheets, chat threads, and inboxes. Without a single workspace for planning, assignment, and progress tracking, accountability and delivery suffer.

**Objectives:**

1. Deliver a visually impressive, accessible, and fully responsive React frontend suitable for portfolios and production.
2. Provide working navigation, forms, search, filtering, sorting, pagination, modals, and state handling — not just static mockups.
3. Architect a clear backend integration point so a Node.js + Express + MongoDB API can be connected without refactoring UI code.
4. Keep mock vs. real data explicitly labeled so reviewers and developers know what requires a backend.

---

## 3. Key Features

- **Landing page** with hero, feature highlights, pricing (demo), and CTA band — responsive from 320px to desktop.
- **Authentication UI**: Login & Signup with validation, password visibility toggle, inline errors, and auth-ready Context/protected routes.
- **Dashboard**: Stat cards, project progress bars, overdue alerts, weekly chart placeholder, recent-tasks table, and activity feed.
- **Projects**: CRUD (local-state demo), search, status/priority filters, sort, pagination, and detail page with task breakdown.
- **Kanban Board (Tasks)**: 4-column board (Todo / In Progress / Review / Done), status mover, detail drawer, create/edit/delete, search, filters, sort, and list/board view toggle.
- **Team page**: Member cards with workload bars and distribution chart.
- **Profile & Settings**: Profile form, theme toggle (light/dark via `data-theme`), notification preferences, workspace/API URL display.
- **Supporting pages**: About, Contact (validated form), Help/FAQ (accordion), and custom 404.
- **Design system**: CSS variables, consistent spacing/typography, accessible focus states, keyboard navigation, light & dark themes, loading/empty/error states, and reusable components.
- **API-ready architecture**: Centralized Axios client with interceptors, env-based base URL, and domain service functions.

---

## 4. Technology Stack

| Layer | Technology | Notes |
|---|---|---|
| **UI** | React 18 (JSX), React Router 6 | Component-based, client-side routing, protected routes |
| **Build** | Vite 5 | Fast dev server + optimized production build |
| **Styling** | Plain CSS3 (Flexbox/Grid, variables, media queries) | No Tailwind/Bootstrap — custom design system |
| **HTTP** | Axios 1.x (Fetch-compatible wrapper) | Centralized in `src/services/api.js` |
| **State** | React hooks + Context API (`AuthContext`, `ThemeContext`) | `useDebounce`, `useLocalStorage` helpers |
| **Backend target** | Node.js + Express + MongoDB | Via `VITE_API_BASE_URL`, `withCredentials:true` |
| **Quality** | ESLint 8, Prettier, GitHub Actions CI | Lint + build on push/PR to `main` |
| **PM** | npm | Lockfile committed |

---

## 5. Screenshots

> Replace these placeholders with real captures after running `npm run dev`. Screenshots are not fabricated — run the app and capture the routes.

| Page | Route | Capture |
|---|---|---|
| Landing + Hero | `/` | Add `docs/screenshots/home.png` |
| Dashboard | `/dashboard` (login first) | Add `docs/screenshots/dashboard.png` |
| Kanban Board | `/tasks` | Add `docs/screenshots/board.png` |
| Projects | `/projects` | Add `docs/screenshots/projects.png` |

To generate screenshots:

1. `npm run dev`
2. Open `http://localhost:5173`
3. Use browser DevTools device toolbar to verify 375px, 768px, 1440px breakpoints.

---

## 6. Application Architecture & Directory Structure

```
frontendwebinterface/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                 # (reserved for images/icons — currently uses pravatar + CSS)
│   ├── components/
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── EmptyState.jsx
│   │   ├── Footer.jsx
│   │   ├── Loading.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pagination.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   └── TaskCard.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Help.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── NotFound.jsx
│   │   ├── Profile.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Projects.jsx
│   │   ├── Settings.jsx
│   │   ├── Signup.jsx
│   │   ├── Tasks.jsx
│   │   └── Team.jsx
│   ├── layouts/
│   │   ├── AuthLayout.jsx
│   │   ├── DashboardLayout.jsx
│   │   └── MainLayout.jsx
│   ├── services/
│   │   └── api.js              # Axios client + auth/projects/tasks/team/stats services
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   └── useLocalStorage.js
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   ├── utils/
│   │   ├── format.js           # date/priority/status helpers
│   │   ├── mockData.js         # demo data — clearly separated
│   │   └── validators.js       # login/signup/project/task validation
│   ├── styles/
│   │   ├── global.css          # variables, reset, typography, layout, buttons, inputs
│   │   └── components.css      # navbar, hero, cards, kanban, tables, modals
│   ├── App.jsx                 # routes (public, auth, protected, 404)
│   └── main.jsx                # ReactDOM root + CSS imports
├── .github/
│   └── workflows/
│       └── ci.yml              # CI: setup Node 20, npm ci, lint, build
├── .env.example                # example env — never commit real .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── LICENSE (Apache-2.0)
```

**Routing map (excerpt from `src/App.jsx`):**

- `/` → `Home`
- `/login`, `/signup` → `AuthLayout`
- `/projects`, `/projects/:id`, `/tasks`, `/team`, `/about`, `/contact`, `/help` → `MainLayout`
- `/dashboard`, `/profile`, `/settings` → `DashboardLayout` (protected)
- `*` → `NotFound` inside `MainLayout`

---

## 7. Prerequisites

- **Node.js** 18+ or 20 LTS recommended (`node -v`)
- **npm** 9+ (`npm -v`)
- **Git** (`git --version`)
- **Visual Studio Code** (or any editor) on Windows, macOS, or Linux
- Optional: a running Express API if you want real persistence (see §14)

---

## 8. Installation (Windows PowerShell, macOS/Linux similar)

```powershell
# 1) Clone the repository
git clone https://github.com/Yogeshmc23/frontendwebinterface.git
cd frontendwebinterface

# 2) Install dependencies (uses package-lock.json)
npm install

# 3) Create your environment file
Copy-Item .env.example .env
# Then edit .env and set:
# VITE_API_BASE_URL=http://localhost:5000/api

# On macOS/Linux, use:
# cp .env.example .env
```

> If `git clone` via HTTPS fails due to auth, use GitHub Desktop or `gh repo clone Yogeshmc23/frontendwebinterface`.

---

## 9. Running the Application on Windows PowerShell

```powershell
# Development server — http://localhost:5173 (host 0.0.0.0 for sandbox previews)
npm run dev

# Production preview (build + serve dist)
npm run build
npm run preview   # http://localhost:4173

# Linting
npm run lint

# Optional formatting
npm run format
```

**PowerShell troubleshooting:**

- `npm : command not found` → install Node.js from https://nodejs.org and restart PowerShell; verify with `node -v`.
- `permission denied` / `execution policy` → run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, then retry.
- Port 5173 busy → `npm run dev -- --port 5174` or set `PORT` in Vite config.

---

## 10. Environment Variable Configuration

| Variable | Required | Example | Description |
|---|---|---|---|
| `VITE_API_BASE_URL` | Yes (for backend) | `http://localhost:5000/api` | Base URL for the Express API. All calls in `src/services/api.js` are relative to this. |
| `VITE_APP_NAME` | No | `TaskFlow` | Display name (safe to expose) |
| `VITE_APP_ENV` | No | `development` | `development` / `production` |

**File safety:**

- Real `.env` is ignored by `.gitignore`. Only `.env.example` is committed.
- Never commit secrets, tokens, or database URLs to the frontend — keep them on the backend.
- If a secret was accidentally committed, rotate it immediately and rewrite history with `git filter-repo` or `BFG` (adding to `.gitignore` alone is not enough).

---

## 11. Development & Production Build Commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts Vite dev server on `0.0.0.0:5173` with HMR and API proxy (`/api` → `VITE_API_BASE_URL`) |
| `npm run build` | Production build to `dist/` (verified by CI) |
| `npm run preview` | Serves `dist/` on `0.0.0.0:4173` — test production output locally |
| `npm run lint` | ESLint over `js,jsx` — fails on unused directives or warnings |
| `npm run format` | Prettier write for `src/**/*.{js,jsx,css}` |

All scripts are in `package.json` and are the only scripts CI invokes.

---

## 12. Testing & Verification

Automated tests are not yet configured (no `npm test` script). Verification is manual + CI build:

**Automated (CI):**

- GitHub Actions workflow `.github/workflows/ci.yml` runs on pushes/PRs to `main`:
  1. `setup-node` with Node 20 + npm cache
  2. `npm ci`
  3. `npm run lint` (if present)
  4. `npm run build`
  5. Checks `dist/index.html` exists

**Manual checklist (do this before release):**

1. `npm install` — no missing packages.
2. `npm run lint` — 0 warnings/errors.
3. `npm run build` — succeeds; `dist/` contains `index.html` + assets.
4. `npm run dev` — open every route in §13; verify no console errors.
5. Test forms: Login (`alex@taskflow.demo` / `demo1234`), Signup, Project create/edit, Task create/edit, Contact — validation messages appear, success toasts show.
6. Test search/filter/sort/pagination on Projects & Tasks (both board and list views).
7. Test protected routes: `/dashboard` redirects to `/login` when logged out; after login it restores `state.from`.
8. Responsive: DevTools at 375px, 768px, 1024px, 1440px — no horizontal overflow; sidebar collapses under 980px; mobile nav toggles.
9. Empty/loading/error: filter to zero results shows `EmptyState`; dashboard shows skeletons for 450ms on mount.
10. `git status` shows no `.env` staged; `git diff --staged` has no secrets.

---

## 13. Available Routes / Pages

| Route | Layout | Auth | Description |
|---|---|---|---|
| `/` | `MainLayout` | Public | Landing — hero, features, pricing, CTA |
| `/login` | `AuthLayout` | Public | Login — email/password + validation + demo note |
| `/signup` | `AuthLayout` | Public | Registration — name/email/password/confirm + terms |
| `/dashboard` | `DashboardLayout` | Protected | Overview — stats, progress, overdue, recent tasks, feed |
| `/projects` | `MainLayout` | Public (demo) | Project list — search/filter/sort/pagination, CRUD |
| `/projects/:id` | `MainLayout` | Public | Project detail — progress, members, tasks in project |
| `/tasks` | `MainLayout` | Public | Kanban board + list — search/filter/sort, move via select, CRUD |
| `/team` | `MainLayout` | Public | Team members & workload |
| `/profile` | `DashboardLayout` | Protected | Profile form (local save) + account details |
| `/settings` | `DashboardLayout` | Protected | Theme toggle, notifications, workspace, API URL info |
| `/about` | `MainLayout` | Public | Project story, objectives, architecture |
| `/contact` | `MainLayout` | Public | Validated contact form (demo) |
| `/help` | `MainLayout` | Public | Start guide, FAQ accordion, integration notes |
| `*` | `MainLayout` | Public | Custom 404 — links to Home/Dashboard/Help |

---

## 14. API Integration Details & Expected Backend Configuration

**Client:** `src/services/api.js`

```js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, // required for httpOnly cookies
  timeout: 10000,
})
// Request interceptor attaches Bearer token if localStorage has taskflow_token
```

**Domain helpers:**

```js
authService:     { login, register, logout, me, forgotPassword }
projectsService: { list, get, create, update, remove }
tasksService:    { list, get, create, update, remove, move }
teamService:     { list }
statsService:    { overview }
```

**Expected Express routes (example):**

| Method | Path | Purpose | Auth |
|---|---|---|---|
| `POST` | `/auth/register` | Create user | No |
| `POST` | `/auth/login` | Login, set `httpOnly` cookie or return token | No |
| `POST` | `/auth/logout` | Clear cookie | Yes |
| `GET` | `/auth/me` | Current user | Yes |
| `GET` | `/projects` | List projects (query: `search,status,priority,sort,page,limit`) | Yes |
| `POST` | `/projects` | Create project | Yes |
| `GET` | `/projects/:id` | Get project + tasks | Yes |
| `PUT` | `/projects/:id` | Update project | Yes |
| `DELETE` | `/projects/:id` | Delete project | Yes |
| `GET` | `/tasks` | List tasks (query: `search,projectId,priority,status,sort,page,limit`) | Yes |
| `POST` | `/tasks` | Create task | Yes |
| `PUT` | `/tasks/:id` | Update task | Yes |
| `PATCH` | `/tasks/:id/status` | Move column | Yes |
| `DELETE` | `/tasks/:id` | Delete task | Yes |
| `GET` | `/team` | List team members | Yes |
| `GET` | `/stats/overview` | Stats for dashboard | Yes |

**CORS (Express):**

```js
import cors from 'cors'
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
```

**MongoDB (Mongoose) models sketch:**

- `User { name, email, passwordHash, role, avatar }`
- `Project { name, description, status, priority, progress, dueDate, owner, members }`
- `Task { title, description, projectId, assignee, priority, status, dueDate, tags }`

**Frontend switch:** In `Tasks.jsx` / `Projects.jsx` / `Dashboard.jsx`, replace `mockProjects` / `mockTasks` imports with service calls, e.g.:

```js
// before (demo)
import { mockProjects } from '../utils/mockData.js'
// after (live)
import { projectsService } from '../services/api.js'
const { data } = await projectsService.list({ search, status, priority, sort, page, limit })
```

---

## 15. Mock-Data Limitations & Features Requiring a Backend

**What is demo/mock today:**

- All `mockProjects`, `mockTasks`, `mockTeam`, `mockStats`, `mockActivities` in `src/utils/mockData.js`.
- Auth (`AuthContext` `login`/`register`/`logout`) writes to `localStorage` only — no session, no password hashing, no httpOnly cookies.
- CRUD for projects/tasks updates local React state; refresh loses changes.
- Contact form shows a success toast but does not `POST` anywhere.
- Dashboard weekly chart is static placeholder data.

**What requires a backend to be real:**

- Persistent authentication, authorization, password reset (`/auth/*`).
- Persistent CRUD for projects/tasks with validation and ownership checks.
- Team invitations, roles, and real workload aggregation.
- Real-time notifications, file uploads, activity persistence, pagination from DB.
- Any payment/billing flow (pricing cards are demo only).

Every demo surface shows a badge like `Demo data` or `Demo mode` so the boundary is clear.

---

## 16. Troubleshooting

| Error | Cause | Fix |
|---|---|---|
| `VITE_API_BASE_URL is not defined` | No `.env` file | `Copy-Item .env.example .env` (PowerShell) or `cp .env.example .env`; set value and restart `npm run dev` |
| `Failed to fetch` / CORS error | Backend not running or CORS not configured | Ensure Express is on `http://localhost:5000` and `cors({ origin: 'http://localhost:5173', credentials: true })` |
| `404` on API routes | Wrong base URL (missing `/api`) | Set `VITE_API_BASE_URL=http://localhost:5000/api` — note trailing `/api` |
| `npm ci` fails in CI | Lockfile out of sync | Run `npm install` locally, commit `package-lock.json`, push |
| Port 5173 in use | Another Vite/dev server running | `npm run dev -- --port 5174` or kill the other process; check `lsof -i :5173` (macOS/Linux) |
| `eslint` warnings about unused vars | Unused imports while wiring mocks | Remove unused imports or prefix with `_`; CI requires 0 warnings |
| `dist/index.html missing` after build | Build failed silently | Run `npm run build` locally; inspect error; check Vite output and `vite.config.js` proxy |
| Auth redirect loop | `ProtectedRoute` + missing `BrowserRouter` | Ensure `AuthProvider` wraps `BrowserRouter` in `App.jsx`; clear `localStorage` (`taskflow_user`, `taskflow_token`) and retry |
| Dark mode not persisting | `localStorage` blocked | Allow site storage; fallback is light theme; check `ThemeContext` toggle |

---

## 17. Contribution Guidelines

Contributions are welcome!

1. Fork the repository and create a feature branch:
   ```bash
   git checkout -b feat/your-feature
   ```
2. Follow the existing structure and style:
   - Use functional components + hooks; keep components focused.
   - Reuse CSS variables (`--color-*`, `--space-*`, `--radius-*`, `--shadow-*`).
   - Keep `src/services/api.js` as the sole HTTP boundary.
   - Validate forms via `src/utils/validators.js` and surface accessible errors.
3. Before pushing:
   ```bash
   npm run lint
   npm run build
   ```
   Ensure no secrets are staged (`git diff --staged` should not contain `.env`).
4. Commit with descriptive messages (e.g., `feat: add task filters`, `fix: handle empty project list`).
5. Open a Pull Request against `main` — describe the change, how to test, and any backend contract changes.

---

## 18. License

This project is licensed under the **Apache License 2.0** — see [LICENSE](./LICENSE) for details.

```
Copyright 2026 TaskFlow Contributors
Licensed under the Apache License, Version 2.0
http://www.apache.org/licenses/LICENSE-2.0
```

You may use, modify, and distribute this code per the Apache 2.0 terms, including the patent grant and NOTICE requirements. No warranty is provided.

---

## 19. Future Improvements (Planned, Not Completed)

> Clearly labeled as planned — not yet implemented.

- **Drag-and-drop Kanban** (e.g., `@dnd-kit`) with optimistic updates and undo.
- **Real-time collaboration**: WebSocket/Socket.io for live task moves, comments, and presence.
- **Comments & attachments** on tasks (backend storage + file validation).
- **Advanced filters**: date range, assignee, labels, saved views.
- **Calendar & Timeline** views (Gantt-style) for project planning.
- **Search command palette** (`⌘K`) with fuzzy search.
- **Role-based access** (Admin/Manager/Member) enforced by backend and reflected in UI.
- **i18n** and date/currency localization.
- **E2E tests** (Playwright) + **unit tests** (Vitest + React Testing Library) in CI.
- **Deployment**: Docker + preview environments per PR.

---

## 20. GitHub Repository

- **Repository URL:** https://github.com/Yogeshmc23/frontendwebinterface
- **Default branch:** `main`
- **This session branch:** `arena/23adef97-frontendwebinterface` (PR to `main`)
- **CI workflow:** `.github/workflows/ci.yml` — runs `npm ci`, `npm run lint`, `npm run build` on Node 20

If you cloned via SSH, use:

```bash
git remote add origin git@github.com:Yogeshmc23/frontendwebinterface.git
git push -u origin main
```

---

### Quick Reference — Exact Commands to Run Locally (Copy-Paste)

```powershell
git clone https://github.com/Yogeshmc23/frontendwebinterface.git
cd frontendwebinterface
npm install
Copy-Item .env.example .env
# edit .env -> VITE_API_BASE_URL=http://localhost:5000/api
npm run dev      # http://localhost:5173
npm run build    # verify production output in dist/
npm run preview  # http://localhost:4173
```

*Happy building — and thank you for checking out TaskFlow!*
