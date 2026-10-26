import { avatarFor } from './avatar.js'

// Demo data only. Kept separate from real API responses.
// Every demo surface is labeled in the UI so the mock/real boundary is explicit.

export const mockUser = {
  id: 'u_demo',
  name: 'Alex Morgan',
  email: 'alex@taskflow.demo',
  role: 'Product Manager',
  avatar: avatarFor('Alex Morgan'),
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
    members: [avatarFor('Priya Nair'), avatarFor('Marcus Lee'), avatarFor('Sana Ali')],
    tasksCount: 24,
    owner: 'You',
    priority: 'High',
  },
  {
    id: 'p2',
    name: 'Mobile App Phase 2',
    description: 'Push notifications, offline sync and biometric login.',
    status: 'Planning',
    progress: 22,
    dueDate: '2026-12-05',
    members: [avatarFor('Emma Stone'), avatarFor('Rohan Patel')],
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
    members: [avatarFor('Sana Ali'), avatarFor('Alex Morgan'), avatarFor('Nina Gupta')],
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
    members: [avatarFor('Marcus Lee'), avatarFor('Jonas Wu')],
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
    members: [avatarFor('Aisha Khan'), avatarFor('Emma Stone')],
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
    members: [avatarFor('Priya Nair'), avatarFor('Rohan Patel'), avatarFor('Jonas Wu')],
    tasksCount: 27,
    owner: 'You',
    priority: 'Low',
  },
]

const task = (id, title, projectId, projectName, assignee, priority, status, dueDate, description, tags) => ({
  id,
  title,
  projectId,
  projectName,
  assignee,
  assigneeAvatar: avatarFor(assignee),
  priority,
  status,
  dueDate,
  description,
  tags,
})

export const mockTasks = [
  task('t1', 'Create wireframes for new dashboard', 'p1', 'Website Redesign', 'Alex Morgan', 'High', 'Todo', '2026-11-08', 'Low-fi wireframes covering analytics, tasks and settings. Ensure mobile responsiveness.', ['Design', 'UX']),
  task('t2', 'Implement authentication flow', 'p4', 'API Migration', 'Rohan Patel', 'High', 'In Progress', '2026-11-10', 'JWT and httpOnly cookie, refresh tokens, protected routes. Backend: /auth/*', ['Backend', 'Security']),
  task('t3', 'Write API documentation', 'p4', 'API Migration', 'Sana Ali', 'Medium', 'In Progress', '2026-11-12', 'Endpoints spec, error codes, Postman collection.', ['Docs']),
  task('t4', 'Design email templates', 'p3', 'Q4 Campaign', 'Priya Nair', 'Medium', 'Review', '2026-11-07', 'Responsive MJML templates, dark-mode tested.', ['Design', 'Marketing']),
  task('t5', 'Fix file upload bug in tasks', 'p1', 'Website Redesign', 'Marcus Lee', 'High', 'Todo', '2026-11-09', 'Upload fails for files over 10 MB; add chunking and validation.', ['Bug', 'Frontend']),
  task('t6', 'User testing for onboarding', 'p2', 'Mobile App Phase 2', 'Emma Stone', 'Low', 'Done', '2026-11-02', '5 user sessions recorded, synthesize findings.', ['Research']),
  task('t7', 'Set up CI/CD pipeline', 'p4', 'API Migration', 'Alex Morgan', 'High', 'Done', '2026-11-01', 'GitHub Actions: lint, test, build. Deploy to staging.', ['DevOps']),
  task('t8', 'Create social media content calendar', 'p3', 'Q4 Campaign', 'Nina Gupta', 'Medium', 'Todo', '2026-11-14', '30-day calendar for X, LinkedIn, and Instagram with assets.', ['Marketing']),
  task('t9', 'Audit accessibility (WCAG 2.1 AA)', 'p6', 'Design System v2', 'Jonas Wu', 'Medium', 'In Progress', '2026-11-18', 'Axe and manual audit, color contrast, keyboard navigation.', ['A11y']),
  task('t10', 'Add realtime notifications', 'p1', 'Website Redesign', 'Aisha Khan', 'Low', 'Review', '2026-11-16', 'Socket.io notifications for assignments and comments.', ['Realtime']),
  task('t11', 'Optimize dashboard query performance', 'p4', 'API Migration', 'Rohan Patel', 'High', 'In Progress', '2026-11-13', 'Add indexes on tasks.projectId, pagination via cursor.', ['Backend', 'Performance']),
  task('t12', 'Finalize pricing page copy', 'p3', 'Q4 Campaign', 'Priya Nair', 'Low', 'Done', '2026-10-30', 'Tone: friendly, transparent. CTA tests included.', ['Content']),
]

export const mockActivities = [
  { id: 'a1', user: 'Alex Morgan', action: 'moved "Implement authentication flow" to In Progress', time: '2 hours ago' },
  { id: 'a2', user: 'Priya Nair', action: 'commented on "Design email templates"', time: '4 hours ago' },
  { id: 'a3', user: 'Marcus Lee', action: 'completed "Set up CI/CD pipeline"', time: 'Yesterday' },
  { id: 'a4', user: 'Sana Ali', action: 'created project "Customer Feedback Hub"', time: '2 days ago' },
  { id: 'a5', user: 'Emma Stone', action: 'assigned "User testing for onboarding" to herself', time: '3 days ago' },
]

export const mockTeam = [
  { id: 'm1', name: 'Priya Nair', role: 'Product Designer', email: 'priya@taskflow.demo', avatar: avatarFor('Priya Nair'), tasks: 12 },
  { id: 'm2', name: 'Marcus Lee', role: 'Frontend Engineer', email: 'marcus@taskflow.demo', avatar: avatarFor('Marcus Lee'), tasks: 9 },
  { id: 'm3', name: 'Sana Ali', role: 'Technical Writer', email: 'sana@taskflow.demo', avatar: avatarFor('Sana Ali'), tasks: 7 },
  { id: 'm4', name: 'Rohan Patel', role: 'Backend Engineer', email: 'rohan@taskflow.demo', avatar: avatarFor('Rohan Patel'), tasks: 15 },
  { id: 'm5', name: 'Emma Stone', role: 'UX Researcher', email: 'emma@taskflow.demo', avatar: avatarFor('Emma Stone'), tasks: 6 },
]

export function paginate(list, page, perPage) {
  const start = (page - 1) * perPage
  return list.slice(start, start + perPage)
}
