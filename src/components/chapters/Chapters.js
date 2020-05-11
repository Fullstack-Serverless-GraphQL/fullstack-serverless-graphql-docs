import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import HeadingThree from "../typography/HeadingThree"
import HeadingTwo from "../typography/HeadingTwo"
import BodyOne from "../typography/BodyOne"
import constants from "../../constants"
const Chapters = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log("eee", edges)
  const epilouges = constants.filterBy(edges, "Epilouge")
  const backendPosts = constants.filterBy(edges, "setting up backend")

  // const librariesPosts = edges.filter(
  //   i=
  // )
  return (
    <>
      <div className="mt-10">
        <HeadingTwo className="text-center">Chapters</HeadingTwo>
        {/* chAPTERS GRID */}
        <div className="grid grid-cols-2">
          <div className="mt-5">
            {/* start of chapter one */}
            <HeadingThree className="">Epilouge</HeadingThree>

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
            <HeadingThree className="">Setting Up infrastructure</HeadingThree>

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
