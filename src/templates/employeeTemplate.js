import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Header from '../components/header'
import SEO from '../components/seo'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Header/>
        <SEO title={frontmatter.title} keywords={[`sparebank 1`, `karriere`, `stilling`, `utvikling`, `design`]} />
        <div className="container">
        <div className="post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.rolle}</h2>
            <div
            className="content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        rolle
      }
    }
  }
`