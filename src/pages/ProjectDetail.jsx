import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { mockProjects, mockTasks } from '../utils/mockData.js'
import { formatDate, priorityColor } from '../utils/format.js'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = useMemo(() => mockProjects.find((p) => p.id === id), [id])
  const tasks = useMemo(() => mockTasks.filter((t) => t.projectId === id), [id])

  if (!project) {
    return (
      <div className="surface" style={{ padding: 24, textAlign: 'center', display: 'grid', gap: 10 }}>
        <h2 style={{ margin: 0 }}>Project not found</h2>
        <p className="muted" style={{ margin: 0 }}>The project “{id}” does not exist in demo data.</p>
        <Link to="/projects" className="btn btn-primary" style={{ width: 'fit-content', margin: '0 auto' }}>Back to projects</Link>
      </div>
    )
  }

  const done = tasks.filter((t) => t.status === 'Done').length
  const progress = tasks.length ? Math.round((done / tasks.length) * 100) : project.progress

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', gap: 10 }}>
        <Link to="/projects" className="btn btn-ghost btn-sm">← Projects</Link>
        <Link to="/tasks" className="btn btn-ghost btn-sm">Board →</Link>
      </div>

      <div className="surface" style={{ padding: 18, display: 'grid', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 26 }}>{project.name}</h1>
            <p className="muted" style={{ margin: '6px 0 0', maxWidth: 720 }}>{project.description}</p>
            <div className="cluster" style={{ marginTop: 10 }}>
              <span className="badge badge-primary">{project.status}</span>
              <span className={`badge badge-${project.priority === 'High' ? 'danger' : project.priority === 'Medium' ? 'warning' : 'info'}`}>{project.priority} priority</span>
              <span className="badge badge-neutral">Due {formatDate(project.dueDate)}</span>
              <span className="badge badge-neutral">{tasks.length} tasks</span>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 8, minWidth: 220 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, color: 'var(--color-text-3)' }}><span>Progress</span><span>{progress}%</span></div>
            <div style={{ height: 10, borderRadius: 999, background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, var(--color-primary), #7C3AED)' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex' }}>{project.members.map((m, i) => <img key={i} src={m} alt="member" width={28} height={28} style={{ borderRadius: '50%', border: '2px solid var(--color-surface)', marginLeft: i ? -8 : 0 }} />)}</div>
              <span className="small muted">Team</span>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-grid">
        <div className="surface" style={{ padding: 16, display: 'grid', gap: 12 }}>
          <h3 style={{ margin: 0, fontSize: 15 }}>Tasks in this project</h3>
          {tasks.length ? (
            <div style={{ display: 'grid', gap: 10 }}>
              {tasks.map((t) => (
                <div key={t.id} style={{ border: '1px solid var(--color-border)', borderRadius: 12, padding: 12, display: 'grid', gap: 6, background: 'var(--color-surface-2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{ fontWeight: 700, fontSize: 13 }}>{t.title}</span>
                    <span className={`badge badge-${priorityColor(t.priority)}`}>{t.priority}</span>
                  </div>
                  <div className="small muted">{t.description}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className={`badge badge-${t.status === 'Done' ? 'success' : t.status === 'In Progress' ? 'info' : t.status === 'Review' ? 'warning' : 'neutral'}`}>{t.status}</span>
                    <span className="small muted">Due {formatDate(t.dueDate)}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="small muted">No tasks yet. Add tasks from the board.</div>
          )}
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <div className="surface" style={{ padding: 16, display: 'grid', gap: 10 }}>
            <h3 style={{ margin: 0, fontSize: 14 }}>Project details</h3>
            <div style={{ display: 'grid', gap: 8, fontSize: 13 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="muted">Owner</span><strong>{project.owner}</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="muted">Tasks</span><strong>{project.tasksCount}</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="muted">Due</span><strong>{formatDate(project.dueDate)}</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="muted">Status</span><strong>{project.status}</strong></div>
            </div>
          </div>
          <div style={{ background: 'var(--color-primary-soft)', border: '1px solid #C7D2FE', borderRadius: 12, padding: 12, fontSize: 12, color: 'var(--color-primary-700)', lineHeight: 1.6 }}>
            Backend: <code>GET /projects/:id</code> should return project + populated tasks. Frontend fallback is mock data when the API is offline.
          </div>
        </div>
      </div>
    </div>
  )
}
