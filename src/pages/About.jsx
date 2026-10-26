export default function About() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 720, margin: '0 auto', display: 'grid', gap: 16 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 26 }}>About TaskFlow</h1>
          <p className="lead" style={{ marginTop: 8, fontSize: 14, lineHeight: 1.6 }}>TaskFlow is a work management frontend for small product teams. It provides projects, a Kanban board, and a dashboard in a single workspace. It is designed to be extended with a Node, Express, and MongoDB backend.</p>
        </div>

        <div className="surface" style={{ padding: 16, display: 'grid', gap: 10 }}>
          <h3 style={{ margin: 0, fontSize: 14 }}>Problem we solve</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', lineHeight: 1.6, fontSize: 13.5 }}>Teams lose momentum when tasks live in scattered sheets, chat threads, and inboxes. TaskFlow brings projects, assignments, progress, and due dates into one clear workspace, without the extra tools that larger suites include.</p>
        </div>

        <div className="grid grid-2">
          <div className="surface" style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 6px', fontSize: 13 }}>Objectives</h4>
            <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-2)', fontSize: 13, lineHeight: 1.6 }}>
              <li>Provide a production quality React frontend that is responsive, accessible, and maintainable.</li>
              <li>Show a clean API layer that connects to Express and MongoDB through VITE_API_BASE_URL.</li>
              <li>Keep sample data clearly separated so reviewers can tell what is demo and what needs a backend.</li>
            </ul>
          </div>
          <div className="surface" style={{ padding: 16 }}>
            <h4 style={{ margin: '0 0 6px', fontSize: 13 }}>Tech choices</h4>
            <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-2)', fontSize: 13, lineHeight: 1.6 }}>
              <li><strong>React and Vite</strong> for fast development and an optimized production build.</li>
              <li><strong>Plain CSS</strong> with variables. No Tailwind or Bootstrap to reduce lock in.</li>
              <li><strong>React Router</strong> and <strong>Context API</strong> for routing, auth, and theme.</li>
              <li><strong>Axios</strong> in <code style={{ background: 'var(--color-surface-2)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>src/services/api.js</code> with interceptors.</li>
            </ul>
          </div>
        </div>

        <div className="surface" style={{ padding: 16 }}>
          <h3 style={{ margin: 0, fontSize: 14 }}>Architecture</h3>
          <pre style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 12, overflow: 'auto', fontSize: 11.5, lineHeight: 1.7, marginTop: 10 }}>
{`src/
  components/  reusable UI (Navbar, Sidebar, Cards, Modal, etc.)
  pages/       route views (Home, Dashboard, Projects, Tasks, etc.)
  layouts/     MainLayout, DashboardLayout, AuthLayout
  services/    api.js (API_BASE_URL via VITE_API_BASE_URL)
  context/     AuthContext, ThemeContext
  hooks/       useDebounce, useLocalStorage
  utils/       mockData (demo), validators, format helpers
  styles/      global.css and components.css (CSS variables)`}
          </pre>
        </div>

        <div className="surface" style={{ padding: 14, display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="small muted" style={{ fontSize: 11.5 }}>Built in Bengaluru, IN · Apache 2.0 · MERN-ready frontend · Build verified in CI</span>
          <a href="https://github.com/Yogeshmc23/frontendwebinterface" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">View on GitHub</a>
        </div>
      </div>
    </div>
  )
}
