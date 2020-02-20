import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Header from '../components/header'
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react'
import SEO from '../components/seo'
import Dropdown from '@sb1/ffe-dropdown-react';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark

  const [type, setType] = useState(null);
  const [showUtvikler, setShowUtvikler] = useState(false);
  const [showDesigner, setshowDesigner] = useState(false);

  const showText = (e) => {
    const type = e.target.value;
    
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
              <p className="ffe-lead-paragraph bigtext">Så hva gjør egentlig 
                <Dropdown onChange={(e) => showText(e)} className="typeSelector" inline defaultValue="placeholder">
                  <option value="placeholder" disabled>folkene våre</option>
                  <option value="designere">designere</option>
                  <option value="utviklere">utviklere</option>
                </Dropdown>
                på ukens beste dag?  
              </p>
            </GridCol>
          </GridRow>
        </Grid>

        <Grid>
          <GridRow>
            <GridCol sm={{ cols: 12 }} md={{ cols: 8, offset: 2 }}>

              {(!showUtvikler && !showDesigner) && <>
              <div className="defaultText1">&nbsp;</div>
              <div className="defaultText2">&nbsp;</div>
              <div className="defaultText3">&nbsp;</div>
              <div className="defaultText4">&nbsp;</div>
              </>}
    
              {showUtvikler && 
                <div className="text-utvikler">
                  <h3 className="ffe-h2">Utviklerens fagdag</h3>
                  <div className="typewriter">
                    <p>Torsdag er den nye lørdagen, pleier vi å si.</p>
                  </div>
                  <p>Til vanlig jobber vi i kryssfunksjonelle team, men én hel dag i uke samles alle utviklerne for å jobbe utelukkende med faget vårt. Torsdager hos oss handler om testing av nye teknologier, å skape helt nye løsninger eller gjøre forbedringer på felles kode. Vi deler kunnskap, lærer og feiler sammen – og ikke minst blir vi bedre kjent med hverandre. </p>
                  <p>På fagdagen deler vi oss også, hvor noen går sammen i kollokviegrupper og tar kurs, for eksempel i maskinlæring eller Kotlin. Andre legger hodene i bløt for å forbedre ulike strukturelle utfordringer som kanskje ellers ikke ville blitt prioritert. </p>
                  <p>Fagdagen handler om frihet til å utvikle seg og fordype seg i det man selv ønsker, og alle styrer sin egen tid. Med unntak av to faste punkter: Felles lunsj og en felles quiz.  For å bli enda bedre kjent, kjører vi nemlig en quiz som vi kaller «Snakk om kollega!». På forhånd har alle delt noen hemmeligheter, og så forsøker vi å gjette hvilken hemmelighet som tilhører hvem. På bakgrunn av hemmelighetens vanskelighetsgrad får man poeng for riktig svar, og ikke minst minuspoeng om man svarer feil. Dette er en artig måte å bli kjent på og et fint avbrudd fra fagfokuset.</p>
                  <p>Faget vårt er i konstant utvikling, og nye verktøy, programmer og språk dukker opp hver eneste dag. Nettopp derfor er fagdagen så viktig for oss. Og det er ikke alle steder man faktisk får bruke 20 prosent av arbeidstiden sin på faglig utvikling. Og ikke bare i teorien – her er det satt i system og blir gjennomført. Torsdag er fagdag hos oss.</p>
                </div>
              }

              {showDesigner && 
                <div className="text-designer">
                  <h3 className="ffe-h2">Designernes fagdag</h3>
                  <p>Til vanlig jobber vi i kryssfunksjonelle team, men på fredager samles alle designerne for å jobbe med faget vårt. 
                    Fredager hos oss handler om å 
                    &nbsp;<span className="ani1">teste</span>, <span className="ani2">øve</span>, <span className="ani3">lære</span> og <span className="ani4">skape</span>. 
                    Vi deler kunnskap, lærer og feiler sammen – og ikke minst blir vi bedre kjent med hverandre. </p>
                  <p>Fagdagen er veldig viktig for å bygge en felles kultur og et felles språk. Den gjør avstanden mellom fagområdene mindre, og bidrar til trygghet og tillit. På fredager pleier vi å øve oss på å fasilitere workshops der vi diskuterer faget vårt, og løfte blikket og løse problemer sammen. Vi utforsker forskjellige metoder og tilnærminger som kan hjelpe oss i designprosessen videre.</p>
                  <p>Fagdagen handler om frihet til å utvikle seg og fordype seg i det man selv ønsker, og alle styrer sin egen tid. Med unntak av to faste punkter: Felles lunsj og en felles quiz.  For å bli enda bedre kjent, kjører vi nemlig en quiz som vi kaller «Snakk om kollega!». På forhånd har alle delt noen hemmeligheter, og så forsøker vi å gjette hvilken hemmelighet som tilhører hvem. På bakgrunn av hemmelighetens vanskelighetsgrad får man poeng for riktig svar, og ikke minst minuspoeng om man svarer feil. Dette er en artig måte å bli kjent på og et fint avbrudd fra fagfokuset.</p>
                  <p>I designfaget står brukeren i alltid i sentrum. Samtidig er faget vårt i konstant utvikling, og nye verktøy, programmer og trender dukker opp hver eneste dag. Nettopp derfor er fagdagen så viktig for oss. Og det er ikke alle steder man faktisk får bruke 20 prosent av arbeidstiden sin på utvikling. Og ikke bare i teorien – her er det satt i system og blir gjennomført. Torsdag er fagdag hos oss.</p>
                </div>
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