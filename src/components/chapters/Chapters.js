import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import HeadingTwo from "../typography/HeadingThree"
import BodyOne from "../typography/BodyOne"

const Chapters = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <>
    <div className="mt-10">
      <HeadingTwo className="text-center">Chapters</HeadingTwo>
      {/* chAPTERS GRID */}
      <div className="grid grid-cols-2">
        <div className="mt-5">
          <HeadingTwo className="">Epilouge</HeadingTwo>

          {/* Start of chapter one */}
          {edges.map(edge => (
            <BodyOne className="text-yellow m-3" key={edge.node.id}>
              <Link to={edge.node.frontmatter.path}>
                {edge.node.frontmatter.title}
              </Link>
            </BodyOne>
          ))}

          {/* end of chapter one */}
        </div>
      </div>
    </div>
  </>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `}
    render={data => <Chapters data={data} {...props} />}
  />
)
