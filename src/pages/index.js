import React from "react"
import { Link } from "gatsby"
import GitHubButton from "react-github-btn"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.png"
import thumbnailConfigure from "../../static/images/feature-configure.png"
import thumbnailCustomize from "../../static/images/feature-customize.png"
import thumbnailWorkingHours from "../../static/images/feature-working-hours.png"
import thumbnailNotification from "../../static/images/feature-notification.png"
import thumbnailIdleReset from "../../static/images/feature-idle-reset.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Save yourself from RSI and eye-strain" />

    <div className={"page-header home"}>
      <h1>Save yourself from RSI and eye-strain</h1>

      <p>
        BreakTimer allows you to set up customizable breaks and will remind you
        to take them.
        <br />
        BreakTimer is free and{" "}
        <a href="https://github.com/tom-james-watson/breaktimer-app">
          open source
        </a>{" "}
        and available for Windows, macOS and Linux.
      </p>

      <div className="github-button">
        <GitHubButton
          href="https://github.com/tom-james-watson/breaktimer-app"
          data-size="large"
          data-show-count="true"
          aria-label="Star tom-james-watson/breaktimer-app on GitHub"
        >
          Star
        </GitHubButton>
      </div>

      <img alt={"Dashboard"} src={featureImage} />
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Configure"} src={thumbnailConfigure} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Configure your schedule</h2>
                <p>
                  BreakTimer allows you to configure how often and how long your
                  breaks should be.
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
                <img alt={"Board"} src={thumbnailCustomize} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"News"} src={thumbnailWorkingHours} />
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
                  BreakTimer let's you know when breaks are about to start,
                  allowing you to either skip or snooze if needed.
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Team"} src={thumbnailNotification} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Users"} src={thumbnailIdleReset} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Idle reset</h2>
                <p>
                  BreakTimer can intelligently restart your break countdown when
                  it detects that you have not been at your computer.
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
            <Link to="/linux" title={"Linux"}>
              Linux
            </Link>
          </div>
        </div>
      </div>
      <div className={"container"}>
        <div className={"col-12 windows-caveat"}>
          * The Windows executable is currently not signed, which will show a
          warning when you run the .exe. Press 'more info' -> 'run anyway' to
          skip the warning.
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
