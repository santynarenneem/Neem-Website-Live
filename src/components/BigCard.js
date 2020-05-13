import React from 'react'
import Grid from '@material-ui/core/Grid';
import './BigCard.css'
function BigCard(props) {
    return (
        <Grid container>
            <Grid item md={6} xs={12}>
                <img src={props.img} alt="Impactful"/>
            </Grid>
            <Grid className="right"item md={6} xs={12}>
                <h1 className="header">{props.title}</h1>
                <h6 className="tagline">{props.tagline}</h6>
                <p>{props.text}</p>
            </Grid>

        </Grid>
    )
}

export default BigCard
