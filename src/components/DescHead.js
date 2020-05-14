import React from 'react'
import './styles.css'
import Grid from '@material-ui/core/Grid';
function DescHead(props) {
    return (
        <div className="desc-head-div" >
        <Grid container>
<Grid item md={3} xs={12}>
</Grid>
<Grid item md={6} xs={12}>
<center><span className="header">{props.text}</span></center>
</Grid>
<Grid item md={3} xs={12}>
</Grid>
        </Grid>
           
        </div>
    )
}

export default DescHead
