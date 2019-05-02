
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Job from './job'

export default () => (
  <StaticQuery
    query={graphql`
      query markdownJobs{
        allMarkdownRemark(
          filter: { fileAbsolutePath: {regex : "\/stilling/"} },
          sort: {
            fields:frontmatter___pri
          }
        ){
          totalCount
          edges{
            node{
              frontmatter{
                path
                title
                description
                pri
              }
            }
          }
        }
      }
    `}

    render={data => (
      <div>
        <h3 className="ffe-h3">{data.allMarkdownRemark.totalCount} ledige stillinger - vil du være med på laget?</h3>
        <div className="sb1-joblist">
          { data.allMarkdownRemark.edges.map(post => (
            <Job id={post.node.id} path={post.node.frontmatter.path} title={post.node.frontmatter.title} desc={post.node.frontmatter.description}/>
            ))}
        </div>
      </div>
    )}
  />
)
