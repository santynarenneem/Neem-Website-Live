import React from 'react'
import './styles.css'
import Grid from '@material-ui/core/Grid';
function Desc(props) {
    return (
        <div className="desc-div">
        <Grid container>
        <Grid item md={3} xs={12}>
        </Grid>
        <Grid item md={6} xs={12}>
        <center><span className="desc-content-text">{props.text}</span></center>
        </Grid>
        <Grid item md={3} xs={12}>
        </Grid>
        </Grid>
           
        </div>
    )
}

export default Desc
