import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `orange`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Link style={{
          marginLeft: 20, color: `white`
        }} to="/Portfolio/">Client Showcase</Link>
    <Link style={{
      marginLeft: 20, color: `white`
    }} to="/AboutUs/">About Us</Link>
    <Link style={{
      marginLeft: 20, color: `white`
    }} to="/Resourcing/">Resourcing</Link>
    <Link style={{
      marginLeft: 20, color: `white`
    }} to="/Development/">Development</Link>
    <Link style={{
      marginLeft: 20, color: `white`
    }} to="/Consulting/">Consulting</Link>
      </h1>
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
