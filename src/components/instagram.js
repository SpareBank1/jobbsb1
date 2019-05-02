import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Instagallery from './instagallery'

const Instagram = ({ children }) => (
  <StaticQuery
    query={graphql`
    {
      allInstaNode(limit: 12, sort: {fields: timestamp, order: DESC}) {
        edges {
          node {
            id
            likes
            comments
            original
            timestamp
            caption
            localFile {
              childImageSharp {
                fixed(width: 640, height: 640) {
                  src
                }
              }
            }
          }
        }
      }
    }
    `}
    render={data => (
      <>
          <Instagallery posts={data.allInstaNode}/>
      </>
    )}
  />
)

Instagram.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Instagram
