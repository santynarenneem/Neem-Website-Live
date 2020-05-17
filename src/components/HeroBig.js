import React from 'react'
import Grid from '@material-ui/core/Grid';
import '../assets/css/styles.css';
import ReactWOW from 'react-wow'
import Video from '../assets/media/Hop-Software-Gowing-Plan-720p.mp4'
function HeaderBig(props) {
    return (
        <div>
            <Grid container>
                <Grid item md={12} xs={12}>
                    <video id="homepage-hero-video" autoPlay muted loop>
                        <source src={Video} xs={12} id="homepage-hero-video-src" type="video/mp4"/>

                    </video>
                    <ReactWOW animation='zoomIn'>
                        <div className="homepage-hero-div">
                            <span className="homepage-hero-tags-w">We Are</span><br/>
                            <span className="homepage-hero-header-text">{props.text}</span>
                            <br/>
                            <span className="homepage-hero-tags-d">Development</span>
                        </div>
                    </ReactWOW>

                </Grid>

                {/*    <Grid item md={12} xs={12}>
                    <center>
                        <span className="homepage-hero-tags-w">We Are</span>
                    </center>
                </Grid>

                <Grid item md={12} xs={12}>
                    <center>
                        <span className="homepage-hero-header-text">{props.text}</span>
                    </center>
                </Grid>

                <Grid item md={4} xs={12}>
                    <center>
                        <span className="homepage-hero-tags-d">Development</span>
                    </center>
                </Grid>
                <Grid item md={4} xs={12}>
                    <center>
                        <span className="homepage-hero-tags-c">Consulting</span>
                    </center>
                </Grid>
                <Grid item md={4} xs={12}>
                    <center>
                        <span className="homepage-hero-tags-r">Resourcing</span>
                    </center>
    </Grid> */}

            </Grid>
        </div>
    )
}

export default HeaderBig