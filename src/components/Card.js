import React from 'react'

import './Card_small.css'
const Card = (props) => {
    return (
        <div>
          <div className="card-small-image">
                <img className="card-img-small"alt="client_image" src={props.img}/>
      <span className="content-small-card">   {props.title}</span>
</div>
            </div>
      
    )
}

export default Card