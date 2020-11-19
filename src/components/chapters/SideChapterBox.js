import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import HeadingTwo from "../typography/HeadingTwo"
import HeadingThree from "../typography/HeadingThree"
import constants from "../../constants"
import ChapterBox from "./ChapterBox"
import FrameworkButton from "../buttons/FrameworkButton"
import VueIcon from "../../images/vue.svg"
import ReactIcon from "../../images/react-icon.svg"

const SideChapterBox = ({
  collapse,
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  //get contenxt for the frameworks
  const [framework, toggleFramework] = useState("vue")
  //filtering of chapters
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

  const deployVue = constants.filterByFramework(edges, "Deploy Frontend", "vue")

  //frontend posts
  const allCLIPosts = constants.filterByChapter(edges, "Vue cli")
  const allTailwindPosts = constants.filterByFramework(edges, "Tailwind", "vue")
  const allResuablePosts = constants.filterByFramework(
    edges,
    "Building reusable components",
    "vue"
  )
  const allLandpagePosts = constants.filterByChapter(edges, "Landing Page")
  const allListingPosts = constants.filterByChapter(edges, "View Listing")
  const allBookingsPosts = constants.filterByChapter(edges, "Make A Booking")

  //react posts
  const allReactSetupPosts = constants.filterByFramework(
    edges,
    "Setting up React Frontend",
    "react"
  )

  const allTailwindReactPosts = constants.filterByFramework(
    edges,
    "Tailwind",
    "react"
  )

  const allReuseablePosts = constants.filterByFramework(
    edges,
    "Building reusable components",
    "react"
  )

  const allListingsPosts = constants.filterByFramework(
    edges,
    "Get All Listings",
    "react"
  )

  const allViewListingsPosts = constants.filterByFramework(
    edges,
    "View Listing",
    "react"
  )
  const allMakeAMutationReactPosts = constants.filterByFramework(
    edges,
    "Make A Booking Mutation",
    "react"
  )

  const deployReact = constants.filterByFramework(
    edges,
    "Deploy Frontend",
    "react"
  )

  const extras = constants.filterByChapter(edges, "Extras")

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
    {
      chapterEdge: deployVue,
      chapterTitle: "15. Deploy Frontend",
    },
    {
      chapterEdge: extras,
      chapterTitle: "16. Bonus",
    },
  ]

  const reactFrontEndPosts = [
    {
      chapterEdge: allReactSetupPosts,
      chapterTitle: "9. Scaffold React Frontend",
    },
    {
      chapterEdge: allTailwindReactPosts,
      chapterTitle: "10. Tailwind",
    },
    {
      chapterEdge: allReuseablePosts,
      chapterTitle: "11. Buiilding Reusable Components",
    },
    {
      chapterEdge: allListingsPosts,
      chapterTitle: "12. All Listings Component",
    },
    {
      chapterEdge: allViewListingsPosts,
      chapterTitle: "13. View A Listing Component",
    },
    {
      chapterEdge: allMakeAMutationReactPosts,
      chapterTitle: "14. Make A Booking",
    },
    {
      chapterEdge: deployReact,
      chapterTitle: "15. Deploy Frontend",
    },
    {
      chapterEdge: extras,
      chapterTitle: "16. Bonus",
    },
  ]
  return (
    <>
      <div className="mt-10 ml-5 p-3">
        <HeadingTwo className="text-left">Chapters</HeadingTwo>
        {/* chAPTERS GRID */}
        <HeadingThree className="text-left text-green-dark">
          Backend
        </HeadingThree>

        <div className="flex flex-col">
          {/* <ChapterBox edges={epilouges} text="Epilouge" />
          <ChapterBox edges={backendPosts} text="Setting Up infrastructure" />
          <ChapterBox edges={librariesPosts} text="Adding libraries" />
          <ChapterBox
            edges={allListingsPost}
            text="Create All listings query"
          /> */}

          {allChapters.map(i => (
            <ChapterBox
              edges={i.chapterEdge}
              text={i.chapterTitle}
              collapse={collapse}
            />
          ))}
        </div>
        <HeadingThree className="text-left text-blue">Frontend</HeadingThree>

        <div className="flex flex-col ">
          <FrameworkButton
            className="bg-blue-lightest text-blue-darkest px-4 py-2 rounded mb-3 max-w-xxs"
            onClick={() => toggleFramework("react")}
            img={ReactIcon}
          >
            React posts
          </FrameworkButton>
          <FrameworkButton
            className="bg-green-lightest text-green-darker px-4 py-2 rounded focus:border-green-darker focus:border max-w-xxs"
            onClick={() => toggleFramework("vue")}
            img={VueIcon}
          >
            Vue posts
          </FrameworkButton>
        </div>
        <div className="flex flex-col">
          {framework === "vue" ? (
            <>
              {" "}
              {frontendPosts.map(i => (
                <ChapterBox
                  edges={i.chapterEdge}
                  text={i.chapterTitle}
                  collapse={collapse}
                />
              ))}
            </>
          ) : (
            <>
              {" "}
              {reactFrontEndPosts.map(i => (
                <ChapterBox
                  edges={i.chapterEdge}
                  text={i.chapterTitle}
                  collapse={collapse}
                />
              ))}
            </>
          )}
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
    render={data => <SideChapterBox data={data} {...props} />}
  />
)
