import React from 'react'

import '../assets/bluma.css'
const Card = (props) => {
    return (
        <div className="card">
            <figure className="image is-4by3">
                <img alt="client_image" src={props.img}/>
            </figure>

            <div className="card-content">
                <p class="title is-4">
                    {props.title}</p>
            </div>
        </div>
    )
}

export default Card