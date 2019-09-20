import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Contact</h1>
                </div>

                <div className={"row"}>
                    <div className={"col-7"}>
                      <p>If you need our help with using BreakTimer, want to report any issues or suggest new features, then the best way is to create an issue on the GitHub repository:</p>
                      <h2><a href="https://github.com/tom-james-watson/breaktimer-app/issues">GitHub Issue Tracker</a></h2>
                    </div>

                    <div className={"col-5"}>
                        <p>For anything else, plain email is the best way to contact me.</p>
                        <h2>contact@breaktimer.app</h2>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage
