export default function ContactPage() {
  return (
    <section className="subpage">
      <div className="site-container">
        <div className="section-heading compact">
          <h1>Get help with BreakTimer</h1>
        </div>

        <div className="subpage-grid">
          <article className="download-card">
            <h2>Issues and feature requests</h2>
            <p>Use GitHub issues for bugs, support, and feature requests.</p>
            <a
              className="button button-ghost"
              href="https://github.com/tom-james-watson/breaktimer-app/issues"
            >
              Open GitHub Issue Tracker
            </a>
          </article>

          <article className="download-card">
            <h2>Direct email</h2>
            <p>Email directly for anything else.</p>
            <a className="button button-ghost" href="mailto:contact@breaktimer.app">
              contact@breaktimer.app
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
