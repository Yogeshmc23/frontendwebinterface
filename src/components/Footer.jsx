import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 14 }}>
              <span style={{ width: 28, height: 28, borderRadius: 'var(--radius-md)', display: 'grid', placeItems: 'center', background: 'var(--color-primary)', color: 'white', fontSize: 11, fontWeight: 700 }}>TF</span>
              TaskFlow
            </div>
            <p>TaskFlow is a task and project workspace for product teams. Create projects, manage tasks on a Kanban board, and follow progress from planning to completion. Frontend is React and Vite, ready for a Node and Express API with MongoDB.</p>
          </div>

          <div>
            <h4 className="footer-title">Product</h4>
            <ul className="footer-links">
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/tasks">Board</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/help">Help center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/help">FAQ</Link></li>
              <li><a href="https://github.com/Yogeshmc23/frontendwebinterface" target="_blank" rel="noreferrer">GitHub repository</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms and Conditions</Link></li>
              <li><Link to="/help">Integration guide</Link></li>
              <li><span style={{ color: 'var(--color-text-3)', fontSize: 12.5 }}>Apache 2.0 Licensed</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TaskFlow Contributors. Licensed under Apache 2.0.</span>
          <span>Built in Bengaluru, IN. API base via VITE_API_BASE_URL. Sample data is labeled as demo where used.</span>
        </div>
      </div>
    </footer>
  )
}
