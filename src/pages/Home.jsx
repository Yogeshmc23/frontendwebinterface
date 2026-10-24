import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="hero-eyebrow">✦ New — TaskFlow is MERN-ready with Vite + Express API layer</span>
              <h1 className="hero-title">Plan with clarity. <span>Deliver with momentum.</span></h1>
              <p className="hero-lead">TaskFlow is a modern task & project hub for product teams — Kanban boards, project timelines, team workloads and progress analytics. A polished, responsive React frontend architected to plug into your Node.js + MongoDB backend.</p>

              <div className="hero-ctas">
                <Link to="/signup" className="btn btn-primary btn-lg">Start free — create workspace</Link>
                <Link to="/dashboard" className="btn btn-secondary btn-lg">View live demo →</Link>
              </div>

              <div className="hero-proof">
                <div className="avatar-stack" aria-hidden>
                  <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="" />
                  <img src="https://i.pravatar.cc/100?img=4" alt="" />
                </div>
                <span>Loved by <strong>2,400+</strong> teams • <strong>4.8/5</strong> average rating • No credit card required</span>
              </div>

              <div className="stats-band" style={{ marginTop: 22 }}>
                <div><div className="stat-num">96%</div><div className="stat-label">On-time delivery</div></div>
                <div><div className="stat-num">42%</div><div className="stat-label">Faster cycle time</div></div>
                <div><div className="stat-num">12k+</div><div className="stat-label">Tasks shipped</div></div>
                <div><div className="stat-num">99.9%</div><div className="stat-label">Uptime (demo)</div></div>
              </div>
            </div>

            <div className="hero-card" aria-label="Product preview">
              <div className="hero-card-header">
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span className="window-dots"><span></span><span></span><span></span></span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-2)' }}>Workspace — Q4 Roadmap</span>
                </div>
                <span className="badge badge-success">Demo data</span>
              </div>
              <div className="hero-board">
                <div className="mini-stat">
                  <div><div style={{ fontSize: 12, color: 'var(--color-text-3)', fontWeight: 600 }}>ACTIVE PROJECTS</div><div style={{ fontWeight: 800, fontSize: 20 }}>12</div></div>
                  <span className="badge badge-primary">+3 this week</span>
                </div>
                <div style={{ display: 'grid', gap: 8 }}>
                  {[
                    { name: 'Website Redesign', pct: 68, color: '#4F46E5' },
                    { name: 'Mobile App — Phase 2', pct: 22, color: '#06B6D4' },
                    { name: 'Q4 Campaign', pct: 54, color: '#10B981' },
                  ].map((p) => (
                    <div key={p.name} style={{ display: 'grid', gap: 6 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600 }}><span>{p.name}</span><span style={{ color: 'var(--color-text-3)' }}>{p.pct}%</span></div>
                      <div className="mini-bar"><span style={{ width: `${p.pct}%` }} /></div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <div className="surface" style={{ padding: 12, borderRadius: 12 }}>
                    <div style={{ fontSize: 11, letterSpacing: '.06em', color: 'var(--color-text-3)', fontWeight: 700 }}>OVERDUE</div>
                    <div style={{ fontWeight: 800, fontSize: 18, color: 'var(--color-danger)' }}>5 tasks</div>
                  </div>
                  <div className="surface" style={{ padding: 12, borderRadius: 12 }}>
                    <div style={{ fontSize: 11, letterSpacing: '.06em', color: 'var(--color-text-3)', fontWeight: 700 }}>COMPLETED</div>
                    <div style={{ fontWeight: 800, fontSize: 18, color: 'var(--color-success)' }}>26 this week</div>
                  </div>
                </div>
                <Link to="/tasks" className="btn btn-primary btn-block">Open Kanban board →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 22px' }}>
            <h2 style={{ fontSize: 28, margin: 0 }}>Everything your team needs to stay in flow</h2>
            <p className="muted" style={{ marginTop: 8 }}>Focused features, not bloat. A clean design system, reusable components, and an API layer ready for Express + MongoDB.</p>
          </div>

          <div className="grid grid-3">
            {[
              { icon: '▦', title: 'Project workspaces', desc: 'Create projects, set priorities, track progress with visual progress bars and due dates.' },
              { icon: '◰', title: 'Kanban that moves with you', desc: 'Drag-free status updates (select-based for reliability) with search, filters, and pagination.' },
              { icon: '◉', title: 'Team & ownership', desc: 'Assign owners, see workloads, and keep accountability clear without micromanaging.' },
              { icon: '⚡', title: 'Dashboard analytics', desc: 'At-a-glance stats, recent tasks, overdue alerts, and activity feed — mock + API-ready.' },
              { icon: '⚙', title: 'Auth-ready architecture', desc: 'Login, registration, protected routes, and httpOnly cookie auth pattern via VITE_API_BASE_URL.' },
              { icon: '✦', title: 'Design system built-in', desc: 'CSS variables, responsive Grid/Flex, accessible forms, empty/loading/error states, and dark mode.' },
            ].map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon" aria-hidden>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 20, padding: 24, display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 20, alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: 22 }}>A codebase you can extend with confidence</h3>
              <p style={{ margin: 0, color: 'var(--color-text-2)', lineHeight: 1.7 }}>No Tailwind, no Bootstrap, no heavy libraries. Plain CSS + reusable components, React Router, Context for auth/theme, Axios service layer, and Vite. Replace mock data with your Express endpoints in <code style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', padding: '2px 8px', borderRadius: 8 }}>src/services/api.js</code> and <code style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', padding: '2px 8px', borderRadius: 8 }}>src/utils/mockData.js</code> is automatically bypassed.</p>
              <div className="cluster" style={{ marginTop: 14 }}>
                <span className="badge badge-primary">Clean structure</span>
                <span className="badge badge-neutral">Accessible</span>
                <span className="badge badge-neutral">Production build verified</span>
              </div>
            </div>
            <div className="surface" style={{ padding: 14, borderRadius: 14, display: 'grid', gap: 10 }}>
              <div style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 12, background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 10, padding: 12, lineHeight: 1.7 }}>
                <div><span style={{ color: 'var(--color-text-3)' }}># install</span></div>
                <div>npm install</div>
                <div><span style={{ color: 'var(--color-text-3)' }}># run dev server</span></div>
                <div>npm run dev</div>
                <div><span style={{ color: 'var(--color-text-3)' }}># env</span></div>
                <div>VITE_API_BASE_URL=http://localhost:5000/api</div>
              </div>
              <Link to="/help" className="btn btn-secondary btn-block">See integration guide →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
            <h2 style={{ margin: 0, fontSize: 24 }}>Simple, transparent pricing (demo)</h2>
            <span className="badge badge-warning">Demo content — not a real checkout</span>
          </div>
          <div className="pricing-grid">
            {[
              { name: 'Starter', price: 'Free', feat: ['Up to 3 projects', 'Kanban board', 'Community support'], cta: 'Start free', popular: false },
              { name: 'Pro', price: '₹799', period: '/month', feat: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom roles'], cta: 'Choose Pro', popular: true },
              { name: 'Team', price: '₹1,499', period: '/month', feat: ['Everything in Pro', 'SSO (backend)', 'Audit logs', 'Onboarding'], cta: 'Contact sales', popular: false },
            ].map((tier) => (
              <div key={tier.name} className={`pricing-card ${tier.popular ? 'featured' : ''}`}>
                {tier.popular && <span className="pricing-popular">Most popular</span>}
                <div style={{ fontWeight: 800 }}>{tier.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}><span style={{ fontSize: 30, fontWeight: 800 }}>{tier.price}</span>{tier.period && <span className="muted" style={{ fontSize: 13 }}>{tier.period}</span>}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8, fontSize: 13, color: 'var(--color-text-2)' }}>
                  {tier.feat.map((f) => <li key={f}>✓ {f}</li>)}
                </ul>
                <Link to="/signup" className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'} btn-block`}>{tier.cta}</Link>
              </div>
            ))}
          </div>
          <p className="small muted text-center" style={{ marginTop: 10 }}>Pricing is illustrative demo content. No payments are processed without a backend.</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED 60%, #06B6D4)', color: 'white', borderRadius: 20, padding: 24, display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 20 }}>Ready to make work flow?</h3>
              <p style={{ margin: '6px 0 0', opacity: .92, maxWidth: 560 }}>Create your free workspace, invite your team, and turn plans into shipped work. Demo login works instantly — or wire up your own API.</p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link to="/signup" className="btn" style={{ background: 'white', color: 'var(--color-primary)', borderColor: 'white' }}>Create free account</Link>
              <Link to="/contact" className="btn" style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,.4)' }}>Talk to us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
