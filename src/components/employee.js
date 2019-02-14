
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query employeeQuery{
        allMarkdownRemark(
          limit: 5,
          filter: { fileAbsolutePath: {regex : "\/employees/"} },
          sort: {fields: [frontmatter___date], order: DESC},
        ){
          edges{
            node{
              frontmatter{
                path
                title
                date
                rolle
              }
            }
          }
        }
      }
    `}
    render={data => (
      data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3 className="ffe-h3">{post.node.frontmatter.title}</h3>
          <small>
            Stilling: {post.node.frontmatter.rolle}
          </small>
          <br />    
          <Link to={post.node.frontmatter.path} className="ffe-link-text">Les om {post.node.frontmatter.title}  </Link>
          <hr/>
        </div>
        
      ))
    )}
  />
)
