/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/logo.svg"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-5"}>
                            <div className={"widget__item"}>
                                <div className={"logo"}>
                                    <Link to="/" title={"BreakTimer"}>
                                        <img alt={"Logo"} src={logo} height={50} />
                                    </Link>
                                </div>

                                <div className={"about"}>
                                  <p>BreakTimer is free and open source software. It was originally developed by <a href="https://tomjwatson.com">Tom Watson</a> to fulfill his own desire for a similar tool, and is now shared with the world for free.</p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <div className={"links"}>
                                    <h4>Support</h4>
                                    <ul>
                                        <li><a href="https://github.com/tom-james-watson/breaktimer-app">GitHub</a></li>
                                        <li><Link to="/contact" title={"Contact Us"}>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"copyright"}>
                      <p>Both the BreakTimer application and website are licensed under the GNU General Public License v3.0.</p>
                    </div>
                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
