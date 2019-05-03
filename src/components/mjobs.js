
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { TextCard } from '@sb1/ffe-cards-react'; 

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
              <div className="sb1-joblist__item">
                <TextCard element="a" className="sb1-joblist__item-content" key={post.node.id} href={post.node.frontmatter.path}>
                {({ Title, Text }) => (
                  <React.Fragment>
                    <Title>{post.node.frontmatter.title}</Title>
                    <Text>{post.node.frontmatter.description}</Text>
                  </React.Fragment>
                )}
                </TextCard>
              </div>   
            ))}
        </div>
      </div>
    )}
  />
)
