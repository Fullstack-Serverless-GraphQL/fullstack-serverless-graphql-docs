import React from "react"
import HeadingOne from "../typography/HeadingOne"
import BodyOne from "../typography/BodyOne"
import RedBlockButton from "../buttons/RedBlockButton"
import RedOutlineButton from "../buttons/RedOutlineButton"
import HeroImage from "../../images/astro.svg"
import constants from "../../constants"
const Hero = () => (
  <>
    <div className="flex lg:flex-row s:flex-col text-left">
      <div className="p-10 mr-10">
        <img src={HeroImage} alt="hero " className="lg:hidden mb-10 " />

        <HeadingOne className="mb-10 ">
          Build a fullstack serverless GraphQL App!
        </HeadingOne>

        <BodyOne className="mb-10">
          The way APIs are built and the tools that are used to consume them
          have have changed drastically over the years. This free resource is
          your chance to learn how to build a GraphQL API in a serverless
          environment on AWS Lambda and consume it on a Vue.JS frontend based on
          a design system using Apollo. Everything you learn here will not be a
          waste of time, it is 100% reproducible for production use cases.{" "}
        </BodyOne>
        <RedBlockButton className="mr-5">Learn now!</RedBlockButton>

        <RedOutlineButton
          className="s:mt-5 lg:ml-5 "
          onClick={() => constants.track("App.RedirctToDemo")}
        >
          <a
            className="flex flex-row"
            target="_blank"
            rel="noopener noreferrer"
            href="https://lunar-tour.netlify.com/"
          >
            View Demo
          </a>
        </RedOutlineButton>
      </div>
      <div>
        <img
          src={HeroImage}
          alt="hero"
          className="s:hidden lg:block mt-20 w-full"
        />
      </div>
    </div>
  </>
)

export default Hero
