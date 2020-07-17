import React from "react"
import { StaticQuery, graphql } from "gatsby"
import HeadingTwo from "../typography/HeadingTwo"
import constants from "../../constants"
import ChapterBox from "./ChapterBox"
const Chapters = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log("eee", edges)
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
  //Vue - frontend posts
  const allCLIPosts = constants.filterByChapter(edges, "Vue cli")
  const allTailwindPosts = constants.filterByChapter(edges, "Tailwind")
  const allResuablePosts = constants.filterByChapter(
    edges,
    "Building reusable components"
  )
  const allLandpagePosts = constants.filterByChapter(edges, "Landing Page")
  const allListingPosts = constants.filterByChapter(edges, "View Listing")
  const allBookingsPosts = constants.filterByChapter(edges, "Make A Booking")

  const allChapters = [
    {
      chapterEdge: epilouges,
      chapterTitle: "1. Epilouge",
    },
    {
      chapterEdge: backendPosts,
      chapterTitle: "2. Setting Up infrastructure",
    },
    {
      chapterEdge: librariesPosts,
      chapterTitle: "3. Adding libraries",
    },
    {
      chapterEdge: allListingsPost,
      chapterTitle: "4. Create All listings query",
    },
    {
      chapterTitle: "5. Get A Listing Query",
      chapterEdge: allGetAListingPosts,
    },
    {
      chapterEdge: allMakeAMutationPosts,
      chapterTitle: "6. Make a booking mutation",
    },
    {
      chapterEdge: allUnitTestPosts,
      chapterTitle: "7. Unit testing",
    },
    {
      chapterEdge: allDeployBackendPosts,
      chapterTitle: "8. Deploy Backend",
    },
  ]

  const frontendPosts = [
    {
      chapterEdge: allCLIPosts,
      chapterTitle: "9. Vue cli",
    },
    {
      chapterEdge: allTailwindPosts,
      chapterTitle: "10. Tailwind",
    },
    {
      chapterEdge: allResuablePosts,
      chapterTitle: "11. Building reusable components",
    },
    {
      chapterEdge: allLandpagePosts,
      chapterTitle: "12. Landing Page",
    },
    {
      chapterEdge: allListingPosts,
      chapterTitle: "13. View Listing",
    },
    {
      chapterEdge: allBookingsPosts,
      chapterTitle: "14. Make A Booking",
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

        <button>React posts</button>
        <button>Vue posts posts</button>
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
                postnumber
                framework
              }
            }
          }
        }
      }
    `}
    render={data => <Chapters data={data} {...props} />}
  />
)
