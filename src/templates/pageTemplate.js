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

      <div className="sb1-page">
            <Grid className="sb1-page__header">
                <GridRow>
                <GridCol sm={{ cols: 12 }}>
                    <div className="hero">
                        <img src={frontmatter.image.childImageSharp.fluid.originalImg} alt={frontmatter.title} className="hero-image" />
                        <h1 className="ffe-h1 hero-circle">{frontmatter.title}</h1>
                    </div>
                </GridCol>
                </GridRow>

                <GridRow>
                <GridCol sm={{ cols: 12 }} md={{ cols: 8, offset: 2 }} className="sb1-page__teaser">
                    <h2 className="ffe-h2">{frontmatter.subtitle}</h2>
                    <div className="ffe-lead-paragraph">{frontmatter.description}</div>
                </GridCol>
                </GridRow>
            </Grid>

            <Grid>
                <GridRow>
                <GridCol sm={{ cols: 12 }}>
                  <div
                    className="content sb1-markdown"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
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
        subtitle
        description
        image {
          childImageSharp {
            fluid {
              originalImg
            }
          }
        }
      }
    }
  }
`