import React from 'react'
import {  graphql } from "gatsby"
import Card from '../components/Card';
import '../assets/bluma.css'
import Grid from '@material-ui/core/Grid';
import HeaderSmall from '../components/HeaderSmall';
import Desc from '../components/Desc';
const Portfolio = ({data , headerData}) => (
<div>
{data.allSanityHeaderSmall.edges.map(headersmall=>(
    <HeaderSmall key={headersmall.node.id} text={headersmall.node.headerText} breadcrumb={headersmall.node.breadcrumb} img={headersmall.node.headerImage.asset.url}/>

))}
<Desc text="Check out our growing list of client and find out more about the work we do..."/>
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

</div>

)
export const data = graphql`
    query MyQuery {
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
        },
        allSanityHeaderSmall(filter: {pageText: {eq: "Client"}}) {
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
          }

      }
  `

export default Portfolio
