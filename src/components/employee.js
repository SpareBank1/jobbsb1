
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query employeeQuery{
        allMarkdownRemark(
            limit: 15, 
            filter: {fileAbsolutePath: {regex: "/employees/"}}
          ) {
          edges {
            node {
              id
              frontmatter {
                title
                rolle
                path
                imgClass
                image {
                  childImageSharp {
                    fixed(width: 640, height: 640) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      data.allMarkdownRemark.edges
        .map((post, index) => (
          <>
          {index===4 && <article className="sb1-employees__cards__vacant">Deg?</article>}
          <article key={post.node.id} id={index} className={`sb1-employees__cards-item ${index===1 || index===3 || index===5? 'sb1-employees__cards-item--horizontal':''}`}>
            <div className={`sb1-employees__cards-item__image`}>
            {post.node.frontmatter.image && <img src={post.node.frontmatter.image.childImageSharp.fixed.src} alt={post.node.frontmatter.title} />}
            </div>
            <div className="sb1-employees__cards-item__info">
              <h3 className="ffe-h5"><a href={post.node.frontmatter.path}>{post.node.frontmatter.title}</a></h3>
              <small>
                {post.node.frontmatter.rolle}
              </small>
            </div>
          </article>
          </>
        )
        
      )
    )}
  />
)
