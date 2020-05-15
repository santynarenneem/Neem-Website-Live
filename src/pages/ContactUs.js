import React from 'react'
import {  graphql } from "gatsby"
import CardMid from '../components/CardMid';

import Grid from '@material-ui/core/Grid';
import HeaderSmall from '../components/HeaderSmall';
import Header from '../components/header';
import Footer from '../components/Footer';
import Desc from '../components/Desc';
const ContactUs = ({data , headerData}) => (
<div>
<Header/>
{data.allSanityHeaderSmall.edges.map(headersmall=>(
  <div  key={headersmall.node.id}>

    <HeaderSmall text={headersmall.node.headerText} breadcrumb={headersmall.node.breadcrumb} img={headersmall.node.headerImage.asset.url}/>
    </div>
))}
{data.allSanityDetail.edges.map(detail=>(
  <div key={detail.node.id}>
<Desc  text={detail.node._rawDescription[0].children[0].text}/>
  </div>
))}
<Grid container  spacing={2} >




    <Grid item md={4}xs={12}  >


    <CardMid title="Call us!" img="" content="+44 207 097 8760" />


    </Grid>
    <Grid item md={4}xs={12}  >


    <CardMid title="Drop us a note!" img="" content="contact@neemconsulting.com" />


    </Grid>
    <Grid item md={4}xs={12}  >


    <CardMid title="Pop In !" img="" content="Venture Point, Ellesmere Port CH2 4NE" />


    </Grid>



</Grid>
<Footer/>
</div>

)
export const data = graphql`
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
                    url
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
                  url
                }
              }
            }
          }
        }

      }

  `

export default ContactUs
