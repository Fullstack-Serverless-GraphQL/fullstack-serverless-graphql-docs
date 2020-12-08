import React from "react"
import { Link } from "gatsby"
import HeadingOne from "../typography/HeadingOne"
import BodyOne from "../typography/BodyOne"
import RedBlockButton from "../buttons/RedBlockButton"
import RedOutlineButton from "../buttons/RedOutlineButton"
import HeroImage from "../../images/astro.svg"
import constants from "../../constants"
import About from "../../assets/about.jpg"
const Hero = () => (
  <>
    <div className="flex lg:flex-row s:flex-col text-left">
      <div className="">
        <div>
          <img
            src={HeroImage}
            alt="hero"
            className="s:hidden lg:block mt-20 w-1/5"
          />
        </div>
        <HeadingOne className="mb-10  lg:text-3xl font-extrabold ">
          Build a fullstack app that books vacations to the moon
        </HeadingOne>

        <BodyOne className="mb-10 text-xl font-medium">
          This course like resource will you teach how to use GraphQL with AWS
          Lambda and DynamoDB with JavaScript on the backend. While you can
          choose your own adventure on the frontend side of things with Vue or
          React. Both tracks will cover use of their respective Apollo Client
          libraries, while using Stripe for payments.
        </BodyOne>
        <RedBlockButton className="mr-5">
          <Link to={`/introduction`}>Learn now!</Link>
        </RedBlockButton>

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
    </div>
  </>
)

export default Hero
