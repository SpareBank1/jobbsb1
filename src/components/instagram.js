import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Instagallery from './instagallery'

const Instagram = () => {
  return (
  <>
    <h3 class="ffe-h4">SpareBank 1 Utvikling på Instagram 
      <span class="sb1-smaller-link"><a href="https://www.instagram.com/sparebank1design/" class="ffe-link-text ffe-link-text--no-underline" target="_blank" rel="noopener noreferrer">@sparebank1design</a></span>
      <span class="sb1-smaller-link"><a href="https://www.instagram.com/sparebank1utvikler/" class="ffe-link-text ffe-link-text--no-underline" target="_blank" rel="noopener noreferrer">@sparebank1utvikler</a></span>
    </h3>
  </>
  )
}


// const Instagram = ({ children }) => (
  // <StaticQuery
  //   query={graphql`
  //   {
  //     allInstaNode(limit: 12, sort: {fields: timestamp, order: DESC}) {
  //       edges {
  //         node {
  //           id
  //           likes
  //           comments
  //           original
  //           timestamp
  //           caption
  //           localFile {
  //             childImageSharp {
  //               fixed(width: 640, height: 640) {
  //                 src
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   `}
  //   render={data => (
  //     <>
  //         <Instagallery posts={data.allInstaNode}/>
  //     </>
  //   )}
  // />
// )

// Instagram.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Instagram
