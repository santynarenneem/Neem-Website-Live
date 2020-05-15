import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../assets/css/styles.css'

const Header = ({siteTitle}) => (

    <div className="navbar-topnav" id="navbar-topnav-id">
        <a  className="active">Home</a>
        <a >News</a>
        <a>Contact</a>
        <a >About</a>
        <a className="navbar-icon" onClick={myFunction}>
            Menu
        </a>
    </div>

)

Header.propTypes = {
    siteTitle: PropTypes.string
}
function myFunction(e) {
    e.preventDefault();
    var x = document.getElementById("navbar-topnav-id");
    if (x.className === "navbar-topnav") {
        x.className += " responsive";
    } else {
        x.className = "navbar-topnav";
    }
}
Header.defaultProps = {
    siteTitle: ``
}

export default Header
