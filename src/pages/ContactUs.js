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
{data.allSanityService.edges.map(client=>(



    <Grid item md={4}xs={12}   key={client.node._id}>

{console.log(client.node._rawBody[0])}
    <CardMid title={client.node.service_title} img={client.node.image1.asset.url} content={client.node._rawBody[0].children[0].text} />
    <br/>

    </Grid>

       ))}
</Grid>

<Grid container >
<Grid item md={6} xs={12}>
Test
</Grid>
<Grid item md={6} xs={12}>
Test
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
