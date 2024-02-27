export default function Contact() {
  return (
    <div className={"container linux"}>
      <div className={"content"}>
        <div className={"title"}>
          <h1>Linux</h1>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <h2>Auto-updating</h2>
            <p>
              These are the preferred way to use BreakTimer on linux as the apps
              will automatically update as new features and bug fixes are
              released.
            </p>

            <div className={"button"}>
              <a href="https://snapcraft.io/breaktimer">Snap</a>
            </div>
            <div className={"button"}>
              <a href="https://github.com/tom-james-watson/breaktimer-app/releases/latest/download/BreakTimer.AppImage">
                AppImage
              </a>
            </div>
          </div>

          <div className={"col-6"}>
            <h2>Non auto-updating</h2>
            <p>
              These versions won&apos;t auto-update, so you&apos;ll need to come
              back to the site for updates.
            </p>

            <div className={"button"}>
              <a href="https://github.com/tom-james-watson/breaktimer-app/releases/latest/download/BreakTimer.deb">
                .deb
              </a>
            </div>
            <div className={"button"}>
              <a href="https://github.com/tom-james-watson/breaktimer-app/releases/latest/download/BreakTimer.rpm">
                .rpm
              </a>
            </div>
            <div className={"button"}>
              <a href="https://github.com/tom-james-watson/breaktimer-app/releases/latest/download/BreakTimer.tar.gz">
                .tar.gz
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
