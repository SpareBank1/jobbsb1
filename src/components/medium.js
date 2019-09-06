// import React from 'react'
// import PropTypes from 'prop-types'
// import { StaticQuery, graphql } from 'gatsby'

// import Mediumarticles from '../components/mediumarticles'

// const Medium = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//     query {
//       allMediumPost(limit: 12, sort: { fields: [createdAt], order: DESC }) {
//         edges {
//           node {
//             id
//             title
//             uniqueSlug
//             virtuals {
//               subtitle
//               previewImage {
//                 imageId
//               }
//             }
//             author {
//               name
//             }
//           }
//         }
//       }
//     }
//     `}
//     render={data => (
//       <>
//           <Mediumarticles posts={data.allMediumPost}/>
//       </>
//     )}
//   />
// )

// Medium.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Medium
