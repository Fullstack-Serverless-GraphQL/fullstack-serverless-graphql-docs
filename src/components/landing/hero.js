import React from "react"
import HeadingOne from "../typography/HeadingOne"
import BodyOne from "../typography/BodyOne"
import RedBlockButton from "../buttons/RedBlockButton"

const Hero = () => (
  <>
    <div className="flex lg:flex-row s:flex-col">
      <div>
        <HeadingOne>Build a fullstack serverless GraphQL App!</HeadingOne>
        <BodyOne>
          The way APIs are built and the tools that are used to consume them
          have have changed drastically over the years. This free resource is
          your chance to learn how to build a GraphQL API in a serverless
          environment on AWS Lambda and consume it on a Vue.JS frontend based on
          a design system using Apollo. Everything you learn here will not be a
          waste of time, it is 100% reproducible for production use cases.{" "}
        </BodyOne>
        <RedBlockButton>Learn now!</RedBlockButton>
      </div>
    </div>
  </>
)

export default Hero
