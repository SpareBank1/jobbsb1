import React from 'react'
import { Link } from 'gatsby'
import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Instagram from '../components/instagram';
import Medium from '../components/medium';
import Jobs from '../components/jobs'

var divStyle = {
    backgroundColor: '#ccc',
    height: '200px',
    width: '200px',
    borderRadius: '50%',
    margin: '10px'
  };

const IndexPage = () => (
  <Layout>
    <SEO title="Vi søker nye medarbeidere" keywords={[`gatsby`, `application`, `react`]} />

    <InlineGrid>
        <GridRow>
            <GridCol center={true}>
                <p>Vi søker nye medarbeidere – vil du være med på laget?</p>
            </GridCol>
        </GridRow>
        <GridRow>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 4, offset: 2 }} center={true}>
                <div style={divStyle}></div>
                Unni utvikler
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 4 }} center={true}>
                <div style={divStyle}></div>
                Dennis designer
            </GridCol>
        </GridRow>
        <GridRow>
            <GridCol sm={{ cols: 12 }} lg={{ cols: 8, offset: 2 }} center={true}>
                <p>Unni og Dennis forteller om hvordan det er å jobbe i Banksamarbeidet. Det gjøres ved å stille spørsmål på plakater a la rekrutteringsideen til UX.</p>
            </GridCol>
        </GridRow>
        <GridRow>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 4, offset: 2 }} center={true}>
                <div style={divStyle}></div>
                <h3 className="ffe-h3">Fagdager</h3>
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 4 }} center={true}>
                <div style={divStyle}></div>
                <h3 className="ffe-h3">Fagforum</h3>
            </GridCol>
        </GridRow>
        <GridRow>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 4, offset: 2 }} center={true}>
                <div style={divStyle}></div>
                <h3 className="ffe-h3">Hackathon</h3>
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 4 }} center={true}>
                <div style={divStyle}></div>
                <h3 className="ffe-h3">Designsystem</h3>
            </GridCol>
        </GridRow>
        <GridRow>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 4, offset: 2 }} center={true}>
                <h3 className="ffe-h3">Siste fra Medium</h3>
                <div>
                    <Medium />
                </div>
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 4 }} center={true}>
                <h3 className="ffe-h3">Siste fra Instagram</h3>
                <div>
                    <Instagram />
                </div>
            </GridCol>
        </GridRow>
        <GridRow>
            <GridCol className="sb1-joblist-box" sm={{ cols: 12 }} md={{ cols: 12 }} lg={{ cols: 8, offset:2 }} center={true} background="green-mint">
                <div className="sb1-joblist">
                    <h3 className="ffe-h3">Ledige stillinger</h3>
                    <Jobs />
                </div>
            </GridCol>
        </GridRow>
    </InlineGrid>
    
    
    <Link to="/ansatte/">Les om våre ansatte</Link><br />

  </Layout>
)

export default IndexPage
