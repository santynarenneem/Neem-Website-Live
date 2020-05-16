import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../assets/css/styles.css'
import Logo from '../assets/media/logowhite.png'

const Header = ({siteTitle}) => (

    <div className="navbar-topnav" id="navbar-topnav-id">
        <a >
            <Link to="/"><img className="navbar-topnav-img" src={Logo}/></Link>
        </a>
        <a >
            <Link to="/">Home</Link>
        </a>
        <a>
            <Link to="/AboutUs">About Us</Link>
        </a>
        <a>
            <Link to="/Portfolio">Client Showcase</Link>
        </a>
        <a >
            <Link to="/ContactUs">Contact</Link>
        </a>



        <a className="navbar-icon" onClick={mobileMenu}>
        <Link to="/ContactUs">Contact</Link>
        </a>
    </div>

)

Header.propTypes = {
    siteTitle: PropTypes.string
}
function mobileMenu(e) {
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
