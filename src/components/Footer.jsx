import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, fontFamily: 'var(--font-display)' }}>
              <span style={{ width: 32, height: 32, borderRadius: 10, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg, var(--color-primary), #7C3AED)', color: 'white' }}>◈</span>
              TaskFlow
            </div>
            <p>Collaborative work management for modern teams. Plan projects, track progress, and ship work faster — with a MERN-ready frontend architecture.</p>
            <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
              <span className="badge badge-primary">React + Vite</span>
              <span className="badge badge-neutral">Express ready</span>
              <span className="badge badge-neutral">MongoDB ready</span>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Product</h4>
            <ul className="footer-links">
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/tasks">Task Board</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/help">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/help">FAQ</Link></li>
              <li><a href="https://github.com/Yogeshmc23/frontendwebinterface" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Legal & Status</h4>
            <ul className="footer-links">
              <li><span style={{ color: 'var(--color-text-3)', fontSize: 13 }}>Apache-2.0 Licensed</span></li>
              <li><span style={{ color: 'var(--color-text-3)', fontSize: 13 }}>API: VITE_API_BASE_URL</span></li>
              <li><span style={{ color: 'var(--color-text-3)', fontSize: 13 }}>Demo mode badge on mock data</span></li>
              <li><Link to="/login">Sign in</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TaskFlow. Crafted for portfolio & production use.</span>
          <span>Made with ♥ for MERN stack — <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>Bengaluru, IN</span></span>
        </div>
      </div>
    </footer>
  )
}
