import React from "react"
import TeckStack from "../components/landing/TechStack"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/landing/hero"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <TeckStack />
  </Layout>
)

export default IndexPage
