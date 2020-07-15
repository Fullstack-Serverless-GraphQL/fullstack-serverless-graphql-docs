import React, { useState } from "react"
import { Link } from "gatsby"
import HeadingThree from "../typography/HeadingThree"
import BodyOne from "../typography/BodyOne"
import PropTypes from "prop-types"

const ChapterBox = ({ text, edges, collapse }) => {
  const [open, setOpen] = useState(false)

  const openChapters = () => {
    console.log("hi")
    setOpen(!open)
  }
  return (
    <>
      <div className="mt-5">
        {collapse ? (
          <>
            {" "}
            <button
              className="cursor-pointer focus:outline-none text-left"
              onClick={() => openChapters() && console.log(open)}
            >
              {text}
            </button>
            <span role="chapter opener">
              {open === true && (
                <>
                  {edges.map(edge => (
                    <BodyOne className="text-yellow m-3" key={edge.node.id}>
                      <Link to={edge.node.frontmatter.path}>
                        {edge.node.frontmatter.title}
                      </Link>
                    </BodyOne>
                  ))}
                </>
              )}
            </span>
          </>
        ) : (
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
