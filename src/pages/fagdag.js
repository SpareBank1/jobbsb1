import React, { useState } from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react'
import SEO from '../components/seo'
import Dropdown from '@sb1/ffe-dropdown-react';
import fagdagHero from '../images/fagdag-hero.jpg';
import fagdag4 from '../images/fagdag4.jpg';
import miljo202262 from '../images/miljo2022-6-2.jpg';



const FagdagPage = () => {

    const [showUtvikler, setShowUtvikler] = useState(false);
    const [showDesigner, setshowDesigner] = useState(false);

    const showText = (e) => {
        const type = e.target.value;

        if (type==='utviklere'){
            setShowUtvikler(true);
            setshowDesigner(false);
        }else{
            setShowUtvikler(false);
            setshowDesigner(true);
        }
    };

    return(
    <Layout>
        <Header/>
        <SEO title="Fagdag" keywords={[`sparebank 1`, `karriere`, `stilling`, `utvikling`, `design`]} />

        <div className="sb1-page">
            <Grid className="sb1-page__header">
                <GridRow>
                <GridCol sm={{ cols: 12 }}>
                    <div className="hero">
                        <img alt="Fagdag: smilende dame" src={fagdagHero} className="hero-image"/>
                        <h1 className="ffe-h1 hero-circle">Fagdag</h1>
                    </div>
                </GridCol>
                </GridRow>

                <GridRow>
                <GridCol sm={{ cols: 12 }} md={{ cols: 8, offset: 2 }} className="sb1-page__teaser">
                    <h2 className="ffe-h2">Hørt om fagdagen?</h2>
                    <div className="ffe-lead-paragraph">For våre utviklere og designere er én dag i uken dedikert til faglig utvikling. Det som startet som et eksperiment i 2018, er nå en fast aktivitet. Her kan du lese litt mer om hva vi driver med på ukens beste dag!</div>
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
                <GridCol sm={{ cols: 12 }}>

                    {(!showUtvikler && !showDesigner) && <>
                    <div className="defaultText1">&nbsp;</div>
                    <div className="defaultText2">&nbsp;</div>
                    <div className="defaultText3">&nbsp;</div>
                    <div className="defaultText4">&nbsp;</div>
                    </>}
        
                    {showUtvikler && 
                    <div className="text-utvikler">
                        <h3 className="ffe-h2">Utviklerens fagdag</h3>

                        <div className="container">
                            <div className="paragraph-a">
                                <p>Til vanlig jobber vi i kryssfunksjonelle team, men én hel dag i uke samles alle utviklerne for å jobbe utelukkende med faget vårt. Torsdager hos oss handler om testing av nye teknologier, å skape helt nye løsninger eller gjøre forbedringer på felles kode. Vi deler kunnskap, lærer og feiler sammen – og ikke minst blir vi bedre kjent med hverandre. </p>
                            </div>
                            <div className="fagdag-image">
                                <img alt="Fagdag" src={fagdag4} />
                            </div>

                            <div className="paragraph-b">
                                <p>På fagdagen deler vi oss også, hvor noen går sammen i kollokviegrupper og tar kurs, for eksempel i maskinlæring eller Kotlin. Andre legger hodene i bløt for å forbedre ulike strukturelle utfordringer som kanskje ellers ikke ville blitt prioritert. </p>
                            </div>

                            <div className="paragraph-c">
                                <p>Fagdagen handler om frihet til å utvikle seg og fordype seg i det man selv ønsker, og alle styrer sin egen tid. Med unntak av to faste punkter: Felles lunsj og en felles quiz.  For å bli enda bedre kjent, kjører vi nemlig en quiz som vi kaller «Snakk om kollega!». På forhånd har alle delt noen hemmeligheter, og så forsøker vi å gjette hvilken hemmelighet som tilhører hvem. På bakgrunn av hemmelighetens vanskelighetsgrad får man poeng for riktig svar, og ikke minst minuspoeng om man svarer feil. Dette er en artig måte å bli kjent på og et fint avbrudd fra fagfokuset.</p>
                            </div>

                            <div className="paragraph-d">
                                <p>Faget vårt er i konstant utvikling, og nye verktøy, programmer og språk dukker opp hver eneste dag. Nettopp derfor er fagdagen så viktig for oss. Og det er ikke alle steder man faktisk får bruke 20 prosent av arbeidstiden sin på faglig utvikling. Og ikke bare i teorien – her er det satt i system og blir gjennomført. Torsdag <em>er</em> fagdag hos oss.</p>
                            </div>
                        </div> 
                        <p>
                            <Link to="/#ansatte">Her kan du bli enda bedre kjent med oss og folka som jobber her.</Link>
                        </p>
                    </div>
                    }

                    {showDesigner && 
                    <div className="text-designer">
                        <h3 className="ffe-h2">Designernes fagdag</h3>
                        <div className="container">
                            <div className="paragraph-a">
                                <p>Til vanlig jobber vi i kryssfunksjonelle team, men på torsdager samles alle designerne for å jobbe med faget vårt. Fagdagen  hos oss handler om å teste, øve, lære og skape. Vi deler kunnskap, lærer og feiler sammen – og ikke minst blir vi bedre kjent med hverandre. </p>
                            </div>
                            <div className="fagdag-image">
                                <img alt="Fagdag" src={miljo202262} />
                            </div>
                            <div className="paragraph-b">
                                <p>Fagdagen er veldig viktig for å bygge en felles kultur og et felles språk. Den gjør avstanden mellom fagområdene mindre, og bidrar til trygghet og tillit. På torsdagene pleier vi å øve oss på å fasilitere workshops der vi diskuterer faget vårt, og løfte blikket og løse problemer sammen. Vi utforsker forskjellige metoder og tilnærminger som kan hjelpe oss i designprosessen videre.</p>
                            </div>
                            <div className="paragraph-c">
                                <p>Fagdagen handler om frihet til å utvikle seg og fordype seg i det man selv ønsker, og alle styrer sin egen tid. Med unntak av to faste punkter: Felles lunsj og en felles quiz.  For å bli enda bedre kjent, kjører vi nemlig en quiz som vi kaller «Snakk om kollega!». På forhånd har alle delt noen hemmeligheter, og så forsøker vi å gjette hvilken hemmelighet som tilhører hvem. På bakgrunn av hemmelighetens vanskelighetsgrad får man poeng for riktig svar, og ikke minst minuspoeng om man svarer feil. Dette er en artig måte å bli kjent på og et fint avbrudd fra fagfokuset.</p>
                            </div>
                            <div className="paragraph-d">
                                <p>I designfaget står brukeren i alltid i sentrum. Samtidig er faget vårt i konstant utvikling, og nye verktøy, programmer og trender dukker opp hver eneste dag. Nettopp derfor er fagdagen så viktig for oss. Og det er ikke alle steder man faktisk får bruke 20 prosent av arbeidstiden sin på faglig utvikling. Og ikke bare i teorien – her er det satt i system og blir gjennomført. Torsdag <em>er</em> fagdag hos oss.</p>
                            </div>
                        </div>
                        <p>
                            <Link to="/#ansatte">Her kan du bli enda bedre kjent med oss og folka som jobber her.</Link>
                        </p>
                    </div>
                    }
                </GridCol>
                </GridRow>
            </Grid>
        </div>
    
    </Layout>
    )
}

export default FagdagPage
