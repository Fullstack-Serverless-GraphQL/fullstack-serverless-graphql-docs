import React from "react"
import BodyOne from "../typography/BodyOne"
import HeadingTwo from "../typography/HeadingTwo"
import HeadingThree from "../typography/HeadingThree"
import StackCard from "../cards/StackCard"
import constants from "../../constants"
const TechStack = () => (
  <>
    <div>
      <HeadingTwo>Tech stack</HeadingTwo>
      <HeadingThree>Front end</HeadingThree>
      <div className="flex flex-row">
        {constants.techStack.map(t => (
          <StackCard url={t.logo} linkURL={t.url} Title={t.technology} />
        ))}
      </div>

      <HeadingThree>Back end</HeadingThree>
      <div className="flex flex-row">
        {constants.backendTechStack.map(t => (
          <StackCard url={t.logo} linkURL={t.url} Title={t.technology} />
        ))}
      </div>
    </div>
  </>
)

export default TechStack
