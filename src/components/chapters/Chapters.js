import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import HeadingThree from "../typography/HeadingThree"
import HeadingTwo from "../typography/HeadingTwo"
import BodyOne from "../typography/BodyOne"
import constants from "../../constants"
import ChapterBox from "./ChapterBox"
const Chapters = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const epilouges = constants.filterByPart(edges, "Epilouge")
  const backendPosts = constants.filterByPart(edges, "setting up backend")
  const librariesPosts = constants.filterByChapter(edges, "Adding libraries")
  const allListingsPost = constants.filterByChapter(edges, "All listings query")
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

          {/* start of chapter three */}
          <div className="mt-5">
            <HeadingThree className="">Adding libraries</HeadingThree>

            {librariesPosts.map(edge => (
              <BodyOne className="text-yellow m-3" key={edge.node.id}>
                <Link to={edge.node.frontmatter.path}>
                  {edge.node.frontmatter.title}
                </Link>
              </BodyOne>
            ))}
          </div>

          {/* end of chapter three */}
        </div>

        <ChapterBox edges={allListingsPost} text="Create All listings query" />
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
