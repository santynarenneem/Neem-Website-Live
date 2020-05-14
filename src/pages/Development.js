import React from 'react'
import { Link, graphql } from "gatsby"

import '../assets/bluma.css'
import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';
import HeaderSmall from '../components/HeaderSmall';

import BigCard from '../components/BigCard';
const Development = ({data , headerData}) => (
<div>
{data.allSanityHeaderSmall.edges.map(headersmall=>(
  <div  key={headersmall.node.id}>

    <HeaderSmall text={headersmall.node.headerText} breadcrumb={headersmall.node.breadcrumb} img={headersmall.node.headerImage.asset.url}/>
    </div>
))}
{data.allSanityDetail.edges.map(detail=>(
  <div key={detail.node.id}>
<BigCard tagline={detail.node.tagline} title={detail.node.headerText} img={detail.node.imageShow.asset.url} text={detail.node._rawDescription[0].children[0].text}/>
  </div>
))}
<Grid container  spacing={2} >
{data.allSanityClient.edges.map(client=>(
    <Grid item md={3}xs={12}>
    <div key={client.node.id} >
    <Link  to={'/project/'+client.node.slug.current+''}><Card title={client.node.name} img={client.node.image1.asset.url}/>
    </Link>
    <br/>
    </div>
    </Grid>

       ))}
</Grid>

</div>

)
export const data = graphql`
    query MyQueryandMyQueryandMyQueryandMyQuery {
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
        },
        allSanityClient {
            edges {
              node {
                  id
                name
                slug{
                  current
                }
                  image1{
                      asset{
                          url
                      }
                  }
              }
            }
          },

        allSanityDetail(filter: {pageHeader: {in: "Development"}}) {
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

export default Development
