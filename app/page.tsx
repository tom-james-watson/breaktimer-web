import Image from "next/image";

const featureRows = [
  {
    title: "Configure your schedule",
    description:
      "BreakTimer lets you set how often breaks happen and how long each one lasts, so breaks fit the way you work.",
    image: "/images/feature-configure.png",
    alt: "BreakTimer schedule configuration screenshot",
    width: 1160,
    height: 1250,
    reverse: false,
  },
  {
    title: "Customize your experience",
    description:
      "Choose the app colours and messages shown during breaks, so reminders feel personal, clear, and readable.",
    image: "/images/feature-customize.png",
    alt: "BreakTimer customization screenshot",
    width: 1160,
    height: 1250,
    reverse: true,
  },
  {
    title: "Set working hours",
    description:
      "Ensure you are only interrupted when you actually want to be by configuring working hours around your day.",
    image: "/images/feature-working-hours.png",
    alt: "BreakTimer working hours screenshot",
    width: 1160,
    height: 1250,
    reverse: false,
  },
  {
    title: "Smart notifications",
    description:
      "BreakTimer lets you know when breaks are about to start, so you can quickly skip or snooze if timing is tight.",
    image: "/images/feature-notification.png",
    alt: "BreakTimer notification screenshot",
    width: 1000,
    height: 160,
    reverse: true,
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <h1>Save yourself from RSI and eye strain</h1>
            <p className="lead">
              Smart break reminders for healthier focus on Windows, macOS, and
              Linux.
            </p>
            <div className="hero-actions">
              <div className="hero-actions-primary">
                <a href="#download" className="button button-primary">
                  Download BreakTimer
                </a>
                <a
                  className="button button-ghost"
                  href="https://github.com/tom-james-watson/breaktimer-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>

          <div className="hero-shot">
            <Image
              src="/images/hero.png"
              alt="BreakTimer dashboard screenshot"
              width={2058}
              height={1338}
              priority
            />
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="site-container">
          <div className="section-heading">
            <h2>Everything you need to keep breaks consistent</h2>
          </div>

          <div className="feature-stack">
            {featureRows.map((feature) => (
              <article
                key={feature.title}
                className={`feature-row${feature.reverse ? " reverse" : ""}${
                  feature.title === "Smart notifications"
                    ? " feature-row-notification"
                    : ""
                }`}
              >
                <div className="feature-media">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={feature.width}
                    height={feature.height}
                  />
                </div>
                <div className="feature-copy">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="download-panel" id="download">
        <div className="site-container">
          <div className="section-heading compact">
            <h2>Download</h2>
          </div>

          <div className="download-grid">
            <article className="download-card">
              <h3>Windows</h3>
              <span className="meta-label">Unsigned</span>
              <div className="download-inline">
                <a
                  href="https://github.com/tom-james-watson/breaktimer-app/releases/latest/download/BreakTimer.exe"
                  className="button button-ghost"
                >
                  .exe
                </a>
                <p className="download-note">
                  Skip warning: &quot;more info&quot; → &quot;run anyway&quot;.
                </p>
              </div>
            </article>

            <article className="download-card">
              <h3>macOS</h3>
              <span className="meta-label">Universal</span>
              <a
                href="https://github.com/tom-james-watson/breaktimer-app/releases/latest/download/BreakTimer.dmg"
                className="button button-ghost"
              >
                .dmg
              </a>
            </article>

            <article className="download-card download-card-linux">
              <h3>Linux</h3>
              <div className="linux-groups">
                <div>
                  <h4 className="meta-label">Auto-updating</h4>
                  <div className="linux-buttons">
                    <a
                      href="https://snapcraft.io/breaktimer"
                      className="button button-ghost"
                    >
                      Snap
                    </a>
                    <a
                      href="https://github.com/tom-james-watson/breaktimer-app/releases/latest/download/BreakTimer.deb"
                      className="button button-ghost"
                    >
                      .deb
                    </a>
                    <a
                      href="https://github.com/tom-james-watson/breaktimer-app/releases/latest/download/BreakTimer.rpm"
                      className="button button-ghost"
                    >
                      .rpm
                    </a>
                    <a
                      href="https://github.com/tom-james-watson/breaktimer-app/releases/latest/download/BreakTimer.AppImage"
                      className="button button-ghost"
                    >
                      AppImage
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="meta-label">Manual updates</h4>
                  <div className="linux-buttons">
                    <a
                      href="https://github.com/tom-james-watson/breaktimer-app/releases/latest/download/BreakTimer.tar.gz"
                      className="button button-ghost"
                    >
                      .tar.gz
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
