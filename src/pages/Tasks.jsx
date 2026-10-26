import { useEffect, useMemo, useState } from 'react'
import TaskCard from '../components/TaskCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Modal from '../components/Modal.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Pagination from '../components/Pagination.jsx'
import { mockProjects, mockTasks as initialTasks } from '../utils/mockData.js'
import { useDebounce } from '../hooks/useDebounce.js'
import { validateTask } from '../utils/validators.js'
import { formatDate } from '../utils/format.js'
import { avatarFor } from '../utils/avatar.js'

const perPage = 9
const columns = ['Todo', 'In Progress', 'Review', 'Done']

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks)
  const [query, setQuery] = useState('')
  const [projectFilter, setProjectFilter] = useState('All')
  const [priorityFilter, setPriorityFilter] = useState('All')
  const [sort, setSort] = useState('dueSoon')
  const [page, setPage] = useState(1)
  const [view, setView] = useState('board') // board | list
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [detail, setDetail] = useState(null)
  const [form, setForm] = useState({ title: '', description: '', projectId: '', priority: 'Medium', dueDate: '', assignee: 'Alex Morgan' })
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState('')

  const debounced = useDebounce(query, 250)

  useEffect(() => { setPage(1) }, [debounced, projectFilter, priorityFilter, sort, view])

  const filtered = useMemo(() => {
    let list = [...tasks]
    if (debounced.trim()) {
      const q = debounced.trim().toLowerCase()
      list = list.filter((t) => `${t.title} ${t.description} ${t.tags?.join(' ')}`.toLowerCase().includes(q))
    }
    if (projectFilter !== 'All') list = list.filter((t) => t.projectId === projectFilter)
    if (priorityFilter !== 'All') list = list.filter((t) => t.priority === priorityFilter)
    if (sort === 'dueSoon') list.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    else if (sort === 'priority') {
      const order = { High: 0, Medium: 1, Low: 2 }
      list.sort((a, b) => order[a.priority] - order[b.priority])
    } else if (sort === 'name') list.sort((a, b) => a.title.localeCompare(b.title))
    return list
  }, [tasks, debounced, projectFilter, priorityFilter, sort])

  const grouped = useMemo(() => {
    const g = Object.fromEntries(columns.map((c) => [c, []]))
    for (const t of filtered) g[t.status]?.push(t)
    return g
  }, [filtered])

  const pagedList = useMemo(() => filtered.slice((page - 1) * perPage, page * perPage), [filtered, page])
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))

  const handleMove = (task, nextStatus) => {
    setTasks((prev) => prev.map((t) => (t.id === task.id ? { ...t, status: nextStatus } : t)))
    setToast(`Moved “${task.title}”  to  ${nextStatus}`)
    setTimeout(() => setToast(''), 2000)
  }

  const handleDelete = (task) => {
    if (!confirm(`Delete task "${task.title}"? (demo only)`)) return
    setTasks((prev) => prev.filter((t) => t.id !== task.id))
    setDetail(null)
    setToast(`Deleted “${task.title}”`)
    setTimeout(() => setToast(''), 2000)
  }

  const openCreate = () => {
    setEditing(null)
    setForm({ title: '', description: '', projectId: mockProjects[0]?.id || '', priority: 'Medium', dueDate: '', assignee: 'Alex Morgan' })
    setErrors({})
    setModalOpen(true)
  }
  const openEdit = (task) => {
    setEditing(task)
    setForm({ title: task.title, description: task.description, projectId: task.projectId, priority: task.priority, dueDate: task.dueDate, assignee: task.assignee })
    setErrors({})
    setModalOpen(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = validateTask(form)
    setErrors(v)
    if (Object.keys(v).length) return

    const projectName = mockProjects.find((p) => p.id === form.projectId)?.name || 'Unknown'
    const assigneeAvatar = avatarFor(form.assignee || 'Alex Morgan')

    if (editing) {
      setTasks((prev) => prev.map((t) => (t.id === editing.id ? { ...t, ...form, projectName } : t)))
      setToast(`Updated “${form.title}”`)
    } else {
      const newTask = {
        id: `t_${Date.now()}`,
        status: 'Todo',
        assigneeAvatar,
        tags: ['New'],
        projectName,
        projectId: form.projectId,
        title: form.title,
        description: form.description,
        priority: form.priority,
        dueDate: form.dueDate,
        assignee: form.assignee,
      }
      setTasks((prev) => [newTask, ...prev])
      setToast(`Created “${form.title}”`)
    }
    setModalOpen(false)
    setTimeout(() => setToast(''), 2000)
  }

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Task Board</h1>
          <p className="page-subtitle">Kanban view with search, filters, sorting & pagination • <span className="badge badge-info">Demo CRUD replace with tasksService</span></p>
        </div>
        <div className="cluster">
          <div className="cluster" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 4, padding: 4 }}>
            <button className={`btn btn-sm ${view === 'board' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setView('board')}>Board</button>
            <button className={`btn btn-sm ${view === 'list' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setView('list')}>List</button>
          </div>
          <button className="btn btn-primary" onClick={openCreate}>+ New task</button>
        </div>
      </div>

      <div className="toolbar">
        <SearchBar value={query} onChange={setQuery} placeholder="Search tasks by title, description, or tags…" />
        <div className="cluster">
          <select className="select" value={projectFilter} onChange={(e) => setProjectFilter(e.target.value)} aria-label="Filter by project">
            <option value="All">All projects</option>
            {mockProjects.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          <select className="select" value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} aria-label="Filter by priority">
            <option value="All">All priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <select className="select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort tasks">
            <option value="dueSoon">Sort: Due soon</option>
            <option value="priority">Sort: Priority</option>
            <option value="name">Sort: Name A–Z</option>
          </select>
        </div>
      </div>

      {toast && <div role="status" style={{ background: 'var(--color-success-soft)', border: '1px solid #A7F3D0', color: '#065F46', padding: '10px 12px', borderRadius: 'var(--radius-md)', fontSize: 13 }}>{toast}</div>}

      {filtered.length === 0 ? (
        <EmptyState icon="tasks" title="No tasks found" description="Adjust filters or create a new task. In production this fetches GET /tasks with query params." action={<button className="btn btn-primary" onClick={openCreate}>Create task</button>} />
      ) : view === 'board' ? (
        <>
          <div className="kanban" role="region" aria-label="Kanban board">
            {columns.map((col) => (
              <div key={col} className="kanban-col">
                <div className="kanban-col-head">
                  <div className="kanban-col-title">
                    <span style={{ width: 8, height: 8, borderRadius: 4, background: col === 'Done' ? 'var(--color-success)' : col === 'In Progress' ? 'var(--color-info)' : col === 'Review' ? 'var(--color-warning)' : 'var(--color-border-strong)' }} />
                    {col}
                  </div>
                  <span className="count-pill">{grouped[col].length}</span>
                </div>
                <div className="kanban-list">
                  {grouped[col].map((task) => (
                    <TaskCard key={task.id} task={task} onMove={handleMove} onEdit={openEdit} onDelete={handleDelete} onView={setDetail} />
                  ))}
                  {grouped[col].length === 0 && <div className="small muted text-center" style={{ padding: 16 }}>No tasks</div>}
                </div>
              </div>
            ))}
          </div>
          <div className="small muted">Tip: change status via the dropdown on each card. Drag-and-drop can be added later; select-based moves are accessible and reliable.</div>
        </>
      ) : (
        <>
          <div className="table-wrap">
            <table className="table" aria-label="Tasks list">
              <thead>
                <tr><th>Task</th><th>Project</th><th>Priority</th><th>Assignee</th><th>Due</th><th>Status</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {pagedList.map((t) => (
                  <tr key={t.id}>
                    <td style={{ fontWeight: 600, maxWidth: 280 }}>
                      <div style={{ fontWeight: 700 }}>{t.title}</div>
                      <div className="small muted" style={{ maxWidth: 320, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.description}</div>
                    </td>
                    <td><span className="badge badge-neutral">{t.projectName}</span></td>
                    <td><span className={`badge badge-${t.priority === 'High' ? 'danger' : t.priority === 'Medium' ? 'warning' : 'info'}`}>{t.priority}</span></td>
                    <td>{t.assignee}</td>
                    <td>{formatDate(t.dueDate)}</td>
                    <td>
                      <select className="select" value={t.status} onChange={(e) => handleMove(t, e.target.value)} style={{ fontSize: 12, padding: '6px 8px' }}>
                        <option>Todo</option><option>In Progress</option><option>Review</option><option>Done</option>
                      </select>
                    </td>
                    <td>
                      <div className="cluster">
                        <button className="btn btn-secondary btn-sm" onClick={() => setDetail(t)}>View</button>
                        <button className="btn btn-ghost btn-sm" onClick={() => openEdit(t)}>Edit</button>
                        <button className="btn btn-ghost btn-sm" style={{ color: 'var(--color-danger)' }} onClick={() => handleDelete(t)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} totalItems={filtered.length} perPage={perPage} />
        </>
      )}

      {/* Task detail drawer/modal */}
      <Modal open={!!detail} onClose={() => setDetail(null)} title={detail?.title || 'Task detail'} footer={
        <>
          <button className="btn btn-ghost" onClick={() => setDetail(null)}>Close</button>
          {detail && <button className="btn btn-secondary" onClick={() => { openEdit(detail); setDetail(null) }}>Edit</button>}
        </>
      }>
        {detail && (
          <div style={{ display: 'grid', gap: 12 }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="badge badge-neutral">{detail.projectName}</span>
              <span className={`badge badge-${detail.priority === 'High' ? 'danger' : detail.priority === 'Medium' ? 'warning' : 'info'}`}>{detail.priority}</span>
              <span className="badge badge-neutral">Due {formatDate(detail.dueDate)}</span>
              <span className={`badge badge-${detail.status === 'Done' ? 'success' : detail.status === 'In Progress' ? 'info' : detail.status === 'Review' ? 'warning' : 'neutral'}`}>{detail.status}</span>
            </div>
            <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13, lineHeight: 1.7 }}>{detail.description}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img src={detail.assigneeAvatar} alt="" width={24} height={24} style={{ borderRadius: '50%' }} />
              <span style={{ fontWeight: 600, fontSize: 13 }}>{detail.assignee}</span>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{detail.tags?.map((tag) => <span key={tag} className="badge badge-neutral">{tag}</span>)}</div>
          </div>
        )}
      </Modal>

      {/* Create/Edit task modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit task' : 'New task'} footer={
        <>
          <button className="btn btn-ghost" type="button" onClick={() => setModalOpen(false)}>Cancel</button>
          <button className="btn btn-primary" type="submit" form="task-form">{editing ? 'Save changes' : 'Create task'}</button>
        </>
      }>
        <form id="task-form" onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: 14 }}>
          <div className="field">
            <label className="label" htmlFor="t-title">Task title</label>
            <input id="t-title" className={`input ${errors.title ? 'error' : ''}`} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g., Implement authentication flow" />
            {errors.title && <span className="error-text">{errors.title}</span>}
          </div>
          <div className="field">
            <label className="label" htmlFor="t-desc">Description</label>
            <textarea id="t-desc" className="textarea" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="What needs to be done?" rows={3} />
          </div>
          <div className="grid grid-2">
            <div className="field">
              <label className="label" htmlFor="t-project">Project</label>
              <select id="t-project" className={`select ${errors.projectId ? 'error' : ''}`} value={form.projectId} onChange={(e) => setForm({ ...form, projectId: e.target.value })}>
                <option value="">Select project</option>
                {mockProjects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
              {errors.projectId && <span className="error-text">{errors.projectId}</span>}
            </div>
            <div className="field">
              <label className="label" htmlFor="t-priority">Priority</label>
              <select id="t-priority" className={`select ${errors.priority ? 'error' : ''}`} value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}>
                <option>High</option><option>Medium</option><option>Low</option>
              </select>
              {errors.priority && <span className="error-text">{errors.priority}</span>}
            </div>
          </div>
          <div className="grid grid-2">
            <div className="field">
              <label className="label" htmlFor="t-due">Due date</label>
              <input id="t-due" type="date" className={`input ${errors.dueDate ? 'error' : ''}`} value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} />
              {errors.dueDate && <span className="error-text">{errors.dueDate}</span>}
            </div>
            <div className="field">
              <label className="label" htmlFor="t-assignee">Assignee</label>
              <input id="t-assignee" className="input" value={form.assignee} onChange={(e) => setForm({ ...form, assignee: e.target.value })} placeholder="Alex Morgan" />
            </div>
          </div>
          <div style={{ background: 'var(--color-info-soft)', border: '1px solid #BAE6FD', borderRadius: 'var(--radius-md)', padding: 10, fontSize: 12, color: '#075985' }}>
            Backend: <code>POST /tasks</code> / <code>PUT /tasks/:id</code> via <code>tasksService</code>. Demo mode persists in memory only.
          </div>
        </form>
      </Modal>
    </div>
  )
}
