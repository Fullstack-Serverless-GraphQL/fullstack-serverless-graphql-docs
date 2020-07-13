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
              postNumber
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
  }

  const results = result.data.allMarkdownRemark.edges

  // console.log("rrr", results)
  result.data.allMarkdownRemark.edges.forEach((node, index) => {
    const previous = index === results.length - 1 ? null : results[index + 1]

    previous.sort(
      (a, b) => a.node.frontmatter.postNumber - b.node.frontmatter.postNumber
    )
    const next = index === 0 ? null : results[index - 1]
    next.sort(
      (a, b) => a.node.frontmatter.postNumber - b.node.frontmatter.postNumber
    )
    createPage({
      path: node.node.frontmatter.path,
      component: path.resolve(`src/templates/post.js`),
      previous: previous,
      context: {
        path: node.node.frontmatter.path,
        previous,
        next,
      },
    })
  })
}
