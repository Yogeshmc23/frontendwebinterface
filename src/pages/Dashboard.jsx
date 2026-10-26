import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import StatCard from '../components/StatCard.jsx'
import { mockActivities, mockProjects, mockStats, mockTasks } from '../utils/mockData.js'
import { formatDate, isOverdue } from '../utils/format.js'
import { Icon } from '../components/Icon.jsx'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 450)
    return () => clearTimeout(t)
  }, [])

  const overdueTasks = useMemo(() => mockTasks.filter((t) => isOverdue(t.dueDate) && t.status !== 'Done'), [])
  const recentTasks = useMemo(() => mockTasks.slice(0, 5), [])

  if (loading) {
    return (
      <div style={{ display: 'grid', gap: 16 }}>
        <div className="skeleton" style={{ height: 72 }} />
        <div className="grid grid-3">
          <div className="skeleton" style={{ height: 110 }} />
          <div className="skeleton" style={{ height: 110 }} />
          <div className="skeleton" style={{ height: 110 }} />
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Welcome. Here is a summary from sample data. <span className="badge badge-neutral">Sample data</span> Connect your API to show live stats.</p>
        </div>
        <div className="cluster">
          <Link to="/tasks" className="btn btn-primary"><Icon name="plus" size={14} /> New task</Link>
          <Link to="/projects" className="btn btn-secondary">View projects</Link>
        </div>
      </div>

      <div className="grid grid-4">
        <StatCard icon={<Icon name="projects" size={14} />} label="Total projects" value={mockStats.totalProjects} delta="2" deltaLabel="sample total" />
        <StatCard icon={<Icon name="tasks" size={14} />} label="Active tasks" value={mockStats.activeTasks} delta="12" deltaLabel="sample total" />
        <StatCard icon={<Icon name="check" size={14} />} label="Completed this week" value={mockStats.completedThisWeek} delta="6" deltaLabel="sample count" />
        <StatCard icon={<Icon name="dashboard" size={14} />} label="Overdue" value={overdueTasks.length} delta="" deltaLabel={overdueTasks.length ? 'Needs attention' : 'No overdue in sample'} />
      </div>

      <div className="detail-grid">
        <div className="surface" style={{ padding: 14, display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: 14 }}>Project progress</h3>
            <Link to="/projects" className="btn btn-ghost btn-sm">View all</Link>
          </div>
          <div style={{ display: 'grid', gap: 12 }}>
            {mockProjects.slice(0, 4).map((p) => (
              <div key={p.id} style={{ display: 'grid', gap: 5 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
                  <Link to={`/projects/${p.id}`} style={{ fontWeight: 600, fontSize: 13 }}>{p.name}</Link>
                  <span className="badge badge-neutral">{p.progress}%</span>
                </div>
                <div style={{ height: 6, borderRadius: 4, background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                  <div style={{ width: `${p.progress}%`, height: '100%', background: 'var(--color-primary)', borderRadius: 4 }} />
                </div>
                <div className="small muted" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5 }}>
                  <span>{p.tasksCount} tasks</span><span>Due {formatDate(p.dueDate)}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 10, fontSize: 11.5, color: 'var(--color-text-2)', lineHeight: 1.6 }}>
            Replace <code>mockStats</code> with <code>statsService.overview()</code> (GET /stats/overview) when your backend is ready. This panel will then show live data.
          </div>
        </div>

        <div style={{ display: 'grid', gap: 12 }}>
          <div className="surface" style={{ padding: 14, display: 'grid', gap: 10 }}>
            <h3 style={{ margin: 0, fontSize: 14 }}>Overdue tasks</h3>
            {overdueTasks.length ? (
              overdueTasks.slice(0, 3).map((t) => (
                <div key={t.id} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 10, display: 'grid', gap: 5, background: 'var(--color-surface-2)' }}>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{t.title}</div>
                  <div className="small muted" style={{ fontSize: 11.5 }}>{t.projectName} Due {formatDate(t.dueDate)}</div>
                  <Link to="/tasks" className="btn btn-secondary btn-sm" style={{ width: 'fit-content' }}>Open board</Link>
                </div>
              ))
            ) : (
              <div className="small muted">No overdue tasks in sample data.</div>
            )}
          </div>

          <div className="surface" style={{ padding: 14, display: 'grid', gap: 10 }}>
            <h3 style={{ margin: 0, fontSize: 14 }}>Weekly completion</h3>
            <p className="small muted" style={{ margin: 0, fontSize: 11.5 }}>Sample chart. Connect GET /stats/overview for real weekly totals.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 5, alignItems: 'end', height: 72 }}>
              {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
                <div key={i} style={{ background: i === 5 ? 'var(--color-primary)' : 'var(--color-border)', borderRadius: 4, height: `${h}%`, minHeight: 14 }} title={`${h}%`} />
              ))}
            </div>
            <div className="small muted" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5 }}>
              <span>Mon</span><span>Sun</span><span>Sample</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1.4fr .9fr', gap: 14 }}>
        <div className="surface" style={{ padding: 14, display: 'grid', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: 14 }}>Recent tasks</h3>
            <Link to="/tasks" className="btn btn-ghost btn-sm">View board</Link>
          </div>
          <div className="table-wrap">
            <table className="table" aria-label="Recent tasks">
              <thead><tr><th>Task</th><th>Project</th><th>Assignee</th><th>Due</th><th>Status</th></tr></thead>
              <tbody>
                {recentTasks.map((t) => (
                  <tr key={t.id}>
                    <td style={{ fontWeight: 500, fontSize: 13 }}>{t.title}</td>
                    <td><span className="badge badge-neutral" style={{ fontSize: 11 }}>{t.projectName}</span></td>
                    <td>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5 }}>
                        <img src={t.assigneeAvatar} alt="" width={18} height={18} style={{ borderRadius: '50%' }} />
                        {t.assignee}
                      </span>
                    </td>
                    <td style={{ fontSize: 12.5 }}>{formatDate(t.dueDate)}</td>
                    <td><span className={`badge badge-${t.status === 'Done' ? 'success' : t.status === 'In Progress' ? 'info' : t.status === 'Review' ? 'warning' : 'neutral'}`} style={{ fontSize: 11 }}>{t.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="surface" style={{ padding: 14, display: 'grid', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: 14 }}>Sample activity</h3>
            <span className="badge badge-neutral" style={{ fontSize: 10 }}>Demo</span>
          </div>
          <p className="small muted" style={{ margin: 0, fontSize: 11.5 }}>This is sample activity for demo purposes. Real activity would come from GET /activity.</p>
          {mockActivities.map((a) => (
            <div key={a.id} className="activity-item">
              <span className="activity-dot" aria-hidden />
              <div style={{ display: 'grid', gap: 2 }}>
                <div style={{ fontSize: 12.5 }}><strong>{a.user}</strong> {a.action}</div>
                <div className="small muted" style={{ fontSize: 11.5 }}>{a.time}</div>
              </div>
            </div>
          ))}
          <Link to="/help" className="btn btn-secondary btn-sm" style={{ width: 'fit-content' }}>Open help</Link>
        </div>
      </div>
    </div>
  )
}
