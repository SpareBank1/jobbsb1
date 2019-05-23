import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Mjobs from "./mjobs";

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
          return (<Mjobs numHRopenings={0}  hrData={[]}/>)
        }else{
          const numOpenings = data.allHRmanagerJob.totalCount > 20 ? 20 : data.allHRmanagerJob.totalCount;
          return (
            <Mjobs numHRopenings={numOpenings} hrData={data.allHRmanagerJob.edges}/>
          )
        }
      } 
    }
    />
  
)
