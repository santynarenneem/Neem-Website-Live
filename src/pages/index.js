import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from '../components/Card';
import SEO from "../components/seo"
import {  graphql } from "gatsby"
import CardMid from '../components/CardMid';
import '../assets/bluma.css'
import Grid from '@material-ui/core/Grid';
import HeaderSmall from '../components/HeaderSmall';

import BigCard from '../components/BigCard';
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {data.allSanityHeaderBig.edges.map(headersmall=>(
      <div  key={headersmall.node.id}>

        <HeaderSmall text={headersmall.node.headerText} breadcrumb={headersmall.node.breadcrumb} img={headersmall.node.headerImage.asset.url}/>
        </div>
    ))}

    <h1>Hello Entusiasts ! We are currently Under Development </h1>
<Grid container  spacing={2} >
{data.allSanityService.edges.map(client=>(



    <Grid item md={4}xs={12}   key={client.node._id}>

{console.log(client.node._rawBody[0])}
    <CardMid title={client.node.service_title} img={client.node.image1.asset.url} content={client.node._rawBody[0].children[0].text} />
    <br/>

    </Grid>

       ))}
</Grid>
{data.allSanityDetail.edges.map(detail=>(
  <div key={detail.node.id}>
<BigCard tagline={detail.node.tagline} title={detail.node.headerText} img={detail.node.imageShow.asset.url} text={detail.node._rawDescription[0].children[0].text}/>
  </div>
))}
<Grid container  spacing={2} >
{data.allSanityClient.edges.map(client=>(
    <Grid item md={3}xs={12}>
    <div key={client.node.id} >
    <Card title={client.node.name} img={client.node.image1.asset.url}/>
    <br/>
    </div>
    </Grid>

       ))}
</Grid>
<Link style={{
  marginLeft: 20, color: `orange`
}} to="/Portfolio/">Client Showcase</Link>
<Link style={{
marginLeft: 20, color: `orange`
}} to="/AboutUs/">About Us</Link>
<Link style={{
marginLeft: 20, color: `orange`
}} to="/Resourcing/">Resourcing</Link>
<Link style={{
marginLeft: 20, color: `orange`
}} to="/Development/">Development</Link>
<Link style={{
marginLeft: 20, color: `orange`
}} to="/Consulting/">Consulting</Link>
  </Layout>
)
export const data = graphql`
    query MyQueryandMyQuery2 {
      allSanityService(filter: {service_title: {in: ["Development","Resourcing","Consulting"]}}) {
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
        allSanityHeaderBig(filter: {pageText: {eq: "Home"}}) {
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
                headerSubTitle
              }

            }
        },
        allSanityDetail(filter: {pageHeader: {in: "About Us"}}) {
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
        },
        allSanityClient {
          edges {
            node {
                id
              name
                image1{
                    asset{
                        url
                    }
                }
            }
          }
        }

      }

  `
export default IndexPage
