import React from 'react'
import HeaderSmall from '../components/HeaderSmall'
import CardMid from '../components/Card'
import Desc from '../components/Desc'
import DescHead from '../components/DescHead'
import Grid from '@material-ui/core/Grid';
function ClientPage({data}) {

    return (
        <div>
            <HeaderSmall text={data.sanityClient.name} breadcrumb={data.sanityClient.name} img={data.sanityClient.image1.asset.url}/>
            <DescHead text={data.sanityClient.name}/>
       <Desc text = {data.sanityClient._rawBody[0].children[0].text}/>
            <Grid container >
          <Grid item md={4} xs={12}>
          <CardMid img={data.sanityClient.image1.asset.url}/>
          </Grid>
          <Grid item md={4} xs={12}>
          <CardMid img={data.sanityClient.image2.asset.url}/>
          </Grid>
          <Grid item md={4} xs={12}>
          <CardMid img={data.sanityClient.image3.asset.url}/>
          </Grid>

          </Grid>


        </div>
    )
}
export const data = graphql `
query ($pagePath :String) {
sanityClient(slug: {current: {eq: $pagePath}}){
name
_rawBody
image1{
    asset{
        url
    }
}
image2{
    asset{
        url
    }
}
image3{
    asset{
        url
    }
}
slug{
    current
}
}
  }
`
export default ClientPage
