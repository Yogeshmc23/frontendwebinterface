import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import StatCard from '../components/StatCard.jsx'
import { mockActivities, mockProjects, mockStats, mockTasks } from '../utils/mockData.js'
import { formatDate, isOverdue } from '../utils/format.js'

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
        <div className="skeleton" style={{ height: 92 }} />
        <div className="grid grid-3">
          <div className="skeleton" style={{ height: 120 }} />
          <div className="skeleton" style={{ height: 120 }} />
          <div className="skeleton" style={{ height: 120 }} />
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Welcome back — here&apos;s what&apos;s happening today. <span className="badge badge-info">Demo data</span></p>
        </div>
        <div className="cluster">
          <Link to="/tasks" className="btn btn-primary">+ New task</Link>
          <Link to="/projects" className="btn btn-secondary">View projects</Link>
        </div>
      </div>

      <div className="grid grid-4">
        <StatCard icon="▦" label="Total projects" value={mockStats.totalProjects} delta="+2" deltaLabel="this month" />
        <StatCard icon="☰" label="Active tasks" value={mockStats.activeTasks} delta="+12" deltaLabel="vs last week" />
        <StatCard icon="✓" label="Completed this week" value={mockStats.completedThisWeek} delta="+6" deltaLabel="keeps momentum" />
        <StatCard icon="⚠" label="Overdue" value={overdueTasks.length} delta={`${overdueTasks.length ? 'Needs attention' : 'All clear'}`} />
      </div>

      <div className="detail-grid">
        <div className="surface" style={{ padding: 16, display: 'grid', gap: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: 15 }}>Project progress</h3>
            <Link to="/projects" className="btn btn-ghost btn-sm">View all →</Link>
          </div>
          <div style={{ display: 'grid', gap: 14 }}>
            {mockProjects.slice(0, 4).map((p) => (
              <div key={p.id} style={{ display: 'grid', gap: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
                  <Link to={`/projects/${p.id}`} style={{ fontWeight: 700, fontSize: 13 }}>{p.name}</Link>
                  <span className="badge badge-neutral">{p.progress}%</span>
                </div>
                <div style={{ height: 8, borderRadius: 999, background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                  <div style={{ width: `${p.progress}%`, height: '100%', background: p.progress === 100 ? 'var(--color-success)' : 'linear-gradient(90deg, var(--color-primary), #7C3AED)', borderRadius: 999 }} />
                </div>
                <div className="small muted" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{p.tasksCount} tasks</span><span>Due {formatDate(p.dueDate)}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--color-primary-soft)', border: '1px solid #C7D2FE', borderRadius: 12, padding: 12, fontSize: 12, color: 'var(--color-primary-700)', lineHeight: 1.6 }}>
            <strong>API note:</strong> Replace <code>mockStats</code> with <code>statsService.overview()</code> (GET /stats/overview) when backend is ready. The component will auto-render real data.
          </div>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <div className="surface" style={{ padding: 16, display: 'grid', gap: 12 }}>
            <h3 style={{ margin: 0, fontSize: 15 }}>Overdue tasks</h3>
            {overdueTasks.length ? (
              overdueTasks.slice(0, 3).map((t) => (
                <div key={t.id} style={{ border: '1px solid var(--color-border)', borderRadius: 12, padding: 12, display: 'grid', gap: 6, background: 'var(--color-surface-2)' }}>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{t.title}</div>
                  <div className="small muted">{t.projectName} • Due {formatDate(t.dueDate)}</div>
                  <Link to="/tasks" className="btn btn-secondary btn-sm" style={{ width: 'fit-content' }}>Open board</Link>
                </div>
              ))
            ) : (
              <div className="small muted">No overdue tasks — great work! 🎉</div>
            )}
          </div>

          <div className="surface" style={{ padding: 16, display: 'grid', gap: 10 }}>
            <h3 style={{ margin: 0, fontSize: 15 }}>Weekly completion</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6, alignItems: 'end', height: 86 }}>
              {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
                <div key={i} style={{ background: i === 5 ? 'var(--color-primary)' : 'var(--color-border)', borderRadius: 8, height: `${h}%`, minHeight: 16 }} title={`${h}%`} />
              ))}
            </div>
            <div className="small muted" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Mon</span><span>Sun</span><span style={{ fontWeight: 700, color: 'var(--color-success)' }}>↑ 12% vs last week</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1.4fr .9fr', gap: 18 }}>
        <div className="surface" style={{ padding: 16, display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: 15 }}>Recent tasks</h3>
            <Link to="/tasks" className="btn btn-ghost btn-sm">View board →</Link>
          </div>
          <div className="table-wrap">
            <table className="table" aria-label="Recent tasks">
              <thead><tr><th>Task</th><th>Project</th><th>Assignee</th><th>Due</th><th>Status</th></tr></thead>
              <tbody>
                {recentTasks.map((t) => (
                  <tr key={t.id}>
                    <td style={{ fontWeight: 600 }}>{t.title}</td>
                    <td><span className="badge badge-neutral">{t.projectName}</span></td>
                    <td>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <img src={t.assigneeAvatar} alt={t.assignee} width={20} height={20} style={{ borderRadius: '50%' }} />
                        {t.assignee}
                      </span>
                    </td>
                    <td>{formatDate(t.dueDate)}</td>
                    <td><span className={`badge badge-${t.status === 'Done' ? 'success' : t.status === 'In Progress' ? 'info' : t.status === 'Review' ? 'warning' : 'neutral'}`}>{t.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="surface" style={{ padding: 16, display: 'grid', gap: 8 }}>
          <h3 style={{ margin: 0, fontSize: 15 }}>Activity feed</h3>
          {mockActivities.map((a) => (
            <div key={a.id} className="activity-item">
              <span className="activity-dot" aria-hidden />
              <div style={{ display: 'grid', gap: 2 }}>
                <div style={{ fontSize: 13 }}><strong>{a.user}</strong> {a.action}</div>
                <div className="small muted">{a.time}</div>
              </div>
            </div>
          ))}
          <Link to="/help" className="btn btn-secondary btn-sm" style={{ width: 'fit-content' }}>View all activity</Link>
        </div>
      </div>
    </div>
  )
}
