import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ShortcutButton } from '@sb1/ffe-buttons-react';
import Mjobs from "./mjobs";


export default () => (
<div className="sb1-joblist">
    <StaticQuery
      query={graphql`
        query hrQuery{
          allHRmanagerJob(
            limit: 5,
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
              return (
                <Mjobs />
              )
            }else{
              return (
                <div key={post.node.Id} className="sb1-joblist__opening">
                  <ShortcutButton 
                    element="a" 
                    className="sb1-joblist__link"
                    href={post.node.AdvertisementUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >{post.node.Name}</ShortcutButton>
                </div>
              )
            }
          }
        )
      )}
    />
    </div>
)