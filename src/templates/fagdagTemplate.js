import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Header from '../components/header'
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react'
import SEO from '../components/seo'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark

  const [type, setType] = useState(null);
  const [showUtvikler, setShowUtvikler] = useState(false);
  const [showDesigner, setshowDesigner] = useState(false);

  const showText = (type) => {
    setType(type);
    if (type==='utviklere'){
      setShowUtvikler(true);
      setshowDesigner(false);
    }else{
      setShowUtvikler(false);
      setshowDesigner(true);
    }
  };

  
  return (

    <Layout>
      <Header/>
      <SEO title={frontmatter.title} keywords={[`sparebank 1`, `karriere`, `stilling`, `utvikling`, `design`]} />

      <div className="sb1-fagdag-page">
        <Grid className="sb1-fagdag-page__header">
          <GridRow>
            <GridCol sm={{ cols: 12 }}>
              <h1 className="ffe-h1">{frontmatter.title}</h1>
              <img src={frontmatter.image.childImageSharp.fixed.src} alt={frontmatter.title} />
            </GridCol>
          </GridRow>

          <GridRow>
            <GridCol sm={{ cols: 12 }} md={{ cols: 8, offset: 2 }}>
              <h2 className="ffe-h2">{frontmatter.subtitle}</h2>
              <div className="ffe-lead-paragraph">{frontmatter.description}</div>
              Er du 
              <button onClick={() => showText('utviklere')}>utvikler</button> eller 
              <button onClick={() => showText('designere')}>designer</button>?
            </GridCol>
          </GridRow>
        </Grid>

        <Grid>
          <GridRow>
            <GridCol sm={{ cols: 12 }} md={{ cols: 8, offset: 2 }}>
              <p>Hver torsdag møtes nemlig <div className="fyll-inn">{type}</div> til en fagdag. Da ...</p>
    
              {showUtvikler && <p className="text-utvikler">... deler vi oss opp i grupper etter ønsker og behov. Noen går sammen i kollokviegrupper og tar kurs, for eksempel i maskinlæring eller Kotlin, og andre programmere andre gøyale produkter som gjør jobbhverdagen artigere.</p>}
      
              {showDesigner && <p className="text-designer">... fasiliterer vi workshops der vi diskuterer faget, løfter blikket og løser problemer sammen. Vi utforsker forskjellige metoder og tilnærminger som kan hjelpe oss i designprosessen.</p>}
          
              {showUtvikler && <>
                <p className="text-utvikler"><strong>Faglig utvikling og sosialt samvær hånd i hånd</strong></p>
                <p className="text-utvikler">Faget vårt er i konstant utvikling, og nye verktøy, programmer og språk dukker opp hver dag. Fagdagen gir oss en perfekt mulighet til å lære oss nye ting som, enten av interesse eller for å kunne tas i bruk i jobben.</p>
                </>
              }
      
              {showDesigner && <>
                <p className="text-designer"><strong>Faglig utvikling og sosialt samvær hånd i hånd</strong></p>
                <p className="text-designer">I designfaget står brukeren i alltid i sentrum. Samtidig er det også mange trender innenfor faget som vi er avhengige av å følge med på.</p>
                </>
              }
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
            fixed(width: 640, height: 640) {
              src
            }
          }
        }
      }
    }
  }
`