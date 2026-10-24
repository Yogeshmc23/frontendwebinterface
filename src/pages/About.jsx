export default function About() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 760, margin: '0 auto', display: 'grid', gap: 18 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 32 }}>About TaskFlow</h1>
          <p className="lead" style={{ marginTop: 8 }}>TaskFlow is a focused work-management frontend — designed for real teams and built to be extended with a Node.js + Express + MongoDB backend.</p>
        </div>

        <div className="surface" style={{ padding: 18, display: 'grid', gap: 12 }}>
          <h3 style={{ margin: 0 }}>Problem we solve</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', lineHeight: 1.7 }}>Teams lose momentum when tasks live in scattered sheets, chats, and inboxes. TaskFlow brings projects, assignments, progress, and accountability into one clean workspace — without the bloat of enterprise suites.</p>
        </div>

        <div className="grid grid-2">
          <div className="surface" style={{ padding: 18 }}>
            <h4 style={{ margin: '0 0 6px' }}>Objectives</h4>
            <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-2)', fontSize: 14, lineHeight: 1.7 }}>
              <li>Provide a production-quality React frontend that’s responsive, accessible, and maintainable.</li>
              <li>Demonstrate a clean API layer that plugs into Express + MongoDB (via <code>VITE_API_BASE_URL</code>).</li>
              <li>Keep demo data clearly separated so reviewers know what’s mock vs. backend-driven.</li>
            </ul>
          </div>
          <div className="surface" style={{ padding: 18 }}>
            <h4 style={{ margin: '0 0 6px' }}>Tech choices</h4>
            <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-2)', fontSize: 14, lineHeight: 1.7 }}>
              <li><strong>React + Vite</strong> for fast DX and optimized production builds.</li>
              <li><strong>Plain CSS</strong> with variables — no Tailwind/Bootstrap to reduce lock-in.</li>
              <li><strong>React Router</strong> + <strong>Context API</strong> for routing, auth, and theme.</li>
              <li><strong>Axios</strong> centralized in <code>src/services/api.js</code> with auth interceptors.</li>
            </ul>
          </div>
        </div>

        <div className="surface" style={{ padding: 18 }}>
          <h3 style={{ margin: 0 }}>Architecture</h3>
          <pre style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 14, overflow: 'auto', fontSize: 12, lineHeight: 1.7 }}>
{`src/
  components/  → reusable UI (Navbar, Sidebar, Cards, Modal, etc.)
  pages/       → route views (Home, Dashboard, Projects, Tasks, etc.)
  layouts/     → MainLayout, DashboardLayout, AuthLayout
  services/    → api.js (API_BASE_URL via VITE_API_BASE_URL)
  context/     → AuthContext, ThemeContext
  hooks/       → useDebounce, useLocalStorage
  utils/       → mockData (demo), validators, format helpers
  styles/     → global.css + components.css (CSS variables)`}
          </pre>
        </div>

        <div className="surface" style={{ padding: 16, display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="small muted">Built in Bengaluru, IN • Apache-2.0 • MERN-ready • Production build verified</span>
          <a href="https://github.com/Yogeshmc23/frontendwebinterface" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">View on GitHub →</a>
        </div>
      </div>
    </div>
  )
}
