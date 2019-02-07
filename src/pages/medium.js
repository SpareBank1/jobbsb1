import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import Articles from '../components/articles'
export default ({data}) => {

    return (
        <Layout>
            <Articles posts={data.allMediumPost}/>
        </Layout>
    )
}

export const query = graphql`
query {
  allMediumPost(sort: { fields: [createdAt], order: DESC }) {
    edges {
      node {
        id
        title
        virtuals {
          subtitle
          previewImage {
            imageId
          }
        }
        author {
          name
        }
      }
    }
  }
}
`