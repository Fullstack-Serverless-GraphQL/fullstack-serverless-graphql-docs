import React from "react"
import { Link, graphql } from "gatsby"

const Chapters = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <>
    {edges.map(edge => (
      <div key={edge.node.id}>
        <Link to={edge.node.frontmatter.path}>
          {edge.node.frontmatter.title}
        </Link>
      </div>
    ))}
  </>
)

export const pageQuery = graphql`
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
`

export default Chapters
