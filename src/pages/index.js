import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello Entusiasts ! We are currently Under Development </h1>


    <Link to="/Portfolio/">Client Showcase</Link>
    <Link to="/AboutUs/">About Us</Link>
    <Link to="/Resourcing/">Resourcing</Link>
    <Link to="/Development/">Development</Link>
    <Link to="/Consulting/">Consulting</Link>
  </Layout>
)

export default IndexPage
