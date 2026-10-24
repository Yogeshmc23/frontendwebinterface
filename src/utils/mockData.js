// Mock/demodata — clearly separated from real API.
// All demo flags are visible in UI (badges) so users know backend persistence is not active.

export const mockUser = {
  id: 'u_demo',
  name: 'Alex Morgan',
  email: 'alex@taskflow.demo',
  role: 'Product Manager',
  avatar: 'https://i.pravatar.cc/200?img=32',
}

export const mockStats = {
  totalProjects: 12,
  activeTasks: 84,
  completedThisWeek: 26,
  overdue: 5,
  productivity: 87,
}

export const mockProjects = [
  {
    id: 'p1',
    name: 'TaskFlow Website Redesign',
    description: 'Revamp marketing site, design system and CMS integration.',
    status: 'In Progress',
    progress: 68,
    dueDate: '2026-11-20',
    members: ['https://i.pravatar.cc/100?img=12', 'https://i.pravatar.cc/100?img=22', 'https://i.pravatar.cc/100?img=18'],
    tasksCount: 24,
    owner: 'You',
    priority: 'High',
  },
  {
    id: 'p2',
    name: 'Mobile App — Phase 2',
    description: 'Push notifications, offline sync and biometric login.',
    status: 'Planning',
    progress: 22,
    dueDate: '2026-12-05',
    members: ['https://i.pravatar.cc/100?img=14', 'https://i.pravatar.cc/100?img=15'],
    tasksCount: 18,
    owner: 'Priya',
    priority: 'Medium',
  },
  {
    id: 'p3',
    name: 'Q4 Marketing Campaign',
    description: 'Ad creatives, landing pages, email automation and reporting.',
    status: 'In Progress',
    progress: 54,
    dueDate: '2026-11-30',
    members: ['https://i.pravatar.cc/100?img=26', 'https://i.pravatar.cc/100?img=32', 'https://i.pravatar.cc/100?img=11'],
    tasksCount: 31,
    owner: 'Marcus',
    priority: 'High',
  },
  {
    id: 'p4',
    name: 'Backend API Migration',
    description: 'Move monolith to microservices, add observability.',
    status: 'Review',
    progress: 82,
    dueDate: '2026-11-15',
    members: ['https://i.pravatar.cc/100?img=33', 'https://i.pravatar.cc/100?img=29'],
    tasksCount: 14,
    owner: 'You',
    priority: 'High',
  },
  {
    id: 'p5',
    name: 'Customer Feedback Hub',
    description: 'NPS surveys, feedback inbox and insights dashboard.',
    status: 'Completed',
    progress: 100,
    dueDate: '2026-10-25',
    members: ['https://i.pravatar.cc/100?img=7', 'https://i.pravatar.cc/100?img=19'],
    tasksCount: 19,
    owner: 'Sana',
    priority: 'Medium',
  },
  {
    id: 'p6',
    name: 'Design System v2',
    description: 'Tokens, components, docs and accessibility audit.',
    status: 'In Progress',
    progress: 41,
    dueDate: '2026-12-12',
    members: ['https://i.pravatar.cc/100?img=5', 'https://i.pravatar.cc/100?img=9', 'https://i.pravatar.cc/100?img=13'],
    tasksCount: 27,
    owner: 'You',
    priority: 'Low',
  },
]

