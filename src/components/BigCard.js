import React from 'react'
import Grid from '@material-ui/core/Grid';
import '../assets/css/styles.css';
function BigCard(props) {
    return (
        <Grid container>
            <Grid item md={6} xs={12}>
                <img src={props.img} className="big-card-image" alt="Impactful"/>
            </Grid>
            <Grid item md={6} xs={12}>
                <div className="big-card-right">
                <h6 className="big-card-tagline">{props.tagline}</h6>
                    <h1 className="big-card-header">{props.title}</h1>

                    <p className="big-card-content">{props.text}</p>
                </div>
            </Grid>
        </Grid>

    )
}

export default BigCard
