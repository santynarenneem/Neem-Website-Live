import React from 'react'
import {graphql} from "gatsby"
import CardMidContact from '../components/CardContact';
import Iframe from 'react-iframe'
import Grid from '@material-ui/core/Grid';
import HeaderSmallContact from '../components/HeaderSmallContact';
import Header from '../components/header';
import Footer from '../components/Footer';
import Desc from '../components/Desc';
import { Helmet } from "react-helmet"
import DescHead from '../components/DescHead';
import '../assets/css/styles.css';
import ReactWOW from 'react-wow'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SEO from '../components/seo';
const ContactUs = ({data, headerData}) => (
    <div>
    <SEO title="Neem Contact" keywords={[`Consulting in UK`, `Technology in UK`, `Resourcing in UK`]} />
    <Helmet>
    <meta charSet="utf-8" />
    <title>Neem Contact</title>

  </Helmet>
        <Header/> {data
            .allSanityHeaderSmall
            .edges
            .map(headersmall => (
                <div key={headersmall.node.id}>

                    <HeaderSmallContact
                        text={headersmall.node.headerText}
                        breadcrumb={headersmall.node.breadcrumb}
                        img={headersmall.node.headerImage.asset.fluid}/>
                </div>
            ))}
            <DescHead text="What can we help you with today?"/>
            <hr className="line-art"/>
        {data
            .allSanityDetail
            .edges
            .map(detail => (
                <div key={detail.node.id}>
                    <Desc text={detail.node._rawDescription[0].children[0].text}/>
                </div>
            ))}

        <Grid container spacing={2}>
            {data
                .allSanityService
                .edges
                .map(client => (

                    <Grid xs={12} item md={4} key={client.node._id}>

                        {console.log(client.node._rawBody[0])}
                        <CardMidContact
                            title={client.node.service_title}
                            img={client.node.image1.asset.url}
                            content={client.node._rawBody[0].children[0].text}/>
                        <br/>

                    </Grid>

                ))}
        </Grid>

        <Grid container spacing={2}>
            <Grid  item md={6} xs={12} >


                <Iframe
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Venture%20point%20business%20park&t=&z=13&ie=UTF8&iwloc=&output=embed"

                    display="initial"
                    position="relative"/>
            </Grid>
            <Grid item md={6} xs={12}>
                <Grid item xs>
                    <form noValidate autoComplete="off">
                        <Grid item xs className="contact-form-grid">
                            <TextField className="contact-form-field" id="outlined-basic" label="Name" variant="outlined"/>
                        </Grid>
                        <ReactWOW animation='fadeIn'>
                        <Grid item xs className="contact-form-grid">
                            <TextField  className="contact-form-field" id="outlined-basic" label="Telephone" variant="outlined"/>
                        </Grid>
                        </ReactWOW>
                        <Grid item xs className="contact-form-grid">
                            <TextField  className="contact-form-field" id="outlined-basic" label="Email" variant="outlined"/>
                        </Grid>
                        <Grid item xs className="contact-form-grid">
                            <TextField  className="contact-form-field" id="outlined-basic"  multiline
                            rows={6} label="Message" variant="outlined"/>
                        </Grid>
                        <Grid item xs className="contact-form-grid">
                  <center><Button variant="outlined">Submit</Button></center>
                        </Grid>

                    </form>
                </Grid>

            </Grid>

        </Grid>
        <Footer/>
    </div>

)
export const data = graphql `
    query MyQueryandMyQueryandContactQuery {
      allSanityService(filter: {service_title: {in: ["Pop in!","Drop us a note!","Call us!"]}}) {
        edges {
          node {
            _id
            image1 {
              asset {
                url
              }
            }
            service_title
            _rawBody
          }
        }
      },
        allSanityHeaderSmall(filter: {pageText: {eq: "Contact Us"}}) {
            edges {
              node {
                id
                pageText
                headerText
                headerImage{
                  asset{
                    fluid(maxWidth: 700) {
                        ...GatsbySanityImageFluid
                      }
                  }
                }
                breadcrumb
              }

            }
        },
        allSanityDetail(filter: {pageHeader: {in: "Contact Us"}}) {
          edges {
            node {
              id
              tagline
              headerText
              _rawDescription
              imageShow {
                asset {
                    fluid(maxWidth: 700) {
                        ...GatsbySanityImageFluid
                      }
                }
              }
            }
          }
        }

      }

  `

export default ContactUs
