import React from 'react'
import '../assets/bluma.css'
function Desc(props) {
    return (
        <div>
            <center><span className="content is-large">{props.text}</span></center>
        </div>
    )
}

export default Desc
