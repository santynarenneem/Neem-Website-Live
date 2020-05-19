import React from 'react'
import Grid from '@material-ui/core/Grid';

import {Link} from 'gatsby';
function Footer() {
    return (

        <Grid container>
            <Grid item md={12} xs={12}>
                <div className="footer-div">
                    <Grid item md={8} xs={12}>
                        <div className="footer-div-content">

                            © 2020 Neem Consulting. All rights reserved.

                          
                            <Link to="/cookiePolicy">   Cookie Policy</Link>
                            <Link to="/privacyPolicy">   Privacy Policy</Link>
                        </div>
                    </Grid>




                </div>
            </Grid>
        </Grid>

    )
}

export default Footer
