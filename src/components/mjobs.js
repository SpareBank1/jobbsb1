
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query markdownJobs{
        allMarkdownRemark(
          filter: { fileAbsolutePath: {regex : "\/stilling/"} }
        ){
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
    `}
    render={data => (
      data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id} className="sb1-joblist--item">
          <h4 className="ffe-h4"><Link to={post.node.frontmatter.path} className="ffe-link-text">{post.node.frontmatter.title}</Link></h4>
          <p>{post.node.frontmatter.description}</p>
        </div>
        
      ))
    )}
  />
)
