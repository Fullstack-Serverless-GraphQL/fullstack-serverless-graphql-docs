import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p className="text-xl font-display">
      This is going to the home of Fullstack Serverless GraphQL, Where you will
      learn how to build{" "}
      <a
        className="text-blue"
        target="_blank"
        rel="noopener noreferrer"
        href="https://lunar-tour-vue.netlify.com"
      >
        Lunar Tour
      </a>
    </p>
  </Layout>
)

export default IndexPage
