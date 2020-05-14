/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const path = require('path');

// exports.createPages = ({boundActionCreators, graphql}) => {
//     const {createPage} = boundActionCreators

//     const pageTemplate = path.resolve('./src/pages/ClientPage.js')

//     return graphql(`
// {
//     allSanityClient {
//         edges {
//           node {
//             name
//             image1 {
//               asset {
//                 url
//               }
//             }
//             image2 {
//               asset {
//                 url
//               }
//             }
//             image3 {
//               asset {
//                 url
//               }
//             }
//             slug {
//               current
//             }
//             _rawBody
//           }
//         }
//       }
// }



// `).then(res => {
//         if (res.errors) {
//             return Promise.reject(res.errors)
//         }
//         console.log(JSON.stringify(res, null, 4))
//         res
//             .data
//             .allSanitClient
//             .edges
//             .forEach(({node}) => {
//                 createPage({path: node.name, component: pageTemplate})
//             })
//     })
// }

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/pages/ClientPage.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query loadPagesQuery  {
      allSanityClient {
        edges {
          node {
              id
            name
              slug{
                  current
              }

          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allSanityClient.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `project/${edge.node.slug.current}`,
        component: blogPostTemplate,
        context: {
          pagePath: edge.node.slug.current
        },
      })
    })
  })
}