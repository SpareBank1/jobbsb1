import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Mjobs from "./mjobs";
import { TextCard } from '@sb1/ffe-cards-react'; 

export default () => (
<div className="sb1-joblist">
    <StaticQuery
      query={graphql`
        query hrQuery{
          allHRmanagerJob(
            limit: 20,
            sort:{
              fields:Created,
              order:DESC
            }
            ) {
              totalCount
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
              
                <div className="sb1-joblist__item">
                  <TextCard element="a" className="sb1-joblist__item-content" key={post.node.id} href={post.node.AdvertisementUrl}>
                  {({ Title, Text }) => (
                    <React.Fragment>
                      <Title>{post.node.Name}</Title>
                      <Text>{post.node.ShortDescription}</Text>
                    </React.Fragment>
                  )}
                  </TextCard>
                </div>   
                      
              )
            }
          }
        )
      )}
    />
    </div>
)