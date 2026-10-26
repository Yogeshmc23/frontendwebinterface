export default function Privacy() {
  const lastUpdated = 'October 24, 2026'
  return (
    <div className="container section">
      <div style={{ maxWidth: 720, margin: '0 auto', display: 'grid', gap: 18 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 28 }}>Privacy Policy</h1>
          <p className="small muted" style={{ marginTop: 6 }}>Last updated: {lastUpdated} Effective: {lastUpdated}</p>
          <p className="small" style={{ background: 'var(--color-warning-soft)', border: '1px solid #FDE68A', borderRadius: 'var(--radius-md)', padding: 10, color: 'var(--color-warning)', lineHeight: 1.6, marginTop: 10 }}>
            Draft for review. This policy describes current implementation and intended backend behavior. Have counsel review before public launch if you collect real user data.
          </p>
        </div>

        <div className="surface" style={{ padding: 18, display: 'grid', gap: 14 }}>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            TaskFlow is a task and project workspace built with React and Vite on the frontend and intended to use Node, Express, and MongoDB on the backend. This policy explains what information the current demo collects, what a connected production deployment would collect, and how that information is handled.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>1. Information we collect</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            <li><strong>Account information in demo:</strong> Name and email you enter on registration and login are stored in browser localStorage as sample data. Passwords entered in demo are not sent to a server and are not stored anywhere. This is demo behavior only.</li>
            <li><strong>Account information in production:</strong> When you connect a backend, registration sends name, email, and password to your Express API. Passwords should be hashed on the server and never stored in frontend code. The server should set an httpOnly cookie for session management.</li>
            <li><strong>Workspace content:</strong> Projects, tasks, priorities, due dates, assignees, comments, and activity you create. In demo this lives in memory and resets on refresh. With a backend it is stored in MongoDB via your API.</li>
            <li><strong>Contact messages:</strong> Name, email, and message you submit on the contact page. In demo the form shows a confirmation but does not send data. With a backend it would POST to /contact.</li>
            <li><strong>Technical information:</strong> Browser type, device type, and basic usage events if you add analytics later. No analytics is active in the current frontend build.</li>
          </ul>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>2. How we use information</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            <li>To provide the workspace, show projects and tasks, and enforce access when authentication is connected.</li>
            <li>To respond to contact requests and support questions.</li>
            <li>To maintain security, prevent abuse, and troubleshoot errors.</li>
            <li>To improve the product if you enable analytics. Analytics would be disclosed here before use.</li>
          </ul>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>3. Cookies and similar technologies</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            Demo mode uses localStorage keys taskflow_user, taskflow_token, and taskflow_theme to keep you signed in and remember your theme. No advertising cookies are set. In production, your Express server should use an httpOnly, Secure, SameSite cookie for authentication. If you add analytics, update this section to list each cookie, its purpose, and its duration.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>4. Analytics and third party services</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            No third party analytics is configured in this repository. Fonts are loaded from Google Fonts. If you add services such as analytics, email delivery, error tracking, or payment processing, list each service, what data it receives, and link to its privacy policy. Do not claim no sharing if you add these services later.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>5. Data storage and retention</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            Demo data is not stored on a server and is cleared when you clear browser storage or refresh after in memory changes. Production data would be stored in MongoDB on infrastructure you operate. Retention periods are defined by your operation. Document how long you keep accounts, workspace content, and logs, and update this policy when you decide.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>6. Sharing and disclosure</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            We do not sell personal information. In production you may share data with service providers needed to run the service, such as hosting, database, and email providers, under appropriate agreements. We may disclose information if required by law or to protect rights and safety. Add specific recipients if applicable.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>7. Security</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            In production implement password hashing, input validation on the server, authorization checks for each API route, secure cookie flags, HTTPS, and regular dependency updates. No system is fully secure. Review your implementation and keep this section accurate to what you deploy.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>8. Your rights</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            Depending on your location you may have rights to access, correct, delete, or export your personal information. To exercise these rights, use the contact information below. In demo, clearing browser storage removes local sample data. In production, implement account deletion and data export via your API and document the process here.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>9. Contact</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            For privacy questions, contact: <strong>privacy@taskflow.example.com</strong>. This is a placeholder contact. Replace it with your actual support contact before launch and ensure the address is monitored. Do not list a postal address you do not operate from.
          </p>

          <div className="divider" />
          <p className="small muted" style={{ margin: 0, fontSize: 11.5 }}>
            If your product needs to comply with GDPR, CCPA, or other laws, seek legal advice and update this policy to reflect your lawful basis, data controller identity, and region specific rights. This draft is not legal advice.
          </p>
        </div>
      </div>
    </div>
  )
}
