import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

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
