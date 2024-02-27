import Link from "next/link";
import GithubButton from "@/components/github-button";

export default function Home() {
  return (
    <>
      <div className={"page-header home"}>
        <h1>Save yourself from RSI and eye-strain</h1>

        <p>
          BreakTimer allows you to set up customizable breaks and will remind
          you to take them.
          <br />
          BreakTimer is free and{" "}
          <a href="https://github.com/tom-james-watson/breaktimer-app">
            open source
          </a>{" "}
          and available for Windows, macOS and Linux.
        </p>

        <div className="github-button">
          <GithubButton />
        </div>

        <img alt={"Dashboard"} src="/images/hero.png" />
      </div>

      <div className={"container"}>
        <div className={"features"}>
          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"Configure"} src="/images/feature-configure.png" />
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>Configure your schedule</h2>
                  <p>
                    BreakTimer allows you to configure how often and how long
                    your breaks should be.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>Customize your experience</h2>
                  <p>
                    Choose the app colours and messages that are shown during
                    breaks.
                  </p>
                </div>
              </div>

              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"Board"} src="/images/feature-customize.png" />
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"News"} src="/images/feature-working-hours.png" />
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>Set working hours</h2>
                  <p>
                    Ensure you are only interrupted when you actually want to be
                    by configuring working hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>Notifications</h2>
                  <p>
                    BreakTimer let&apos;s you know when breaks are about to
                    start, allowing you to either skip or snooze if needed.
                  </p>
                </div>
              </div>

              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"Team"} src="/images/feature-notification.png" />
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"Users"} src="/images/feature-idle-reset.png" />
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>Idle reset</h2>
                  <p>
                    BreakTimer can intelligently restart your break countdown
                    when it detects that you have not been at your computer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="download" className={"call-to-action"}>
        <div className={"container"}>
          <div className={"call-to-action__content"}>
            <h2>Download for free</h2>
          </div>
        </div>

        <div className={"container"}>
          <div className={"col-4 download-button"}>
            <div className={"button"}>
              <a href="https://github.com/tom-james-watson/breaktimer-app/releases/latest/download/BreakTimer.exe">
                Windows*
              </a>
            </div>
          </div>

          <div className={"col-4 download-button"}>
            <div className={"button"}>
              <a href="https://github.com/tom-james-watson/breaktimer-app/releases/latest/download/BreakTimer.dmg">
                macOS
              </a>
            </div>
          </div>

          <div className={"col-4 download-button"}>
            <div className={"button"}>
              <Link href="/linux" title={"Linux"}>
                Linux
              </Link>
            </div>
          </div>
        </div>
        <div className={"container"}>
          <div className={"col-12 windows-caveat"}>
            * The Windows executable is currently not signed, which will show a
            warning when you run the .exe. Press &apos;more info&apos; -&gt;
            &apos;run anyway&apos; to skip the warning.
          </div>
        </div>
      </div>
    </>
  );
}
