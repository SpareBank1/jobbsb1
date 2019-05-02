
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import { TextCard } from '@sb1/ffe-cards-react';

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
        <TextCard element="a" className="sb1-joblist__item" key={post.node.id} href={post.node.frontmatter.path}>
          <h4 className="ffe-h4">{post.node.frontmatter.title}</h4>
          <p>{post.node.frontmatter.description}</p>
        </TextCard>        
      ))
    )}
  />
)
