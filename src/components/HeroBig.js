import React from 'react'
import Grid from '@material-ui/core/Grid';
import './styles.css'
import Video from '../assets/media/Hop-Software-Gowing-Plan-720p.mp4'
function HeaderBig(props) {
    return (
        <div>
        <Grid container >
        <Grid item md={12} xs={12}>
         <video autoPlay muted loop id="myVideo">
                <source src={Video} type="video/mp4"/>
            </video>
        </Grid>

        </Grid>

            <div className="content">
            <center><span className="tags-w">We Are</span></center>
                <span  className="h1text">{props.text}</span>
                <p>{props.breadcrumb}</p>
                <center><span className="tags-d">Development</span><span className="tags-c">Consulting</span><span className="tags-r">Resourcing</span></center>

            </div>

        </div>
    )
}

export default HeaderBig
