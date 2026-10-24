import { Link } from 'react-router-dom'
import { formatDate, statusColor } from '../utils/format.js'

export default function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <div className="feature-card" style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'flex-start' }}>
        <div style={{ display: 'grid', gap: 6 }}>
          <Link to={`/projects/${project.id}`} style={{ fontWeight: 800, fontSize: 15, lineHeight: 1.3 }}>{project.name}</Link>
          <span className={`badge badge-${statusColor(project.status)}`} style={{ width: 'fit-content' }}>{project.status}</span>
        </div>
        <span className={`badge badge-${project.priority === 'High' ? 'danger' : project.priority === 'Medium' ? 'warning' : 'info'}`}>{project.priority}</span>
      </div>

      <p style={{ margin: 0, color: 'var(--color-text-3)', fontSize: 13, lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {project.description}
      </p>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--color-text-3)', fontWeight: 600 }}>
          <span>Progress</span><span>{project.progress}%</span>
        </div>
        <div style={{ height: 8, borderRadius: 4, background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', overflow: 'hidden', marginTop: 6 }}>
          <div style={{ width: `${project.progress}%`, height: '100%', background: 'var(--color-primary)', borderRadius: 4 }} />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex' }}>
            {project.members.map((m, i) => (
              <img key={i} src={m} alt="member" width={26} height={26} style={{ borderRadius: '50%', border: '2px solid var(--color-surface)', marginLeft: i ? -6 : 0 }} />
            ))}
          </div>
          <span className="small muted">{project.tasksCount} tasks • Due {formatDate(project.dueDate)}</span>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <Link to={`/projects/${project.id}`} className="btn btn-secondary btn-sm">View</Link>
          <button className="btn btn-ghost btn-sm" onClick={() => onEdit?.(project)}>Edit</button>
          <button className="btn btn-ghost btn-sm" style={{ color: 'var(--color-danger)' }} onClick={() => onDelete?.(project)}>Delete</button>
        </div>
      </div>
    </div>
  )
}
