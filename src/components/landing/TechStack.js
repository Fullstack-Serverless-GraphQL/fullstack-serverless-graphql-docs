import React from "react"
import HeadingTwo from "../typography/HeadingTwo"
import HeadingThree from "../typography/HeadingThree"
import StackCard from "../cards/StackCard"
import constants from "../../constants"
const TechStack = () => (
  <>
    <div>
      <HeadingTwo className="text-center"> Tech stack</HeadingTwo>
      <HeadingThree className="text-blue text-center mb-5">
        Front end
      </HeadingThree>
      <div className="grid grid-cols-3 gap-5 ml-10">
        {constants.techStack.map(t => (
          <StackCard url={t.logo} linkURL={t.url} Title={t.technology} />
        ))}
      </div>

      <HeadingThree className="text-blue text-center mb-5 mt-5">
        Back end
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
