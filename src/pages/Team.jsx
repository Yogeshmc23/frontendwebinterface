import { mockTeam } from '../utils/mockData.js'

export default function Team() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Team</h1>
          <p className="page-subtitle">Workloads and ownership at a glance • <span className="badge badge-info">Demo data GET /team</span></p>
        </div>
        <button className="btn btn-secondary" onClick={() => alert('Demo: Invite flow would open (requires backend).')}>Invite member</button>
      </div>

      <div className="grid grid-3">
        {mockTeam.map((m) => (
          <div key={m.id} className="surface" style={{ padding: 18, display: 'grid', gap: 12 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <img src={m.avatar} alt={m.name} width={48} height={48} style={{ borderRadius: '50%', border: '2px solid var(--color-border)' }} />
              <div>
                <div style={{ fontWeight: 800 }}>{m.name}</div>
                <div className="small muted">{m.role}</div>
                <div className="small muted">{m.email}</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge badge-neutral">{m.tasks} tasks assigned</span>
              <div style={{ height: 8, flex: 1, margin: '0 12px', borderRadius: 4, background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, m.tasks * 7)}%`, height: '100%', background: 'var(--color-primary)' }} />
              </div>
            </div>
            <div className="cluster">
              <button className="btn btn-secondary btn-sm" onClick={() => alert(`Demo: Message to ${m.name}`)}>Message</button>
              <button className="btn btn-ghost btn-sm" onClick={() => alert(`Demo: View tasks for ${m.name}`)}>View tasks</button>
            </div>
          </div>
        ))}
      </div>

      <div className="surface" style={{ padding: 16 }}>
        <h3 style={{ margin: '0 0 10px', fontSize: 15 }}>Workload distribution</h3>
        <div style={{ display: 'grid', gap: 10 }}>
          {mockTeam.map((m) => (
            <div key={m.id} style={{ display: 'grid', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                <span style={{ fontWeight: 600 }}>{m.name}</span><span className="muted">{m.tasks} tasks</span>
              </div>
              <div style={{ height: 8, borderRadius: 4, background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                <div style={{ width: `${(m.tasks / 15) * 100}%`, height: '100%', background: 'var(--color-primary)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
