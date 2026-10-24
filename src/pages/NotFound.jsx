import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container section" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', display: 'grid', gap: 14, placeItems: 'center' }}>
      <div style={{ width: 64, height: 64, borderRadius: 18, display: 'grid', placeItems: 'center', background: 'var(--color-primary-soft)', border: '1px solid #C7D2FE', fontSize: 28 }}>404</div>
      <h1 style={{ margin: 0, fontSize: 30 }}>Page not found</h1>
      <p className="muted" style={{ margin: 0, lineHeight: 1.7 }}>The page you’re looking for doesn’t exist, or it was moved. Check the URL or head back to the dashboard. All valid routes are listed in <code>src/App.jsx</code>.</p>
      <div className="cluster" style={{ justifyContent: 'center' }}>
        <Link to="/" className="btn btn-primary">Go to Home</Link>
        <Link to="/dashboard" className="btn btn-secondary">Open Dashboard</Link>
        <Link to="/help" className="btn btn-ghost">Help Center</Link>
      </div>
      <div className="small muted">If you followed an internal link, please report it via Contact — we’ll fix it.</div>
    </div>
  )
}
