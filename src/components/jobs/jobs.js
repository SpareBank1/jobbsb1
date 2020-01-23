import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Mjobs from './mjobs'

export default () => (

    <StaticQuery
      query={graphql`
        query hrQuery{
          allHRmanagerJob(
            limit: 20,
            sort:{
              fields:Created,
              order:DESC
            }
            filter: {
              Department: {
                Name: {regex: "/Digitalbankutvikling ansatte/"}
              }
            }
          ) {
            totalCount
            edges {
              node {
                Id
                Name
                Department {
                  Id
                  Name
                }
                AdvertisementUrl
                Created
              }
            }
          }
        }
      `}

      render={data => {
        const hrData = (data.allHRmanagerJob.edges[0].node.Name==="dummy") ? [] : data.allHRmanagerJob.edges;
        return (
          <Mjobs hrData={hrData}/>
        )
      } 
    }
    />
  
)
