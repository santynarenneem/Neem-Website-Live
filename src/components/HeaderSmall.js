import React from 'react'
import './Hero.css'
function HeaderSmall(props) {
    return (
        <div>
        <div className="hero-small-image">
        <img className="hero-img-small"alt="client_image" src={props.img}/>
<span className="content-small-hero">   {props.text}</span>
</div>
        </div>
    )
}

export default HeaderSmall
