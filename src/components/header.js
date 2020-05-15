import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../assets/css/styles.css'
import Logo from '../assets/media/logowhite.png'

const Header = ({siteTitle}) => (

    <div className="navbar-topnav" id="navbar-topnav-id">
        <a ><Link to="/"><img  className="navbar-topnav-img" src={Logo}/></Link></a>
        <a ><Link to="/">Home</Link></a>
        <a><Link to="/Aboutus">About Us</Link></a>
        <a><Link to="/Portfolio">Client Showcase</Link></a>
        <a ><Link to="/Contact">Home</Link></a>
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
