import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.svg"

const Header = ({siteTitle}) => (
  <header>
    <div className={"container"}>
      <div className={"top-menu"}>
        <div className={"logo"}>
          <Link to="/" title={"BreakTimer"}>
            <img alt={"Logo"} src={logo}/>
            <span className={"title"}>BreakTimer</span>
          </Link>
        </div>

        <div className={"get-started"}>
          <a href={"/#download"}>Download</a>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
