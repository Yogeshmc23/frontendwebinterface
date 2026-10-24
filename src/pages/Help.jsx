import { useState } from 'react'

const faqs = [
  { q: 'Is the login / auth real?', a: 'Demo mode simulates login locally (see src/context/AuthContext.jsx). In production, call authService.login() which POSTs to /auth/login. The Express backend should set an httpOnly cookie and the frontend should use apiClient with withCredentials:true. No tokens are stored insecurely in production.' },
  { q: 'How do I connect my backend?', a: 'Create a .env file from .env.example and set VITE_API_BASE_URL to your API (e.g., http://localhost:5000/api). All service functions in src/services/api.js use this base URL. Endpoints expected: /auth/*, /projects, /tasks, /team, /stats/overview. See README for the contract.' },
  { q: 'Where can I see mock-data limitations?', a: 'Every page that uses demo data shows a badge. CRUD for projects/tasks is local-state only (in-memory). Pagination, search and filters run on the client. With a backend, replace mock imports with service calls and add loading/error states (already styled).' },
  { q: 'How does pagination work?', a: 'Tasks and Projects paginate client-side in demo. The <Pagination> component supports page, totalPages, totalltems, perPage and calls onPageChange. For API pagination, switch to cursor/offset params: e.g., GET /tasks?page=2&limit=9&search=foo.' },
  { q: 'Is the app responsive and accessible?', a: 'Yes. CSS Grid/Flex with breakpoints for 320–480 (mobile), 481–768 (tablet), 769–1024 (laptop), 1025+ (desktop). Semantic HTML, focus-visible, keyboard navigation, form labels, error announcements, and reduced-motion support are built-in.' },
  { q: 'What backend is expected?', a: 'Node.js + Express with MongoDB (Mongoose). Suggested models: User, Project, Task. Provide REST routes for CRUD, auth, and stats. The frontend never talks to MongoDB directly only via your Express API.' },
]

export default function Help() {
  const [open, setOpen] = useState(0)
  return (
    <div className="container section">
      <div style={{ maxWidth: 840, margin: '0 auto', display: 'grid', gap: 16 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 30 }}>Help & FAQ</h1>
          <p className="muted" style={{ marginTop: 6 }}>Everything you need to run TaskFlow locally and integrate your MERN backend.</p>
        </div>

        <div className="surface" style={{ padding: 18, display: 'grid', gap: 12 }}>
          <h3 style={{ margin: 0, fontSize: 16 }}>Quick start Windows PowerShell</h3>
          <pre style={{ margin: 0, background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 14, overflow: 'auto', fontSize: 12, lineHeight: 1.8 }}>
{`# 1) Install dependencies
npm install

# 2) Create env file
Copy-Item .env.example .env
# Edit .env and set:
# VITE_API_BASE_URL=http://localhost:5000/api

# 3) Start dev server (Vite on http://localhost:5173)
npm run dev

# 4) Production build
npm run build
npm run preview   # serves dist on http://localhost:4173`}
          </pre>
          <div style={{ background: 'var(--color-warning-soft)', border: '1px solid #FDE68A', borderRadius: 'var(--radius-md)', padding: 10, fontSize: 12, color: '#92400E' }}>
            If you see <code>VITE_API_BASE_URL</code> missing, the app falls back to <code>http://localhost:5000/api</code> and shows mock data. Check browser console for API errors.
          </div>
        </div>

        <div style={{ display: 'grid', gap: 10 }}>
          {faqs.map((f, i) => (
            <div key={f.q} className="faq-item">
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span><span>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>

        <div className="surface" style={{ padding: 16, display: 'grid', gap: 10 }}>
          <h3 style={{ margin: 0, fontSize: 15 }}>Still need help?</h3>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-2)' }}>Reach out via the Contact page or open an issue on GitHub. For CI, the workflow at <code>.github/workflows/ci.yml</code> runs lint + build on every push to <code>main</code>.</p>
          <a href="/contact" className="btn btn-primary" style={{ width: 'fit-content' }}>Contact support</a>
        </div>
      </div>
    </div>
  )
}
