import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Header from '../components/header'
import SEO from '../components/seo'
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react'
import Blob from '../components/blob/blob'
import {KonvoluttIkon, SnakkebobleIkon} from '@sb1/ffe-icons-react'


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Header/>
        <SEO title={frontmatter.title} keywords={[`sparebank 1`, `karriere`, `stilling`, `utvikling`, `design`]} />
        
        <Grid className="sb1-markdown-employee">
          <GridRow className="sb1-markdown-employee__layout">
            <GridCol sm={{ cols: 12 }} md={{ cols: 6, offset:1  }} lg={{ cols: 6, offset:1 }}>
              <div className="info-header">
                <div className="info-header__info">
                  <h1 className="ffe-h2">{frontmatter.title}</h1>
                  <p>{frontmatter.rolle}</p>
                </div>
                <div className="info-header__contact">
                  <div className="btn-wrapper">
                    <button className="btn-circle"><KonvoluttIkon /></button>Mail meg
                  </div>
                  <div className="btn-wrapper">
                    <button className="btn-circle"><SnakkebobleIkon /></button>Chat
                  </div>
                </div>
              </div>
              <div
                className="info-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 4 }} lg={{ cols: 4 }}>
              {frontmatter.image && <img src={frontmatter.image.childImageSharp.fixed.src} alt={`Bilde av ${frontmatter.title} som smiler så pent hen kan`} className="sb1-markdown-employee__image" />}
            </GridCol>
          </GridRow>
          <Blob color={'sand'} />
        </Grid>

        <div className="sb1-markdown-employee__more">
          <Grid className="sb1-markdown-employee">
            <GridRow className="sb1-markdown-employee__layout">
              <GridCol sm={{ cols: 12 }} md={{ cols: 10, offset:1 }}>
                <h2 className="ffe-h2">Flere ansatte</h2>
                <p>Ansatt</p><p>Ansatt</p><p>Ansatt</p><p>Ansatt</p><p>Ansatt</p><p>Ansatt</p><p>Ansatt</p><p>Ansatt</p><p>Ansatt</p><p>Ansatt</p>
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
        path
        date
        title
        rolle
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