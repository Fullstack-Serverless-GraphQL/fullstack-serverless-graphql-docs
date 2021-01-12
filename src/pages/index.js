import React, { useState } from "react"
import TeckStack from "../components/landing/TechStack"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/landing/hero"
import Chapters from "../components/chapters/Chapters"
import FrameworkProvider from "../frameworkProvider"
import Partners from "../components/partners"
import constants from "../constants"
const IndexPage = () => {
  constants.track("App.LandingPage.View")

  return (
    <FrameworkProvider>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <TeckStack />
        <Chapters />
        <Partners />
      </Layout>
    </FrameworkProvider>
  )
}

export default IndexPage
