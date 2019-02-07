import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'


const EmplyeesPage = ({ data }) => (
    <Layout>
        <SEO title="Sparebank 1 ansatte" />
      <h1>Våre ansatte</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3 className="ffe-h3">{post.node.frontmatter.title}</h3>
          <small>
            {post.node.frontmatter.rolle}
          </small>
          <br />    
          <Link to={post.node.frontmatter.path} className="ffe-link-text">Les om {post.node.frontmatter.title}  </Link>
          <hr />
        </div>
      ))}
      <br />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )

  export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/employees/"} },
      sort: {fields: [frontmatter___title], order: DESC},
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
  `

export default EmplyeesPage
