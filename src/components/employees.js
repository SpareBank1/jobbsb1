
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
                rolle
              }
            }
          }
        }
      }
    `}
    render={data => (
      data.allMarkdownRemark.edges.map(post => (
        <Link to={post.node.frontmatter.path} key={post.node.id} className="sb1-employee">
          <h2 className="ffe-h5 sb1-employee__heading">{post.node.frontmatter.title}</h2>
          <em className="sb1-employee__jobtitle">{post.node.frontmatter.rolle}</em>
        </Link>
        
      ))
    )}
  />
)
