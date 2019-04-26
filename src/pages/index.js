import React from 'react'
import { Link, graphql } from 'gatsby'
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Instagram from '../components/instagram';
import Medium from '../components/medium';
import Jobs from '../components/jobs'
import Img from "gatsby-image"

var divStyle = {
    backgroundColor: '#ccc',
    height: '200px',
    width: '200px',
    borderRadius: '50%',
    margin: '10px'
  };

const IndexPage = (props) => (
  <Layout>
    <SEO title="Vi søker nye medarbeidere" keywords={[`sparebank 1`, `utvikling`, `react`, `frontend`, `backend`, `design`, `UX`, `IxD`]} />

    <Grid>
        <GridRow>
            <GridCol center={true}>
                <h1 className="ffe-h1">Vi søker nye medarbeidere – vil du være med på laget?</h1>
            </GridCol>
        </GridRow>
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

        <GridRow topPadding={ true } background="sand">
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 5, offset: 1 }} center={true}>
                <div style={divStyle}></div>
                <h3 className="ffe-h3">
                    <Link to="/fagdag/">Fagdag</Link>
                </h3>
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 5 }} center={true}>
                <div style={divStyle}></div>
                <h3 className="ffe-h3">Fagforum</h3>
            </GridCol>
        </GridRow>
        <GridRow background="sand">
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 5, offset: 1 }} center={true}>
                <div style={divStyle}>
                    <Img fluid={props.data.hackathon.childImageSharp.fluid} />
                </div>
                <h3 className="ffe-h3">
                    <Link to="/hackathon/">Hackathon</Link>
                </h3>
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 5 }} center={true}>
                <div style={divStyle}></div>
                <h3 className="ffe-h3">
                    <Link to="/designsystem/">Designsystem</Link>
                </h3>
            </GridCol>
        </GridRow>

        <GridRow topPadding={ true }>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 5, offset: 1 }} center={true}>
                <Medium />
            </GridCol>
            <GridCol sm={{ cols: 12 }} md={{ cols: 6 }} lg={{ cols: 5 }} center={true}>
                <Instagram />
            </GridCol>
        </GridRow>
        <GridRow topPadding={ true } background="green-mint">
            <GridCol sm={{ cols: 12 }} md={{ cols: 12 }} lg={{ cols: 8, offset:2 }} center={true}>
                <h3 className="ffe-h3">Ledige stillinger</h3>
                <Jobs />
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
