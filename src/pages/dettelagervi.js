import React, { useState } from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react'
import SEO from '../components/seo'
import Dropdown from '@sb1/ffe-dropdown-react';
import dettelagerviHero from '../images/dettelagervi-hero.jpg';



const DettelagerviPage = () => {

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
        <SEO title="Dette lager vi" keywords={[`sparebank 1`, `karriere`, `stilling`, `utvikling`, `design`]} />

        <div className="sb1-page">
            <Grid className="sb1-page__header">
                <GridRow>
                <GridCol sm={{ cols: 12 }}>
                    <div className="hero">
                        <img alt="Dette lager vi" src={dettelagerviHero} className="hero-image"/>
                        <h1 className="ffe-h1 hero-circle">Dette driver vi med</h1>
                    </div>
                </GridCol>
                </GridRow>

                <GridRow>
                <GridCol sm={{ cols: 12 }} md={{ cols: 8, offset: 2 }} className="sb1-page__teaser">
                    <h2 className="ffe-h2">Sånn jobber vi, og dette lager vi</h2>
                    <div className="ffe-lead-paragraph">Vi er ikke en IT-avdeling i en bank, vi er et eget IT- og utviklingsselskap. Men hva utvikler vi egentlig – og hvordan, lurer du kanskje på. Her får du en liten smakebit på nettopp det.</div>
                    <p className="ffe-lead-paragraph bigtext">Sånn jobber  
                        <Dropdown onChange={(e) => showText(e)} className="typeSelector" inline defaultValue="placeholder">
                            <option value="placeholder" disabled>folkene våre</option>
                            <option value="designere">designerne våre</option>
                            <option value="utviklere">utviklerne våre</option>
                        </Dropdown>
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
                        <p>
                            Vi lager løsninger som betyr noe i folks hverdag. SpareBank 1 er landets nest største finansgruppering, og det betyr at systemene, tjenestene og produktene vi jobber med er viktige for mange. Faktisk berører løsningene våre over én million mennesker hver eneste dag. Derfor er vi naturlig nok veldig opptatt av å lære av våre feil og aktivt jobbe for å bli bedre.    
                        </p>

                        <p>
                            Måten både utviklerne og designerne hos oss jobber er blant annet inspirert av boken «Radical focus». Vi kickstarter uken med å samle hele det kryssfunksjonelle teamet (de har vi 25 av) – og spør “Hvordan ligger vi an i forhold til målene vi har satt oss” og “hva må vi ha fokus på denne uken for å nå målet?”. Vi blir enige om de viktigste oppgavene, som vi forplikter oss til i felleskap og som vi strekker oss for å levere innen fredag. Fredager handler om å feire det vi har fått til og dele hva vi har lært. Resultatet er felles stolthet over det vi har fått til sammen. 
                        </p>

                        <p>
                            Vi jobber alltid hypotesedrevet, og basert på måling av brukeroppførsel. Vi sitter veldig tett på brukerne, og tar til oss titusenvis av gode og dårlige tilbakemeldinger årlig.
                        </p>
                            
                        <p>
                            Vi vil jo ikke lage noe kundene ikke vil ha. Derfor tester vi alltid ut hypoteser før vi koder løsningen. Utvikling er å løse problemer, og av og til skriver vi kode for å gjøre det, men det er viktig for oss å ikke skrive en masse kode som ikke gir kundeverdi.
                        </p>

                        <p>
                            Vi er en gjeng som er glade i å lese, og koser oss med Unicorn Project – men Accelerate er bibelen vår. Vi ønsker å få alle endringer ut i produksjon så fort de er klare. Ingen kø, ingen lager, ingen ventetid. Hos oss går det i små, hyppige releaser. Vi har faktisk over 2000 releaser i året.
                        </p>
                        <p>
                            <Link to="/#ansatte">Her kan du bli enda bedre kjent med oss og folka som jobber her.</Link>
                        </p>
                    </div>
                    }

                    {showDesigner && 
                    <div className="text-designer">
                        <p>
                            Vi lager løsninger som betyr noe i folks hverdag. SpareBank 1 er landets nest største finansgruppering, og det betyr at systemene, tjenestene og produktene vi jobber med er viktige for mange. Faktisk berører løsningene våre over én million mennesker hver eneste dag. Derfor er vi naturlig nok veldig opptatt av å lære av våre feil og aktivt jobbe for å bli bedre.    
                        </p>

                        <p>
                            Måten både utviklerne og designerne hos oss jobber er blant annet inspirert av boken «Radical focus». Vi kickstarter uken med å samle hele det kryssfunksjonelle teamet (de har vi 25 av) – og spør “Hvordan ligger vi an i forhold til målene vi har satt oss” og “hva må vi ha fokus på denne uken for å nå målet?”. Vi blir enige om de viktigste oppgavene, som vi forplikter oss til i felleskap og som vi strekker oss for å levere innen fredag. Fredager handler om å feire det vi har fått til og dele hva vi har lært. Resultatet er felles stolthet over det vi har fått til sammen. 
                        </p>

                        <p>
                            Vi jobber alltid hypotesedrevet, og basert på måling av brukeroppførsel. Vi sitter veldig tett på brukerne, og tar til oss titusenvis av gode og dårlige tilbakemeldinger årlig.
                        </p>

                        <p>
                            Landsdekkende spørreundersøkelser, trafikklogging, tilbakemeldinger og 1:1-samtaler med kunder gir oss et rikt bilde av hva kundene trenger for å få en bedre hverdagsøkonomi.
                        </p>

                        <p>
                            Vi tester ting tidlig i produksjon, og er ikke redd for å teste noe som ikke er fiks ferdig. Tvert imot: Er man ikke bittelitt flau over det man legger ut, så har man ikke testet tidlig nok.
                        </p>

                        <p>
                            Vi jobber med samfunnskritiske tjenester som betaling og boliglån, som brukes av hundretusenvis av mennesker, og vi legger til rette for alt fra hverdagslige kjøp på matbutikken til realisering av boligdrømmen. Vi hjelper forbrukere til å gjennomføre oppgaver de i utgangspunktet ikke gleder seg til, til noe overraskende enkelt, oversiktlig og til og med engasjerende. Og vi hjelper bankene til å formidle tips og råd (og produkter) som gir folk bedre oversikt og bedre økonomi.
                        </p>
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

export default DettelagerviPage
