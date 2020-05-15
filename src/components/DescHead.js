import React from 'react'
import '../assets/css/styles.css'
import Grid from '@material-ui/core/Grid';
import {Animated} from "react-animated-css";

function DescHead(props) {
    return (

        <Grid container>

            <Grid item md={12} xs={12}>
                <center>
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>

                        <div className="desc-big-head-div">
                            <center>
                                <span className="desc-big-header">{props.text}</span>
                            </center>
                        </div>
                    </Animated>
                </center>
            </Grid>

        </Grid>

    )
}

export default DescHead
