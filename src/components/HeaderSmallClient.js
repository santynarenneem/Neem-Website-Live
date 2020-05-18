import React from 'react'
import '../assets/css/styles.css'

function HeaderSmallClient(props) {
    return (
        <div>
            <div className="hero-small-image">
                <img className="hero-small-img" alt="client_image" src={props.img}/>
                <span className="hero-small-content">
                    {props.text}</span>
            </div>
        </div>
    )
}

export default HeaderSmallClient
