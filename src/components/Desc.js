import React from 'react'
import '../assets/css/styles.css';
import Grid from '@material-ui/core/Grid';
function Desc(props) {
    return (

        <Grid container>

            <Grid item md={12} xs={12}>

                <center>
                    <div className="desc-small-div">
                        <span className="desc-small-content-text">{props.text}</span>
                    </div>
                </center>
            </Grid>

        </Grid>

    )
}

export default Desc
