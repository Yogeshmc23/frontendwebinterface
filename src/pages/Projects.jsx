import { useEffect, useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Pagination from '../components/Pagination.jsx'
import Modal from '../components/Modal.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { mockProjects as initial } from '../utils/mockData.js'
import { useDebounce } from '../hooks/useDebounce.js'
import { validateProject } from '../utils/validators.js'
import { avatarFor } from '../utils/avatar.js'

const perPage = 6

export default function Projects() {
  const [projects, setProjects] = useState(initial)
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('All')
  const [priority, setPriority] = useState('All')
  const [sort, setSort] = useState('newest')
  const [page, setPage] = useState(1)
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ name: '', description: '', dueDate: '', priority: 'Medium', status: 'Planning' })
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState('')

  const debouncedQuery = useDebounce(query, 280)

  useEffect(() => { setPage(1) }, [debouncedQuery, status, priority, sort])

  const filtered = useMemo(() => {
    let list = [...projects]
    if (debouncedQuery.trim()) {
      const q = debouncedQuery.trim().toLowerCase()
      list = list.filter((p) => `${p.name} ${p.description}`.toLowerCase().includes(q))
    }
    if (status !== 'All') list = list.filter((p) => p.status === status)
    if (priority !== 'All') list = list.filter((p) => p.priority === priority)
    if (sort === 'progress') list.sort((a, b) => b.progress - a.progress)
    else if (sort === 'dueSoon') list.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    else if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name))
    return list
  }, [projects, debouncedQuery, status, priority, sort])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const paged = useMemo(() => filtered.slice((page - 1) * perPage, page * perPage), [filtered, page])

  const openCreate = () => {
    setEditing(null)
    setForm({ name: '', description: '', dueDate: '', priority: 'Medium', status: 'Planning' })
    setErrors({})
    setModalOpen(true)
  }

  const openEdit = (project) => {
    setEditing(project)
    setForm({ name: project.name, description: project.description, dueDate: project.dueDate, priority: project.priority, status: project.status })
    setErrors({})
    setModalOpen(true)
  }

  const handleDelete = (project) => {
    if (!confirm(`Delete project "${project.name}"? This is local demo data only.`)) return
    setProjects((prev) => prev.filter((p) => p.id !== project.id))
    setToast(`Deleted “${project.name}”`)
    setTimeout(() => setToast(''), 2200)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = validateProject(form)
    setErrors(v)
    if (Object.keys(v).length) return

    if (editing) {
      setProjects((prev) => prev.map((p) => (p.id === editing.id ? { ...p, ...form } : p)))
      setToast(`Updated “${form.name}”`)
    } else {
      const newProject = {
        id: `p_${Date.now()}`,
        members: [avatarFor('Alex Morgan')],
        tasksCount: 0,
        progress: 0,
        owner: 'You',
        ...form,
      }
      setProjects((prev) => [newProject, ...prev])
      setToast(`Created “${form.name}”`)
    }
    setModalOpen(false)
    setTimeout(() => setToast(''), 2200)
  }

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">Organize work into projects. {filtered.length} of {projects.length} shown • <span className="badge badge-info">Demo data wire to GET /projects</span></p>
        </div>
        <button className="btn btn-primary" onClick={openCreate}>+ New project</button>
      </div>

      <div className="toolbar">
        <SearchBar value={query} onChange={setQuery} placeholder="Search projects by name or description…" />
        <div className="cluster">
          <select className="select" value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status">
            <option value="All">All statuses</option>
            <option value="Planning">Planning</option>
            <option value="In Progress">In Progress</option>
            <option value="Review">Review</option>
            <option value="Completed">Completed</option>
          </select>
          <select className="select" value={priority} onChange={(e) => setPriority(e.target.value)} aria-label="Filter by priority">
            <option value="All">All priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <select className="select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort projects">
            <option value="newest">Sort: Newest</option>
            <option value="dueSoon">Sort: Due soon</option>
            <option value="progress">Sort: Progress</option>
            <option value="name">Sort: Name A–Z</option>
          </select>
        </div>
      </div>

      {toast && <div role="status" aria-live="polite" style={{ background: 'var(--color-success-soft)', border: '1px solid #A7F3D0', color: '#065F46', padding: '10px 12px', borderRadius: 'var(--radius-md)', fontSize: 13 }}>{toast}</div>}

      {paged.length ? (
        <div className="grid grid-3">
          {paged.map((p) => (
            <ProjectCard key={p.id} project={p} onEdit={openEdit} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <EmptyState icon="projects" title="No projects match your filters" description="Try adjusting search, status or priority. You can also create a new project to get started." action={<button className="btn btn-primary" onClick={openCreate}>Create project</button>} />
      )}

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} totalItems={filtered.length} perPage={perPage} />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit project' : 'New project'} footer={
        <>
          <button className="btn btn-ghost" type="button" onClick={() => setModalOpen(false)}>Cancel</button>
          <button className="btn btn-primary" type="submit" form="project-form"> {editing ? 'Save changes' : 'Create project'} </button>
        </>
      }>
        <form id="project-form" onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: 14 }}>
          <div className="field">
            <label className="label" htmlFor="p-name">Project name</label>
            <input id="p-name" className={`input ${errors.name ? 'error' : ''}`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g., Website Redesign" />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          <div className="field">
            <label className="label" htmlFor="p-desc">Description</label>
            <textarea id="p-desc" className={`textarea ${errors.description ? 'error' : ''}`} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="What is this project about?" rows={3} />
            {errors.description && <span className="error-text">{errors.description}</span>}
          </div>
          <div className="grid grid-2">
            <div className="field">
              <label className="label" htmlFor="p-due">Due date</label>
              <input id="p-due" type="date" className={`input ${errors.dueDate ? 'error' : ''}`} value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} />
              {errors.dueDate && <span className="error-text">{errors.dueDate}</span>}
            </div>
            <div className="field">
              <label className="label" htmlFor="p-priority">Priority</label>
              <select id="p-priority" className="select" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}>
                <option>High</option><option>Medium</option><option>Low</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="p-status">Status</label>
            <select id="p-status" className="select" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
              <option>Planning</option><option>In Progress</option><option>Review</option><option>Completed</option>
            </select>
          </div>
          <div style={{ background: 'var(--color-info-soft)', border: '1px solid #BAE6FD', borderRadius: 'var(--radius-md)', padding: 10, fontSize: 12, color: '#075985' }}>
            <strong>Backend mapping:</strong> This form would <code>POST /projects</code> or <code>PUT /projects/:id</code> via <code>projectsService</code>. Demo mode updates local state only.
          </div>
        </form>
      </Modal>
    </div>
  )
}
