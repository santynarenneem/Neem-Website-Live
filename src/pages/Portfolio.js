import React from 'react'
import { graphql } from "gatsby"
import Card from '../components/Card';
import { Link } from "gatsby"
import Header from '../components/header';
import Footer from '../components/footer';
import Grid from '@material-ui/core/Grid';
import HeaderSmall from '../components/HeaderSmall';
import Desc from '../components/Desc';
const Portfolio = ({data , headerData}) => (
<div>
<Header/>
{data.allSanityHeaderSmall.edges.map(headersmall=>(
    <HeaderSmall key={headersmall.node.id} text={headersmall.node.headerText} breadcrumb={headersmall.node.breadcrumb} img={headersmall.node.headerImage.asset.url}/>

))}
<Desc text="Check out our growing list of client and find out more about the work we do..."/>
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
<Footer/>
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
                slug{
                  current
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
