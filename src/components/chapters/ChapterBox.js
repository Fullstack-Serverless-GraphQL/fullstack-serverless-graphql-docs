import React from "react"
import { Link } from "gatsby"
import { Collapse } from "antd"
import HeadingThree from "../typography/HeadingThree"
import BodyOne from "../typography/BodyOne"
import PropTypes from "prop-types"
import "antd/dist/antd.css"
const { Panel } = Collapse

const ChapterBox = ({ text, edges, collapse }) => {
  return (
    <>
      <div className="mt-5">
        {collapse ? (
          <>
            <HeadingThree className="">{text}</HeadingThree>

            {edges.map(edge => (
              <BodyOne className="text-yellow m-3" key={edge.node.id}>
                <Link to={edge.node.frontmatter.path}>
                  {edge.node.frontmatter.title}
                </Link>
              </BodyOne>
            ))}
          </>
        ) : (
          <>
            {" "}
            <HeadingThree className="">{text}</HeadingThree>
            {edges.map(edge => (
              <BodyOne className="text-yellow m-3" key={edge.node.id}>
                <Link to={edge.node.frontmatter.path}>
                  {edge.node.frontmatter.title}
                </Link>
              </BodyOne>
            ))}
          </>
        )}
      </div>
    </>
  )
}

ChapterBox.propTypes = {
  text: PropTypes.string,
  edges: PropTypes.array,
}
export default ChapterBox
