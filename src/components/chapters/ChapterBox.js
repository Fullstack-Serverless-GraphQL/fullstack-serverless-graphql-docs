import React, { useState } from "react"
import { Link } from "gatsby"
import HeadingThree from "../typography/HeadingThree"
import BodyOne from "../typography/BodyOne"
import PropTypes from "prop-types"

const ChapterBox = ({ text, edges, collapse }) => {
  const [open, setOpen] = useState(false)

  const openChapters = () => {
    setOpen(!open)
  }
  return (
    <>
      <div className="mt-5">
        {collapse ? (
          <>
            {" "}
            <button
              className="cursor-pointer focus:outline-none text-left font-display"
              onClick={() => openChapters() && console.log(open)}
            >
              {text}
            </button>
            <span>
              {open === true && (
                <>
                  {edges.map(edge => (
                    <BodyOne className="text-blue-dark m-3" key={edge.node.id}>
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
              <BodyOne className="text-blue-dark m-3" key={edge.node.id}>
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
