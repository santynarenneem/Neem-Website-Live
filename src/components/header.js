import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"



import Logo from '../assets/media/logowhite.png'
import { Navbar , Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = ({siteTitle}) => (

    <Navbar className="navbar-topnav"  fixed="top"variant="dark" expand="lg">
    <Navbar.Brand><img alt="company-logo"className="navbar-topnav-img" src={Logo}/></Navbar.Brand>
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

Header.defaultProps = {
    siteTitle: ``
}

export default Header
