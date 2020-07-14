import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import HeadingOne from "../components/typography/HeadingOne"
import HeadingThree from "../components/typography/HeadingThree"
import ArrowLeft from "../assets/arrow-left.svg"
export default function Template({ data, pageContext }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const { previous, next } = pageContext
  console.log("ddd", pageContext)
  return (
    <Layout>
      <div className="blog-post">
        <HeadingOne>{frontmatter.title}</HeadingOne>
        <HeadingThree>{frontmatter.date}</HeadingThree>
        <hr className="bg-grey" />
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <div className="mt-10 ">
        <ul className="flex flex-row">
          <li>
            {next && (
              <Link to={next.node.frontmatter.path}>
                <span className="flex flex-row">
                  <img src={ArrowLeft} alt="arrow left" /> Prev
                </span>
              </Link>
            )}
          </li>
          <li className="mr-4">
            {previous && (
              <Link to={previous.node.frontmatter.path}>
                Next {previous.node.frontmatter.title}
              </Link>
            )}
          </li>
        </ul>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        postnumber
      }
    }
  }
`
