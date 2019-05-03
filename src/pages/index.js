import React from 'react'
import { Link, graphql } from 'gatsby'
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Instagram from '../components/instagram';
import Medium from '../components/medium';
import Jobs from '../components/jobs'
// import Img from "gatsby-image"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Vi søker nye medarbeidere" keywords={[`sparebank 1`, `utvikling`, `react`, `frontend`, `backend`, `design`, `UX`, `IxD`]} />

    <Grid>
        <GridRow>
            <GridCol center={true}>
                <h1 className="ffe-h1">Vi søker nye medarbeidere – vil du være med på laget?</h1>
            </GridCol>
        </GridRow>
    </Grid>

    <Grid>
        <GridRow topPadding={ true }>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 3 }} center={true}>
                <Link className="sb1-frontpage-link" to="/fagdag/">
                    <div className="sb1-frontpage-link__circle"></div>
                    <h3 className="ffe-h3">Fagdag</h3>
                    <p className="ffe-small-text">Individuell faglig utvikling og felles kompetanseheving.</p>
                </Link>
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 3 }} center={true}>
                <Link className="sb1-frontpage-link" to="/fagforum/">
                    <div className="sb1-frontpage-link__circle"></div>
                    <h3 className="ffe-h3">Fagforum</h3>
                    <p className="ffe-small-text">Arena for kompetansedeling og erfaringsutveksling.</p>
                </Link>
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 3 }} center={true}>
                <Link className="sb1-frontpage-link" to="/hackathon/">
                    <div className="sb1-frontpage-link__circle"></div>
                    <h3 className="ffe-h3">Hackathon</h3>
                    <p className="ffe-small-text">Dedikert tid til å jobbe med ideer vi tror på og brenner for.</p>
                </Link>
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 3 }} center={true}>
                <Link className="sb1-frontpage-link" to="/designsystem/">
                    <div className="sb1-frontpage-link__circle"></div>
                    <h3 className="ffe-h3">Designsystem</h3>
                    <p className="ffe-small-text">Felles språk og delte ressurser for design og utvikling.</p>
                </Link>
            </GridCol>
        </GridRow>
    </Grid>

    <Grid>
        <GridRow topPadding={ true } background="blue-pale">
            <GridCol sm={{ cols: 12 }} md={{ cols: 12 }} lg={{ cols: 10, offset: 1 }} center={true}>
                <Jobs />
            </GridCol>
        </GridRow>
    </Grid>

    <Grid>
        <GridRow>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 5, offset: 1 }} center={true}>
                <div className="sb1-video">
                    <iframe width="100%" height="315" title="Utvikler i SpareBank 1" src="https://www.youtube.com/embed/Zs3quTUlzj8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 5 }} center={true}>
                <div className="sb1-video">
                    <iframe width="100%" height="315" title="Teamleder i SpareBank 1" src="https://www.youtube.com/embed/afoKcCZuRes" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </GridCol>
        </GridRow>
    </Grid>

    <Grid>
        <GridRow topPadding={ true } background="grey-warm">
            <GridCol sm={{ cols: 12 }} md={{ cols: 10, offset: 1 }} center={true}>
                <Medium />
            </GridCol>
        </GridRow>
    </Grid>

    <Grid topPadding={ false }>
        <GridRow topPadding={ true } background="grey-warm">
            <GridCol sm={{ cols: 12 }} md={{ cols: 10, offset: 1 }} center={true}>
                <Instagram />
                </GridCol>
        </GridRow>
    </Grid>

  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    hackathon: file(relativePath: { eq: "Hackathon-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
