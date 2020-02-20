/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`src/templates/pageTemplate.js`);
  const genericTemplate = path.resolve(`src/templates/genericTemplate.js`);
  const employeeTemplate = path.resolve(`src/templates/employeeTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              pagetype
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.pagetype === 'employee') {
        createPage({
          path: node.frontmatter.path,
          component: employeeTemplate,
          context: {}, // additional data can be passed via context
        })
      } else if (node.frontmatter.pagetype === 'page') {
        createPage({
          path: node.frontmatter.path,
          component: pageTemplate,
          context: {}, // additional data can be passed via context
        })
      } else  {
        createPage({
          path: node.frontmatter.path,
          component: genericTemplate,
          context: {}, // additional data can be passed via context
        })
      }
    })
  })
}
