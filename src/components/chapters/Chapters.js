import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import HeadingTwo from "../typography/HeadingThree"
const Chapters = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <>
    <div className="mt-10">
      <HeadingTwo className="text-center">Chapters</HeadingTwo>
      {/* Start of chapter one */}
      {edges.map(edge => (
        <div key={edge.node.id}>
          <Link to={edge.node.frontmatter.path}>
            {edge.node.frontmatter.title}
          </Link>
        </div>
      ))}

      {/* end of chapter one */}
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
