import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './headerNav.css'

const Header = ({ siteTitle }) => (

<div className="topnav" id="myTopnav">
<a href="#home" class="active">Home</a>
<a href="#news">News</a>
<a href="#contact">Contact</a>
<a href="#about">About</a>
<a className="icon" onClick={myFunction}>
 Menu
</a>
</div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}
function myFunction(e) {
  e.preventDefault();
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
Header.defaultProps = {
  siteTitle: ``,
}

export default Header
