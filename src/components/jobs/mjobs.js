
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Job from './job'

export default ({ hrData }) => (
  <StaticQuery
    query={graphql`
      query markdownJobs{
        allMarkdownRemark(
          filter: { fileAbsolutePath: {regex : "\/openings/"} },
          sort: { fields: [frontmatter___date], order: ASC }
        ){
          totalCount
          edges{
            node{
              frontmatter{
                path
                title
                description
              }
            }
          }
        }
      }
    `
  }

  render={data => (
    <div className="sb1-joblist">
      <h3 className="ffe-h3">Ledige stillinger - vil du være med på laget?</h3>
      <div className="sb1-joblist__list">

        { hrData.map(post => (
          <Job id={post.node.id} path={post.node.AdvertisementUrl} title={post.node.Name} desc={post.node.ShortDescription} target="_blank"/>
        ))}

        {data.allMarkdownRemark.totalCount>0 && data.allMarkdownRemark.edges.map(post => (
          <Job id={post.node.id} path={post.node.frontmatter.path} title={post.node.frontmatter.title} desc={post.node.frontmatter.description} target="_top"/>
        ))}

      </div>
    </div>
  )}
/>
)
