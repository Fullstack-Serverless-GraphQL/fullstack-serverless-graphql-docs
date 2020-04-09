import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HeadingOne from "../components/typography/HeadingOne"
import HeadingThree from "../components/typography/HeadingThree"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post">
        <HeadingOne>{frontmatter.title}</HeadingOne>
        <HeadingThree>{frontmatter.date}</HeadingThree>
        <hr className="bg-grey" />
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
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
      }
    }
  }
`
