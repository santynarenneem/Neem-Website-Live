import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"



import Logo from '../assets/media/logowhite.png'
import { Navbar , Nav , NavDropdown , Form,Button,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = ({siteTitle}) => (

    <Navbar bg="dark" fixed="top"variant="dark" expand="lg">
    <Navbar.Brand href="#home"><img className="navbar-topnav-img" src={Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">

       <Link to="/"> Home</Link>


        <Link to="/AboutUs"> About Us</Link>

        <Link to="/Portfolio"> Client Showcase</Link>

        <Link to="/ContactUs"> Contact Us</Link>


      </Nav>

    </Navbar.Collapse>
  </Navbar>

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
