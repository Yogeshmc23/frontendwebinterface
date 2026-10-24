export default function Terms() {
  const lastUpdated = 'October 24, 2026'
  return (
    <div className="container section">
      <div style={{ maxWidth: 720, margin: '0 auto', display: 'grid', gap: 18 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 28 }}>Terms and Conditions</h1>
          <p className="small muted" style={{ marginTop: 6 }}>Last updated: {lastUpdated} Effective: {lastUpdated}</p>
          <p className="small" style={{ background: 'var(--color-warning-soft)', border: '1px solid #FDE68A', borderRadius: 'var(--radius-md)', padding: 10, color: 'var(--color-warning)', lineHeight: 1.6, marginTop: 10 }}>
            Draft for review. Have counsel review before public launch, especially for liability, termination, and governing law.
          </p>
        </div>

        <div className="surface" style={{ padding: 18, display: 'grid', gap: 14 }}>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            These terms apply to your use of TaskFlow, a task and project workspace frontend. When TaskFlow is connected to a backend, these terms also apply to the hosted service. Read them carefully.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>1. Acceptance of terms</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            By creating an account or using the service, you agree to these terms and to our Privacy Policy. If you do not agree, do not use the service. If you are using the service on behalf of an organization, you represent that you have authority to agree for that organization.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>2. Description of service</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            TaskFlow provides project workspaces, task management on a Kanban board, dashboards, and team pages. The current repository is a frontend. Features described as demo use local sample data. When you connect a Node and Express backend with MongoDB, the service stores and serves live data via the documented API routes.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>3. Accounts and responsibilities</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            <li>You must provide accurate registration information and keep your credentials confidential.</li>
            <li>You are responsible for activity under your account.</li>
            <li>Notify us promptly if you suspect unauthorized use. In production, implement password reset and session invalidation via your API.</li>
            <li>We may suspend or terminate accounts that violate these terms, subject to applicable law.</li>
          </ul>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>4. Acceptable use</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            <li>Do not use the service to violate laws, infringe intellectual property, or distribute harmful code.</li>
            <li>Do not attempt to access data you are not authorized to access, or to interfere with service security or availability.</li>
            <li>Do not upload sensitive credentials, secrets, or personal data that the service is not designed to handle.</li>
            <li>We may monitor for abuse and take action including rate limiting or removal of content.</li>
          </ul>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>5. User content and intellectual property</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            You retain ownership of content you create, such as project names, task titles, and descriptions. You grant us a license to host and display that content to provide the service. The TaskFlow code in this repository is licensed under Apache 2.0. See LICENSE for terms that apply to code reuse. Trademarks and brand assets not covered by that license remain with their owners.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>6. Service availability and third party services</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            The service is provided on an as is basis. We do not guarantee uninterrupted availability. Maintenance, updates, or issues may cause downtime. If you deploy the service, you are responsible for uptime and backups. Third party services, such as Google Fonts for font delivery, are subject to their own terms.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>7. Suspension and termination</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            We may suspend or terminate access for violation of these terms or for security reasons. You may delete your account at any time. In demo, clearing browser storage removes sample data. In production, implement account deletion via your API and state retention periods in your Privacy Policy.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>8. Disclaimers and limitation of liability</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            To the maximum extent permitted by law, the service is provided without warranties of any kind. We are not liable for indirect, incidental, or consequential damages, or for loss of data, except where law does not allow such limitation. This section should be reviewed by counsel to match your operational risk and applicable local law. Do not rely on this draft alone.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>9. Governing law</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            Governing law has not been selected for this draft. Before launch, decide on jurisdiction, venue, and dispute process with counsel and update this section. Do not operate under a fabricated jurisdiction.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>10. Changes to terms</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            We may update these terms. We will post changes here and update the last updated date. If changes are material, we will provide notice through the service or by email if you have provided one. Continued use after changes means acceptance of updated terms.
          </p>

          <h3 style={{ margin: '6px 0 0', fontSize: 15 }}>11. Contact</h3>
          <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: 13.5, lineHeight: 1.7 }}>
            For questions about these terms, contact: <strong>support@taskflow.example.com</strong>. Replace this placeholder with your actual monitored support contact before launch.
          </p>

          <div className="divider" />
          <p className="small muted" style={{ margin: 0, fontSize: 11.5 }}>
            This draft does not create an attorney client relationship. Seek legal review for compliance with laws that apply to your users, including consumer protection and privacy laws.
          </p>
        </div>
      </div>
    </div>
  )
}
