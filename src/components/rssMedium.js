import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import RssMediumarticles from '../components/rssMediumarticles'

const rssMedium = ({ children }) => (
  <StaticQuery
    query={graphql`
    query {
        allFeedsb1Digital {
          edges {
            node {
              title
              link
              content {
                encoded
              }
              creator
            }
          }
        }
      }
    `}
    render={data => (
      <>
          <RssMediumarticles posts={data.allFeedsb1Digital}/>
      </>
    )}
  />
)
rssMedium.propTypes = {
  children: PropTypes.node.isRequired,
}
export default rssMedium
