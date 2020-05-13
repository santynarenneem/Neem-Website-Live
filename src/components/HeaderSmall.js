import React from 'react'
import '../assets/bluma.css'
function HeaderSmall(props) {
    return (
        <div>
        <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              {props.text}
            </h1>
            <h2 className="subtitle">
              {props.breadcrumb}
            </h2>
          </div>
        </div>
      </section>
        </div>
    )
}

export default HeaderSmall
