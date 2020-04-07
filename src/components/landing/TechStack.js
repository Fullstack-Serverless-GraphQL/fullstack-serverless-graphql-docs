import React from "react"
import BodyOne from "../typography/BodyOne"
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
      <div className="grid grid-cols-3 gap-5">
        {constants.techStack.map(t => (
          <StackCard url={t.logo} linkURL={t.url} Title={t.technology} />
        ))}
      </div>

      <HeadingThree className="text-blue text-center mb-5">
        Back end
      </HeadingThree>
      <div className="grid grid-cols-3 gap-5">
        {constants.backendTechStack.map(t => (
          <StackCard url={t.logo} linkURL={t.url} Title={t.technology} />
        ))}
      </div>
    </div>
  </>
)

export default TechStack
