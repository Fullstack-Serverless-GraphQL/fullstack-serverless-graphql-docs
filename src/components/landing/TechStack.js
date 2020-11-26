import React from "react"
import HeadingTwo from "../typography/HeadingTwo"
import HeadingThree from "../typography/HeadingThree"
import BodyOne from "../typography/BodyOne"
import StackCard from "../cards/StackCard"
import constants from "../../constants"
const TechStack = () => (
  <>
    <div className="mt-12">
      <HeadingTwo className="text-left font-extrabold"> Tech stack</HeadingTwo>
      <HeadingThree className="text-blue  text-xl text-left mb-5 font-bold">
        Frontend
      </HeadingThree>
      <BodyOne className="text-black  text-xl text-left mb-5 font-bold">
        Using the Serverless Framework, we will be able to create GraphQL Lambda
        powered by Apollo Server.
      </BodyOne>
      <div className="grid grid-cols-3 gap-5 ml-10">
        {constants.techStack.map(t => (
          <StackCard url={t.logo} linkURL={t.url} Title={t.technology} />
        ))}
      </div>

      <HeadingThree className="text-green-darker text-center mb-5 mt-5">
        Backend
      </HeadingThree>
      <div className="grid grid-cols-3 gap-5 ml-10">
        {constants.backendTechStack.map(t => (
          <StackCard url={t.logo} linkURL={t.url} Title={t.technology} />
        ))}
      </div>
    </div>
  </>
)

export default TechStack
