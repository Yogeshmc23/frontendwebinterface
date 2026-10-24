import { formatDate, priorityColor } from '../utils/format.js'

export default function TaskCard({ task, onMove, onEdit, onDelete, onView }) {
  const pVariant = priorityColor(task.priority)
  return (
    <div className="task-card">
      <div className="task-card-head">
        <div className="task-title" onClick={() => onView?.(task)} style={{ cursor: 'pointer' }}>{task.title}</div>
        <span className={`badge badge-${pVariant}`} style={{ flexShrink: 0 }}>{task.priority}</span>
      </div>
      <div className="task-desc">{task.description}</div>
      <div className="task-meta">
        <span className="badge badge-neutral small">{task.projectName}</span>
        <span className="small muted">Due {formatDate(task.dueDate)}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <img src={task.assigneeAvatar} alt={task.assignee} width={22} height={22} style={{ borderRadius: '50%', border: '1px solid var(--color-border)' }} />
        <span className="small" style={{ fontWeight: 600 }}>{task.assignee}</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {task.tags?.map((tag) => (
            <span key={tag} className="badge badge-neutral small" style={{ fontSize: 11 }}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="task-actions">
        <select
          className="select"
          value={task.status}
          onChange={(e) => onMove?.(task, e.target.value)}
          aria-label="Change status"
          style={{ padding: '6px 8px', borderRadius: 10, fontSize: 12, fontWeight: 600 }}
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Review">Review</option>
          <option value="Done">Done</option>
        </select>
        <button className="btn btn-secondary btn-sm" onClick={() => onView?.(task)}>View</button>
        <button className="btn btn-ghost btn-sm" onClick={() => onEdit?.(task)}>Edit</button>
        <button className="btn btn-ghost btn-sm" onClick={() => onDelete?.(task)} style={{ color: 'var(--color-danger)' }}>Delete</button>
      </div>
    </div>
  )
}
