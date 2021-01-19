import React, { useState } from "react"
import TeckStack from "../components/landing/TechStack"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/landing/hero"
import Chapters from "../components/chapters/Chapters"
import FrameworkProvider from "../frameworkProvider"
import Partners from "../components/partners"
import constants from "../constants"
import MailChimp from "../components/landing/MailChimp"
const IndexPage = () => {
  constants.track("App.LandingPage.View")

  return (
    <FrameworkProvider>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <MailChimp />
        <TeckStack />
        <Chapters />
        <Partners />
      </Layout>
    </FrameworkProvider>
  )
}

export default IndexPage
