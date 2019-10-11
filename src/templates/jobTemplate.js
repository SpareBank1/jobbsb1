import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Header from '../components/header'
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react'
import { ActionButton } from '@sb1/ffe-buttons-react';
import SEO from '../components/seo'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Header opening={true} />
      <SEO title={frontmatter.title} keywords={[`sparebank 1`, `karriere`, `stilling`, `utvikling`, `design`]} />

      <div className="sb1-hero sb1-hero--opening">
        <div className="sb1-hero__inner">
        </div>
      </div>

      <Grid className="sb1-opening__header">
        <GridRow>
          <GridCol sm={{ cols: 12 }} md={{ cols: 10, offset: 1 }} lg={{ cols: 8, offset: 2 }}>
            <h1 className="ffe-h1">Banan</h1>
          </GridCol>

        </GridRow>
      </Grid>

      <div className="sb1-markdown">
        <Grid>
          <GridRow background="grey-warm" topPadding={true}>
            <GridCol sm={{ cols: 12 }} md={{ cols: 10, offset: 1 }}>
              innhold
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
        applicationFormUrl
        closingDate
      }
    }
  }
`