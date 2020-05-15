import React from 'react'
import Grid from '@material-ui/core/Grid';
import '../assets/css/styles.css';
import Video from '../assets/media/Hop-Software-Gowing-Plan-720p.mp4'
function HeaderBig(props) {
    return (
        <div>
            <Grid container>
                <Grid item md={12} xs={12}>
                    <video id="homepage-hero-video" autoPlay muted loop >
                        <source xs={12}src={Video} id="homepage-hero-video-src"  type="video/mp4"/>
                    </video>
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