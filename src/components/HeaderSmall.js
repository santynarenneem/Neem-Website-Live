import React from 'react'
import '../assets/css/styles.css'
import Img from "gatsby-image"
function HeaderSmall(props) {
    return (
        <div>
            <div className="hero-small-image">
                <Img className="hero-small-img" alt="client_image" fluid={props.img}/>
                <span className="hero-small-content">
                    {props.text}</span>
            </div>
        </div>
    )
}

export default HeaderSmall
