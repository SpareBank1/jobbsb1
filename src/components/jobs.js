import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Mjobs from "./mjobs";
import Job from './job'

export default () => (
<div>
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

      render={data => {
        if(data.allHRmanagerJob.edges[0].node.Name==="dummy"){
          return (<Mjobs />)
        }else{
          return (
            <div className="sb1-joblist">
              <h3 className="ffe-h3">{data.allHRmanagerJob.totalCount} ledige stillinger - vil du være med på laget?</h3>
              <div className="sb1-joblist__list">
                { data.allHRmanagerJob.edges.map(post => (
                  <Job id={post.node.id} path={post.node.AdvertisementUrl} title={post.node.Name} desc={post.node.ShortDescription}/>
                  
                ))}
              </div>
            </div>
          )
        }
      } }
    />
  </div>
)
