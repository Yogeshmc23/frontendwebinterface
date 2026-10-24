import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="hero-eyebrow">TaskFlow for product teams</span>
              <h1 className="hero-title">A task and project workspace for product teams</h1>
              <p className="hero-lead">
                TaskFlow lets you create projects, move tasks on a Kanban board, and track progress in one place. It replaces scattered sheets and chat threads with a clear structure for projects, priorities, due dates, and owners. The frontend is React with Vite and a single API layer ready for Node, Express, and MongoDB.
              </p>

              <div className="hero-ctas">
                <Link to="/signup" className="btn btn-primary btn-lg">Create account</Link>
                <Link to="/dashboard" className="btn btn-secondary btn-lg">View dashboard demo</Link>
              </div>

              <div className="hero-proof">
                <span>Demo mode uses local sample data. Add your API URL in the environment file to connect a live backend.</span>
              </div>

              <div className="info-band" style={{ marginTop: 16 }}>
                <div className="info-band-item">
                  <div className="info-band-label">Includes</div>
                  <div className="info-band-value">Projects, Board, Dashboard</div>
                  <div className="small muted">Search, filters, sorting, and pagination are included.</div>
                </div>
                <div className="info-band-item">
                  <div className="info-band-label">Built with</div>
                  <div className="info-band-value">React, Vite, Router</div>
                  <div className="small muted">Axios service layer and Context for auth and theme.</div>
                </div>
                <div className="info-band-item">
                  <div className="info-band-label">Integration</div>
                  <div className="info-band-value">VITE_API_BASE_URL</div>
                  <div className="small muted">Frontend never connects directly to MongoDB.</div>
                </div>
              </div>
            </div>

            <div className="hero-card" aria-label="Product preview project list">
              <div className="hero-card-header">
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span className="window-dots"><span></span><span></span><span></span></span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-2)' }}>Workspace Q4 Roadmap</span>
                </div>
                <span className="badge badge-neutral">Sample data</span>
              </div>
              <div className="hero-board">
                <div className="mini-stat">
                  <div><div style={{ fontSize: 11, color: 'var(--color-text-3)', fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase' }}>Active projects</div><div style={{ fontWeight: 700, fontSize: 18 }}>12</div></div>
                  <span className="badge badge-primary">Demo</span>
                </div>
                <div style={{ display: 'grid', gap: 8 }}>
                  {[
                    { name: 'Website Redesign', pct: 68 },
                    { name: 'Mobile App Phase 2', pct: 22 },
                    { name: 'Q4 Campaign', pct: 54 },
                  ].map((p) => (
                    <div key={p.name} style={{ display: 'grid', gap: 5 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, fontWeight: 500 }}><span>{p.name}</span><span style={{ color: 'var(--color-text-3)' }}>{p.pct}%</span></div>
                      <div className="mini-bar"><span style={{ width: `${p.pct}%` }} /></div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  <div className="surface" style={{ padding: 10 }}>
                    <div style={{ fontSize: 10, letterSpacing: '.05em', color: 'var(--color-text-3)', fontWeight: 600, textTransform: 'uppercase' }}>Overdue</div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>5 tasks</div>
                    <div className="small muted" style={{ fontSize: 11 }}>Sample count</div>
                  </div>
                  <div className="surface" style={{ padding: 10 }}>
                    <div style={{ fontSize: 10, letterSpacing: '.05em', color: 'var(--color-text-3)', fontWeight: 600, textTransform: 'uppercase' }}>Completed</div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>26 this week</div>
                    <div className="small muted" style={{ fontSize: 11 }}>Sample count</div>
                  </div>
                </div>
                <p className="small muted" style={{ margin: 0, fontSize: 11.5, lineHeight: 1.5 }}>This preview shows sample data from local state. It will show live data after you connect your API.</p>
                <Link to="/tasks" className="btn btn-primary btn-block">Open board</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 640, margin: '0 auto 20px' }}>
            <h2 style={{ fontSize: 22, margin: 0 }}>What TaskFlow does</h2>
            <p className="muted" style={{ marginTop: 8, fontSize: 13.5, lineHeight: 1.6 }}>Each feature maps to a real part of the product. There are no placeholder claims. If a backend is not connected, the interface shows sample data and notes the API route that will replace it.</p>
          </div>

          <div className="grid grid-3">
            {[
              { icon: 'projects', title: 'Project workspaces', desc: 'Create a project with a name, description, priority, due date, and status. See progress as a percentage and open a detail page that lists its tasks.' },
              { icon: 'tasks', title: 'Kanban board', desc: 'Tasks move between Todo, In Progress, Review, and Done using a select control. Search, filter by project and priority, sort, and paginate.' },
              { icon: 'team', title: 'Ownership', desc: 'Each task has an assignee and project. Team page shows members and workload. No hidden assignment logic.' },
              { icon: 'dashboard', title: 'Dashboard', desc: 'Shows project progress, overdue tasks, recent tasks table, and a sample activity list. Replace sample data with GET /stats/overview and GET /tasks.' },
              { icon: 'profile', title: 'Authentication', desc: 'Login and registration pages validate input and show accessible errors. Protected routes redirect to login and restore the previous location after sign in.' },
              { icon: 'settings', title: 'Design system', desc: 'CSS variables for colors, spacing, and borders. Thin borders, restrained radii, and accessible focus states. Light and dark themes.' },
            ].map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon" aria-hidden><Icon name={f.icon} size={16} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 20, display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 18, alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: 17 }}>A codebase you can extend with confidence</h3>
              <p style={{ margin: 0, color: 'var(--color-text-2)', lineHeight: 1.6, fontSize: 13.5 }}>No Tailwind, no Bootstrap, no heavy libraries. Plain CSS with reusable components, React Router, Context for auth and theme, and an Axios service layer. Replace sample data with your Express endpoints in <code style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 12 }}>src/services/api.js</code> and keep sample data in <code style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 12 }}>src/utils/mockData.js</code> separate.</p>
              <div className="cluster" style={{ marginTop: 12 }}>
                <span className="badge badge-neutral">Clean structure</span>
                <span className="badge badge-neutral">Accessible</span>
                <span className="badge badge-neutral">Build verified</span>
              </div>
            </div>
            <div className="surface" style={{ padding: 12, display: 'grid', gap: 10 }}>
              <div style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 11.5, background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 10, lineHeight: 1.7 }}>
                <div><span style={{ color: 'var(--color-text-3)' }}># install</span></div>
                <div>npm install</div>
                <div><span style={{ color: 'var(--color-text-3)' }}># run dev server</span></div>
                <div>npm run dev</div>
                <div><span style={{ color: 'var(--color-text-3)' }}># env</span></div>
                <div>VITE_API_BASE_URL=http://localhost:5000/api</div>
              </div>
              <Link to="/help" className="btn btn-secondary btn-block">See integration guide</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap', marginBottom: 14 }}>
            <h2 style={{ margin: 0, fontSize: 18 }}>How it connects to your backend</h2>
            <span className="badge badge-neutral">No backend required for demo</span>
          </div>
          <div className="grid grid-3">
            <div className="surface" style={{ padding: 16 }}>
              <div style={{ fontWeight: 600, fontSize: 13, display: 'flex', gap: 8, alignItems: 'center' }}><Icon name="projects" size={14} /> Projects API</div>
              <p className="small muted" style={{ marginTop: 6, lineHeight: 1.6 }}>GET /projects with search, status, priority, sort, page, limit. POST /projects to create. PUT /projects/:id to update.</p>
              <div className="small" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 8, fontFamily: 'ui-monospace, monospace', fontSize: 11.5 }}>projectsService.list(params)</div>
            </div>
            <div className="surface" style={{ padding: 16 }}>
              <div style={{ fontWeight: 600, fontSize: 13, display: 'flex', gap: 8, alignItems: 'center' }}><Icon name="tasks" size={14} /> Tasks API</div>
              <p className="small muted" style={{ marginTop: 6, lineHeight: 1.6 }}>GET /tasks with filters. POST /tasks, PUT /tasks/:id, PATCH /tasks/:id/status for column moves.</p>
              <div className="small" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 8, fontFamily: 'ui-monospace, monospace', fontSize: 11.5 }}>tasksService.move(id, status)</div>
            </div>
            <div className="surface" style={{ padding: 16 }}>
              <div style={{ fontWeight: 600, fontSize: 13, display: 'flex', gap: 8, alignItems: 'center' }}><Icon name="dashboard" size={14} /> Auth and stats</div>
              <p className="small muted" style={{ marginTop: 6, lineHeight: 1.6 }}>POST /auth/login and /auth/register. GET /auth/me and POST /auth/logout. GET /stats/overview for dashboard numbers.</p>
              <div className="small" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 8, fontFamily: 'ui-monospace, monospace', fontSize: 11.5 }}>authService.login(payload)</div>
            </div>
          </div>
          <p className="small muted" style={{ marginTop: 10 }}>The frontend never talks to MongoDB directly. All data goes through your Express API. Keep VITE_API_BASE_URL in your .env file and do not commit real .env.</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div style={{ background: 'var(--color-primary)', color: 'white', borderRadius: 'var(--radius-lg)', padding: 18, display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center', border: '1px solid var(--color-primary-700)' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 16 }}>Start with sample data, then connect your API</h3>
              <p style={{ margin: '6px 0 0', opacity: .9, maxWidth: 560, fontSize: 13, lineHeight: 1.6 }}>Create a free account to see the dashboard and board with sample projects and tasks, or connect your Express server to show live data.</p>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Link to="/signup" className="btn" style={{ background: 'white', color: 'var(--color-primary)', borderColor: 'white' }}>Create account</Link>
              <Link to="/contact" className="btn" style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,.45)' }}>Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
