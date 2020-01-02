
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
      data.allMarkdownRemark.edges.map((post, index) => (
        <>
        {index===4 && <div className="sb1-employees__cards__vacant">Deg?</div>}
        <div key={post.node.id} className={`sb1-employees__cards-item ${index===1 || index===3 || index===5? 'sb1-employees__cards-item--horizontal':''}`}>
          <div className={`sb1-employees__cards-item__image ${post.node.frontmatter.imgClass}`}></div>
          <div className="sb1-employees__cards-item__info">
            <h3 className="ffe-h5">{post.node.frontmatter.title}</h3>
            <small>
              {post.node.frontmatter.rolle}
            </small>
          </div>
        </div>
        </>
      ))
    )}
  />
)
