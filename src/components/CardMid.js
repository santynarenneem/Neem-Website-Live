import React from 'react'
import '../assets/css/styles.css';
import Grid from '@material-ui/core/Grid';
function CardMid(props) {
    return (
        <Grid>
            <Grid item md={12} xs={12}>
                <div className="card-mid-div">
                    <center><img className="card-mid-img" alt={props.title} src={props.img}/></center>
                    <center>
                        <div className="card-mid-header">
                            {props.title}
                        </div>
                    </center>
                    <div className="card-mid-content">
                        {props.content}
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default CardMid
