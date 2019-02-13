import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
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
  allInstaNode
  (
    limit:6,
    sort:{
    fields:timestamp,
    order:DESC
  }) {
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
`