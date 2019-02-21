import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (

    <StaticQuery
      query={graphql`
        query hrQuery{
          allHRmanagerJob(
            limit: 25,
            sort:{
              fields:LastUpdated,
              order:DESC
            }
            ) {
            edges {
              node {
                Id
                Name
                ShortDescription
                AdvertisementUrl
                LastUpdated
                Created
              }
            }
          }
        }
      `}
      render={
        data => (
          data.allHRmanagerJob.edges.map(post => {
            if (post.node.Name==='dummy'){
              return <div>ingen ledige stillinger</div>
            }else{
              return (
                <div key={post.node.Id}>
                  <a href={post.node.AdvertisementUrl} target="_blank" rel="noopener noreferrer">{post.node.Name}</a>
                </div>
              )
            }
          }
        )
      )}
    />

)