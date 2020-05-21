import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import HeadingTwo from "../typography/HeadingTwo"
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
  const allGetAListingPosts = constants.filterByChapter(
    edges,
    "Get A Listing Query"
  )
  const allMakeAMutationPosts = constants.filterByChapter(
    edges,
    "Make a booking mutation"
  )

  const allUnitTestPosts = constants.filterByChapter(edges, "Unit testing")

  const allDeployBackendPosts = constants.filterByChapter(
    edges,
    "Deploy Backend"
  )
  //frontend posts
  const allCLIPosts = constants.filterByChapter(edges, "Vue cli")
  const allTailwindPosts = constants.filterByChapter(edges, "Tailwind")
  const allResuablePosts = constants.filterByChapter(
    edges,
    "Building reusable components"
  )
  const allChapters = [
    {
      chapterEdge: epilouges,
      chapterTitle: "Epilouge",
    },
    {
      chapterEdge: backendPosts,
      chapterTitle: "Setting Up infrastructure",
    },
    {
      chapterEdge: librariesPosts,
      chapterTitle: "Adding libraries",
    },
    {
      chapterEdge: allListingsPost,
      chapterTitle: "Create All listings query",
    },
    {
      chapterTitle: "Get A Listing Query",
      chapterEdge: allGetAListingPosts,
    },
    {
      chapterEdge: allMakeAMutationPosts,
      chapterTitle: "Make a booking mutation",
    },
    {
      chapterEdge: allUnitTestPosts,
      chapterTitle: "Unit testing",
    },
    {
      chapterEdge: allDeployBackendPosts,
      chapterTitle: "Deploy Backend",
    },
  ]

  const frontendPosts = [
    {
      chapterEdge: allCLIPosts,
      chapterTitle: "Vue cli",
    },
    {
      chapterEdge: allTailwindPosts,
      chapterTitle: "Tailwind",
    },
    {
      chapterEdge: allResuablePosts,
      chapterTitle: "Building reusable components",
    },
  ]
  return (
    <>
      <div className="mt-10">
        <HeadingTwo className="text-center">Chapters</HeadingTwo>
        {/* chAPTERS GRID */}
        <HeadingTwo className="text-center">Backend</HeadingTwo>

        <div className="grid grid-cols-2">
          {/* <ChapterBox edges={epilouges} text="Epilouge" />
          <ChapterBox edges={backendPosts} text="Setting Up infrastructure" />
          <ChapterBox edges={librariesPosts} text="Adding libraries" />
          <ChapterBox
            edges={allListingsPost}
            text="Create All listings query"
          /> */}

          {allChapters.map(i => (
            <ChapterBox edges={i.chapterEdge} text={i.chapterTitle} />
          ))}
        </div>
        <HeadingTwo className="text-center">Frontend</HeadingTwo>

        <div className="grid grid-cols-2">
          {frontendPosts.map(i => (
            <ChapterBox edges={i.chapterEdge} text={i.chapterTitle} />
          ))}
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
