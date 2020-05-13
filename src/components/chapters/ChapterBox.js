import React from "react"
import { Link } from "gatsby"
import HeadingThree from "../typography/HeadingThree"
import BodyOne from "../typography/BodyOne"

const ChapterBox = ({ text, edges }) => {
  return (
    <>
      <div className="mt-5">
        <HeadingThree className="">{text}</HeadingThree>

        {edges.map(edge => (
          <BodyOne className="text-yellow m-3" key={edge.node.id}>
            <Link to={edge.node.frontmatter.path}>
              {edge.node.frontmatter.title}
            </Link>
          </BodyOne>
        ))}
      </div>
    </>
  )
}

export default ChapterBox
