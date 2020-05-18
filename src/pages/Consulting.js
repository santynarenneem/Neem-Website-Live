import React from 'react'
import { Link , graphql } from "gatsby"

import Card from '../components/Card';
import SEO from '../components/seo';
import Footer from '../components/Footer';

import HeaderSmall from '../components/HeaderSmall';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BigCard from '../components/BigCard';
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
const Consulting = ({data , headerData}) => (

<div>
<SEO title="Neem Consulting" keywords={[`Consulting in UK`, `Technology in UK`, `Resourcing in UK`]} />
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
<Slider style={{margin:20}}{...settings}>
{data.allSanityClient.edges.map(client=>(

    <div key={client.node.id} >
    <Link  to={'/project/'+client.node.slug.current+''}><Card title={client.node.name} img={client.node.image1.asset.url}/>
    </Link>
    <br/>
    </div>


       ))}
       </Slider>
<Footer/>
</div>

)
export const data = graphql`
    query MyQueryandMyQueryandMyQueryandMyQueryandMyQuery {
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
        allSanityDetail(filter: {pageHeader: {in: "Consulting"}}) {
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
          }

      }

  `

export default Consulting
