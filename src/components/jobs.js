import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ShortcutButton } from '@sb1/ffe-buttons-react';


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
                <ShortcutButton 
                  element="a"
                  className="sb1-joblist__link"
                  href="https://www.webcruiter.no/WcMain/AdvertViewPublic.aspx?oppdragsnr=4004904858&Company_Id=3670262172&Culture_Id=NB-NO&cols=3,5,7&orderby=5&listtype=1&urltarget=_blank" 
                  target="_blank"
                  rel="noopener noreferrer"
                >Utvikler? Bli med å skape morgendagens bank</ShortcutButton>
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