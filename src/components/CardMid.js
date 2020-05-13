import React from 'react'
import './Card.css'
function CardMid(props) {
    return (
        <div className="card">
            <center><img className="card-img" src={props.img}/></center>
           <center> <div className="Header">
            {props.title}
            </div></center>
            <div className="Content">
            {props.content}
            </div>
        </div>
    )
}

export default CardMid
