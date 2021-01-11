import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Job from './job';

export default () => (
//avd: Design, Digitalbankutvikling ansatte, Arkitektur og teknologi, Fagsystemer og tjenestekjøp, Informasjonssikkerhet
    <StaticQuery
      query={graphql`
      query hrQuery {
        allHRmanagerJob(
          limit: 20, 
          sort: {fields: Created, order: DESC}, 
          filter: {Department: {Id: {in: [21149,21110,21136,21139,21102]}}}) 
          {
          totalCount
          edges {
            node {
              Id
              Name
              AdvertisementUrl
              Created
              Department {
                Id
                Name
              }
            }
          }
        }
      }
      `}

      render={data => {
        if (data.allHRmanagerJob.edges.length > 0) {
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
        } else {
          return(
            <h3 className="ffe-h3">Ingen ledige stillinger for øyeblikket</h3>
          )
        }
      } 
    }
    />
  
)
