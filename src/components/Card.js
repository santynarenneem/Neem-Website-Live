import React from 'react'

import '../assets/css/styles.css';

const Card = (props) => {
    return (
        <div>
            <div className="card-small-div">
                <img className="card-small-img" alt="client_image" src={props.img}/>
                <div className="card-small-content-overlay">
                    <span className="card-small-content">
                        {props.title}</span>
                </div>

            </div>
        </div>

    )
}

export default Card