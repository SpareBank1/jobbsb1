import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Job from './job';

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
        if (data.allHRmanagerJob.edges.length){
          const hrData = (data.allHRmanagerJob.edges[0].node.Name==="dummy") ? [] : data.allHRmanagerJob.edges;

          return (
            <div className="sb1-joblist">
              <h3 className="ffe-h3">Ledige stillinger - vil du være med på laget?</h3>
              <ul className="sb1-joblist__list">

                { hrData.map(post => (
                  <li>
                    <Job id={post.node.id} path={post.node.AdvertisementUrl} title={post.node.Name} desc={post.node.ShortDescription} target="_blank"/>
                  </li>
                ))}

              </ul>
            </div>
          )
        }
      } 
    }
    />
  
)
