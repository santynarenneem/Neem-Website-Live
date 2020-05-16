import React from 'react'
import Grid from '@material-ui/core/Grid';
function Footer() {
    return (

        <Grid container>
            <Grid item md={12} xs={12}>
                <div className="footer-div">
                    <div className="footer-div-content">

                        © 2020 Neem Consulting. All rights reserved.
                    </div>
                </div>
            </Grid>
        </Grid>

    )
}

export default Footer
