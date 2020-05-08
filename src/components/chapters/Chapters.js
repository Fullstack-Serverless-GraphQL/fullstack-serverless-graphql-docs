import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import HeadingTwo from "../typography/HeadingThree"
import BodyOne from "../typography/BodyOne"

const Chapters = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const epilouges = edges.filter(i => i.node.frontmatter.part === "Epilouge")
  const backendPosts = edges.filter(
    i => i.node.frontmatter.part === "setting up backend"
  )
  return (
    <>
      <div className="mt-10">
        <HeadingTwo className="text-center">Chapters</HeadingTwo>
        {/* chAPTERS GRID */}
        <div className="grid grid-cols-2">
          <div className="mt-5">
            {/* start of chapter one */}
            <HeadingTwo className="">Epilouge</HeadingTwo>

            {/* Start of chapter one */}
            {epilouges.map(edge => (
              <BodyOne className="text-yellow m-3" key={edge.node.id}>
                <Link to={edge.node.frontmatter.path}>
                  {edge.node.frontmatter.title}
                </Link>
              </BodyOne>
            ))}

            {/* end of chapter one */}
          </div>

          {/* start of chapter two */}
          <div className="mt-5">
            <HeadingTwo className="">Setting Up infrastructure</HeadingTwo>

            {backendPosts.map(edge => (
              <BodyOne className="text-yellow m-3" key={edge.node.id}>
                <Link to={edge.node.frontmatter.path}>
                  {edge.node.frontmatter.title}
                </Link>
              </BodyOne>
            ))}
          </div>

          {/* end of chapter two */}
        </div>
      </div>
    </>
  )
}

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
                part
                chapter
              }
            }
          }
        }
      }
    `}
    render={data => <Chapters data={data} {...props} />}
  />
)
