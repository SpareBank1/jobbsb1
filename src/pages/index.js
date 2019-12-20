import React from 'react'
import { Link, graphql } from 'gatsby'
import { Grid, GridRow, GridCol, InlineGrid } from '@sb1/ffe-grid-react'
import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';
import Layout from '../components/layout'
import Header from '../components/header'
import SEO from '../components/seo'
import Instagram from '../components/instagram';
import RssMedium from '../components/rssMedium';
import Jobs from '../components/jobs/jobs'
// import Img from "gatsby-image"

const IndexPage = (props) => (
  <Layout>
    <Header/>
    <SEO title="Vi søker nye medarbeidere" keywords={[`sparebank 1`, `utvikling`, `react`, `frontend`, `backend`, `design`, `UX`, `IxD`]} />

    <svg class="blob" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(400,100)">
            <path d="M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z" fill="#005aa4" />
        </g>
    </svg>

    <div className="sb1-hero">
        <div className="sb1-hero__inner">
            <div className="sb1-hero__title"> 
                <h1>SpareBank 1 Utvikling</h1>
            </div>
            <div className="sb1-hero__preamble">
                <p>Vi er de 14 SpareBank 1-bankenes felles utviklingsselskap. Vår oppgave er å skape de aller beste løsningene og brukeropplevelsene i bransjen – fordi hverdagsøkonomien er viktig for folk. Vi lykkes ved å la kompetanse, læring og frihet definere oss, og fordi vi jobber kompromissløst data- og kundedrevet.</p>
                <TabButtonGroup>
                    <TabButton>Ansatte</TabButton>
                    <TabButton>Jobber</TabButton>
                    <TabButton>Faglig</TabButton>
                </TabButtonGroup>
            </div>
            <div className="sb1-hero__imagewrap">
                
            </div>
        </div>
    </div>

    <Grid className="sb1-employees">
        <GridRow>
            <GridCol sm={{ cols: 12 }} md={{ cols: 10, offset: 1 }}>
                <InlineGrid>
                    <GridRow>
                        <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 3 }}>
                           ansatte
                        </GridCol>
                    </GridRow>
                </InlineGrid>
            </GridCol>
        </GridRow>
    </Grid>

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
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 5, offset: 1 }} center={true}>
                <div className="sb1-video">
                    <iframe width="100%" height="315" title="Utvikler i SpareBank 1" src="https://www.youtube.com/embed/Zs3quTUlzj8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 5 }} center={true}>
                <div className="sb1-video">
                    <iframe width="100%" height="315" title="Teamleder i SpareBank 1" src="https://www.youtube.com/embed/afoKcCZuRes" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </GridCol>
        </GridRow>
    </Grid>

    <Grid>
        <GridRow topPadding={ true } background="grey-warm">
            <GridCol sm={{ cols: 12 }} md={{ cols: 10, offset: 1 }} center={true}>
                <RssMedium />
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

    <Grid topPadding={ false }>
      <GridRow topPadding={ true }>
          <GridCol sm={{ cols: 12 }} md={{ cols: 10, offset: 1 }}>
              <InlineGrid>
                <GridRow>
                  <GridCol sm={{ cols: 12 }} md={{ cols: 10, offset: 1 }}  center={true}>
                    <h3 className="ffe-h3">Nysgjerrig på miljøet vårt? Ikke nøl med å kontakte oss!</h3>
                  </GridCol>
                </GridRow>
                  <GridRow>
                      <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 3 }}>
                          <a className="sb1-frontpage-link" href="mailto:kristoffer.berg@sparebank1.no">
                              <div className="sb1-frontpage-link__circle sb1-frontpage-link__circle--kontakt-kristoffer"></div>
                              <h4 className="ffe-h5">Kristoffer Berg</h4>
                              <p className="ffe-small-text">Utviklingsleder</p>
                          </a>
                      </GridCol>
                      <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 3 }}>
                          <a className="sb1-frontpage-link" href="mailto:stian.conradsen@sparebank1.no">
                              <div className="sb1-frontpage-link__circle sb1-frontpage-link__circle--kontakt-stian"></div>
                              <h4 className="ffe-h5">Stian Conradsen</h4>
                              <p className="ffe-small-text">Utvikler</p>
                          </a>
                      </GridCol>
                      <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 3 }}>
                          <a className="sb1-frontpage-link" href="mailto:siri.corneliussen@sparebank1.no">
                              <div className="sb1-frontpage-link__circle sb1-frontpage-link__circle--kontakt-siri"></div>
                              <h4 className="ffe-h5">Siri Corneliussen</h4>
                              <p className="ffe-small-text">Fagleder, interaksjonsdesign</p>
                          </a>
                      </GridCol>
                      <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 3 }}>
                          <a className="sb1-frontpage-link" href="mailto:heidi.stolen@sparebank1.no">
                              <div className="sb1-frontpage-link__circle sb1-frontpage-link__circle--kontakt-heidi"></div>
                              <h4 className="ffe-h5">Heidi Lyngvær Stolen</h4>
                              <p className="ffe-small-text">Fagleder, grafisk design</p>
                          </a>
                      </GridCol>
                  </GridRow>
              </InlineGrid>
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
