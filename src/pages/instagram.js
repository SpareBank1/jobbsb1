import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import Gallery from '../components/gallery'
export default ({data}) => {

    return (
        <Layout>
            <Gallery posts={data.allInstaNode}/>
        </Layout>
    )
}

export const query = graphql`
query {
  allInstaNode {
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
            fixed(width: 240, height: 240) {
              src
            }
          }
        }
        thumbnails {
          src
          config_width
          config_height
        }
        dimensions {
          height
          width
        }
      }
    }
  }
}
`