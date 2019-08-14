import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Header from '../components/header'
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react'
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
      <div className="sb1-markdown-page">
        <Grid className="sb1-markdown-page__header">
          <GridRow>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 6, offset: 1 }}>
              <h1 className="ffe-h1">{frontmatter.title}</h1>
              <div className="ffe-lead-paragraph">{frontmatter.description}</div>
              </GridCol>
          </GridRow>
        </Grid>
        <Grid>
          <GridRow>
            <GridCol sm={{ cols: 12 }} md={{ cols: 8 }} lg={{ cols: 6, offset: 1 }}>
              <div
                className="content sb1-markdown"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 4 }} lg={{ cols: 4 }} end={true}>
              <img src={frontmatter.image.childImageSharp.fixed.src} alt={frontmatter.title} className="sb1-markdown-page__image" />
            </GridCol>
          </GridRow>
        </Grid>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
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
`