import React from "react"
import { Link } from "gatsby"
import Header from '../components/header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import SEO from "../components/seo"
import { graphql } from "gatsby"
import CardMid from '../components/CardMid';
import Grid from '@material-ui/core/Grid';
import { Helmet } from "react-helmet"

import HeaderBig from '../components/HeroBig';
import DescHead from '../components/DescHead';
import Desc from '../components/Desc';
import BigCard from '../components/BigCard';
import Slider from "react-slick";
import '../assets/css/animate.css';
import '../assets/css/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  arrows:true,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


const IndexPage = ({data}) => (
 <Grid container>

 <SEO title="Neem Home" keywords={[`Consulting in UK`, `Technology in UK`, `Resourcing in UK`]} />
 <Helmet>
 <meta charSet="utf-8" />
 <title>Neem Home</title>
 
</Helmet>
 <Header/>

   <Grid item md={12} xs={12}>    {data.allSanityHeaderBig.edges.map(headersmall=>(
      <div  key={headersmall.node.id}>

        <HeaderBig text={headersmall.node.headerText} breadcrumb={headersmall.node.breadcrumb} img={headersmall.node.headerImage.asset.url}/>
        </div>
    ))}
    </Grid>
<Grid container item md={12} xs={12}>
    <DescHead text={"Big enough to make real impact. Small enough to move fast."}/>
    </Grid>
    <Grid container item md={12} xs={12}>
     <hr className="line-art"/>    </Grid>
    <Grid container item md={12} xs={12}>
    <Desc text={"At Neem Consulting we always punch above our weight, challenging bigger competitors on both value and speed. We are big enough to take on the industry's heavy hitters, but small enough to be nimble and flexible - while never scrimping on quality."}/>
   </Grid>
    <Grid container item md={12} xs={12} spacing={1}>


{data.allSanityService.edges.map(client=>(



    <Grid item md={4}xs={12}   key={client.node._id}>

{console.log(client.node._rawBody[0])}
    <CardMid title={client.node.service_title} img={client.node.image1.asset.url} content={client.node._rawBody[0].children[0].text} url={client.node.link} />
    <br/>

    </Grid>

       ))}

</Grid>
<Grid item md={12} xs={12}>
{data.allSanityDetail.edges.map(detail=>(
  <div key={detail.node.id}>
<BigCard tagline={detail.node.tagline} title={detail.node.headerText} img={detail.node.imageShow.asset.fluid} text={detail.node._rawDescription}/>
  </div>
))}
</Grid>
<Grid item md={12} xs={12}>
<Slider style={{margin:40}}{...settings}>




{data.allSanityClient.edges.map(client=>(

    <div key={client.node.id} >
   <Link to={'/project/'+client.node.slug.current+''}> <Card title={client.node.name} img={client.node.preview.asset.fluid}/>
   </Link>
   <br/>
    </div>


       ))}


</Slider>
</Grid>
<Grid item md={12} xs={12}>
<Footer/>
</Grid>
</Grid>
)
export const data = graphql`
    query MyQueryandMyQuery2 {
      allSanityService(filter: {service_title: {in: ["Development","Resourcing","Consulting"]}}) {
        edges {
          node {
            _id
            link
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
                asset{
                  fluid(maxWidth: 700) {
                    ...GatsbySanityImageFluid
                  }
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
              slug{
                current
              }
                preview{
                    asset{
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
export default IndexPage
