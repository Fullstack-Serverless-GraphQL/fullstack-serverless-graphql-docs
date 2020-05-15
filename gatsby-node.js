/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
  }

  console.log("www", result.data.allMarkdownRemark.edges)
  result.data.allMarkdownRemark.edges.forEach(({ node, index }) => {
    const previous =
      index === result.data.allMarkdownRemark.edges.length - 1
        ? null
        : result.data.allMarkdownRemark.edges[index + 1]

    const next =
      index === 0 ? null : result.data.allMarkdownRemark.edges[index - 1]

    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/post.js`),
      pageContext: {
        path: node.frontmatter.path,
        previous,
        next,
      },
    })
  })
}
