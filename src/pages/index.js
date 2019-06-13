import React from 'react'
import { Link, graphql } from 'gatsby'
import { Grid, GridRow, GridCol, InlineGrid } from '@sb1/ffe-grid-react'
import Layout from '../components/layout'
import Header from '../components/header'
import SEO from '../components/seo'
import Instagram from '../components/instagram';
import Medium from '../components/medium';
import Jobs from '../components/jobs/jobs'
// import Img from "gatsby-image"

const IndexPage = (props) => (
  <Layout>
    <Header/>
    <SEO title="Vi søker nye medarbeidere" keywords={[`sparebank 1`, `utvikling`, `react`, `frontend`, `backend`, `design`, `UX`, `IxD`]} />

    <div className="sb1-hero">
        <div className="sb1-hero__inner">
            <div className="sb1-hero__preamble">
                <h1 className="ffe-h2">Et spennende sted å jobbe</h1>
                <p className="ffe-body-text">Vi er de 14 SpareBank 1-bankenes felles utviklingsselskap. Vår oppgave er å skape de aller beste løsningene og brukeropplevelsene i bransjen – fordi hverdagsøkonomien er viktig for folk. Vi lykkes ved å la kompetanse, læring og frihet definere oss, og fordi vi jobber kompromissløst data- og kundedrevet.</p>
            </div>
        </div>
    </div>


    <Grid>
        <GridRow topPadding={ true }>
            <GridCol sm={{ cols: 12 }} md={{ cols: 10, offset: 1 }}>
                <InlineGrid>
                    <GridRow>
                        <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 3 }}>
                            <Link className="sb1-frontpage-link" to="/fagdag/">
                                <div className="sb1-frontpage-link__circle sb1-frontpage-link__circle--fagdag"></div>
                                <h3 className="ffe-h3">Fagdag</h3>
                                <p className="ffe-small-text">Individuell faglig utvikling og felles kompetanseheving.</p>
                            </Link>
                        </GridCol>
                        <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 3 }}>
                            <Link className="sb1-frontpage-link" to="/fagforum/">
                                <div className="sb1-frontpage-link__circle sb1-frontpage-link__circle--fagforum"></div>
                                <h3 className="ffe-h3">Fagforum</h3>
                                <p className="ffe-small-text">Arena for kompetansedeling og erfaringsutveksling.</p>
                            </Link>
                        </GridCol>
                        <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 3 }}>
                            <Link className="sb1-frontpage-link" to="/hackathon/">
                                <div className="sb1-frontpage-link__circle sb1-frontpage-link__circle--hackathon"></div>
                                <h3 className="ffe-h3">Hackathon</h3>
                                <p className="ffe-small-text">Dedikert tid til å jobbe med ideer vi tror på og brenner for.</p>
                            </Link>
                        </GridCol>
                        <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 3 }}>
                            <Link className="sb1-frontpage-link" to="/designsystem/">
                                <div className="sb1-frontpage-link__circle sb1-frontpage-link__circle--designsystem"></div>
                                <h3 className="ffe-h3">Designsystem</h3>
                                <p className="ffe-small-text">Felles språk og delte ressurser for design og utvikling.</p>
                            </Link>
                        </GridCol>
                    </GridRow>
                </InlineGrid>
            </GridCol>
        </GridRow>
    </Grid>

    <Grid>
        <GridRow topPadding={ true } background="blue-pale">
            <GridCol sm={{ cols: 12 }} md={{ cols: 10, offset: 1 }} center={true}>
                <Jobs />
            </GridCol>
        </GridRow>
    </Grid>

    <Grid>
        <GridRow reverse={true}>
            <GridCol sm={{ cols: 12 }}>
                <div className="sb1-vids__preamble">
                    <h3 className="ffe-h3">Et godt sted å være</h3>
                    <p className="ffe-body-text">For å kunne yte på jobb, må vi trives på jobb. Våre medarbeidere får derfor stor tillit og mye ansvar, men også den støtten, veiledningen og opplæringen de trenger for å mestre og like jobben sin. Dessuten passer vi på å le sammen. Mye. Det blir nemlig veldig gode løsninger av god stemning.</p>
                </div>
            </GridCol>
        </GridRow>
        <GridRow>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 5, offset: 1 }} center={true} bottomPadding={false}>
                <div className="sb1-video">
                    <iframe width="100%" height="315" title="Utvikler i SpareBank 1" src="https://www.youtube.com/embed/Zs3quTUlzj8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 5 }} center={true} bottomPadding={false}>
                <div className="sb1-video">
                    <iframe width="100%" height="315" title="Teamleder i SpareBank 1" src="https://www.youtube.com/embed/afoKcCZuRes" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