export const mockTasks = [
  { id: 't1', title: 'Create wireframes for new dashboard', projectId: 'p1', projectName: 'Website Redesign', assignee: 'Alex Morgan', assigneeAvatar: 'https://i.pravatar.cc/100?img=32', priority: 'High', status: 'Todo', dueDate: '2026-11-08', description: 'Low-fi wireframes covering analytics, tasks and settings. Ensure mobile responsiveness.', tags: ['Design', 'UX'] },
  { id: 't2', title: 'Implement authentication flow', projectId: 'p4', projectName: 'API Migration', assignee: 'Rohan Patel', assigneeAvatar: 'https://i.pravatar.cc/100?img=15', priority: 'High', status: 'In Progress', dueDate: '2026-11-10', description: 'JWT + httpOnly cookie, refresh tokens, protected routes. Backend: /auth/*', tags: ['Backend', 'Security'] },
  { id: 't3', title: 'Write API documentation', projectId: 'p4', projectName: 'API Migration', assignee: 'Sana Ali', assigneeAvatar: 'https://i.pravatar.cc/100?img=26', priority: 'Medium', status: 'In Progress', dueDate: '2026-11-12', description: 'Endpoints spec, error codes, Postman collection.', tags: ['Docs'] },
  { id: 't4', title: 'Design email templates', projectId: 'p3', projectName: 'Q4 Campaign', assignee: 'Priya Nair', assigneeAvatar: 'https://i.pravatar.cc/100?img=14', priority: 'Medium', status: 'Review', dueDate: '2026-11-07', description: 'Responsive MJML templates, dark-mode tested.', tags: ['Design', 'Marketing'] },
  { id: 't5', title: 'Fix file upload bug in tasks', projectId: 'p1', projectName: 'Website Redesign', assignee: 'Marcus Lee', assigneeAvatar: 'https://i.pravatar.cc/100?img=33', priority: 'High', status: 'Todo', dueDate: '2026-11-09', description: 'Upload fails for >10MB; add chunking + validation.', tags: ['Bug', 'Frontend'] },
  { id: 't6', title: 'User testing for onboarding', projectId: 'p2', projectName: 'Mobile App — Phase 2', assignee: 'Emma Stone', assigneeAvatar: 'https://i.pravatar.cc/100?img=19', priority: 'Low', status: 'Done', dueDate: '2026-11-02', description: '5 user sessions recorded, synthesize findings.', tags: ['Research'] },
  { id: 't7', title: 'Set up CI/CD pipeline', projectId: 'p4', projectName: 'API Migration', assignee: 'Alex Morgan', assigneeAvatar: 'https://i.pravatar.cc/100?img=32', priority: 'High', status: 'Done', dueDate: '2026-11-01', description: 'GitHub Actions: lint, test, build. Deploy to staging.', tags: ['DevOps'] },
  { id: 't8', title: 'Create social media content calendar', projectId: 'p3', projectName: 'Q4 Campaign', assignee: 'Nina Gupta', assigneeAvatar: 'https://i.pravatar.cc/100?img=11', priority: 'Medium', status: 'Todo', dueDate: '2026-11-14', description: '30-day calendar for X/LinkedIn/IG with assets.', tags: ['Marketing'] },
  { id: 't9', title: 'Audit accessibility (WCAG 2.1 AA)', projectId: 'p6', projectName: 'Design System v2', assignee: 'Jonas Wu', assigneeAvatar: 'https://i.pravatar.cc/100?img=8', priority: 'Medium', status: 'In Progress', dueDate: '2026-11-18', description: 'Axe + manual audit, color contrast, keyboard nav.', tags: ['A11y'] },
  { id: 't10', title: 'Add realtime notifications', projectId: 'p1', projectName: 'Website Redesign', assignee: 'Aisha Khan', assigneeAvatar: 'https://i.pravatar.cc/100?img=5', priority: 'Low', status: 'Review', dueDate: '2026-11-16', description: 'Socket.io notifications for assignments/comments.', tags: ['Realtime'] },
  { id: 't11', title: 'Optimize dashboard query performance', projectId: 'p4', projectName: 'API Migration', assignee: 'Rohan Patel', assigneeAvatar: 'https://i.pravatar.cc/100?img=15', priority: 'High', status: 'In Progress', dueDate: '2026-11-13', description: 'Add indexes on tasks.projectId, pagination via cursor.', tags: ['Backend', 'Performance'] },
  { id: 't12', title: 'Finalize pricing page copy', projectId: 'p3', projectName: 'Q4 Campaign', assignee: 'Priya Nair', assigneeAvatar: 'https://i.pravatar.cc/100?img=14', priority: 'Low', status: 'Done', dueDate: '2026-10-30', description: 'Tone: friendly, transparent. CTA tests included.', tags: ['Content'] },
]

export const mockActivities = [
  { id: 'a1', user: 'Alex Morgan', action: 'moved "Implement authentication flow" to In Progress', time: '2 hours ago' },
  { id: 'a2', user: 'Priya Nair', action: 'commented on "Design email templates"', time: '4 hours ago' },
  { id: 'a3', user: 'Marcus Lee', action: 'completed "Set up CI/CD pipeline"', time: 'Yesterday' },
  { id: 'a4', user: 'Sana Ali', action: 'created project "Customer Feedback Hub"', time: '2 days ago' },
  { id: 'a5', user: 'Emma Stone', action: 'assigned "User testing for onboarding" to herself', time: '3 days ago' },
]

export const mockTeam = [
  { id: 'm1', name: 'Priya Nair', role: 'Product Designer', email: 'priya@taskflow.demo', avatar: 'https://i.pravatar.cc/150?img=14', tasks: 12 },
  { id: 'm2', name: 'Marcus Lee', role: 'Frontend Engineer', email: 'marcus@taskflow.demo', avatar: 'https://i.pravatar.cc/150?img=33', tasks: 9 },
  { id: 'm3', name: 'Sana Ali', role: 'Technical Writer', email: 'sana@taskflow.demo', avatar: 'https://i.pravatar.cc/150?img=26', tasks: 7 },
  { id: 'm4', name: 'Rohan Patel', role: 'Backend Engineer', email: 'rohan@taskflow.demo', avatar: 'https://i.pravatar.cc/150?img=15', tasks: 15 },
  { id: 'm5', name: 'Emma Stone', role: 'UX Researcher', email: 'emma@taskflow.demo', avatar: 'https://i.pravatar.cc/150?img=19', tasks: 6 },
]

export function paginate(list, page, perPage) {
  const start = (page - 1) * perPage
  return list.slice(start, start + perPage)
}
