import React, { useState } from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react'
import SEO from '../components/seo'
import Dropdown from '@sb1/ffe-dropdown-react';
import miljo202232 from '../images/miljo2022-3-2.jpg';



const DettelagerviPage = () => {

    const [showUtvikler, setShowUtvikler] = useState(false);
    const [showDesigner, setShowDesigner] = useState(false);
    const [showTester, setShowTester] = useState(false);
    const [showArkitekt, setShowArkitekt] = useState(false);

    const showText = (e) => {
        const type = e.target.value;

        if (type==='utviklere'){
            setShowArkitekt(false);
            setShowDesigner(false);
            setShowTester(false);
            setShowUtvikler(true);
        }
        if (type==='designere'){
            setShowArkitekt(false);
            setShowUtvikler(false);
            setShowTester(false);
            setShowDesigner(true);
        }
        if (type==='testere'){
            setShowArkitekt(false);
            setShowUtvikler(false);
            setShowDesigner(false);
            setShowTester(true);
        }
        if (type==='arkitekter'){
            setShowUtvikler(false);
            setShowDesigner(false);
            setShowTester(false);
            setShowArkitekt(true);
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
                        <img alt="Dette lager vi" src={miljo202232} className="hero-image"/>
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
                            <option value="testere">testerne våre</option>
                            <option value="arkitekter">arkitektene våre</option>
                        </Dropdown>
                    </p>
                </GridCol>
                </GridRow>
            </Grid>

            <Grid>
                <GridRow>
                <GridCol sm={{ cols: 12 }}>

                    {(!showUtvikler && !showDesigner && !showTester && !showArkitekt) && <>
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
                                Måten utviklerne, designerne og testerne hos oss jobber er blant annet inspirert av boken <a class="ffe-link-text" rel="noreferrer" target="_blank" href="https://www.amazon.com/Radical-Focus-Achieving-Important-Objectives-ebook/dp/B01BFKJA0Y">«Radical focus»</a>. Vi kickstarter uken med å samle hele det kryssfunksjonelle teamet (de har vi 25 av) – og spør “Hvordan ligger vi an i forhold til målene vi har satt oss” og “hva må vi ha fokus på denne uken for å nå målet?”. Vi blir enige om de viktigste oppgavene, som vi forplikter oss til i felleskap og som vi strekker oss for å levere innen fredag. Fredager handler om å feire det vi har fått til og dele hva vi har lært. Resultatet er felles stolthet over det vi har fått til sammen. 
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
                                <Link to="/#ansatte" className="ffe-link-text">Her kan du bli enda bedre kjent med oss og folka som jobber her.</Link>
                            </p>
                        </div>
                    }

                    {showDesigner && 
                        <div className="text-designer">
                            <p>
                                Vi lager løsninger som betyr noe i folks hverdag. SpareBank 1 er landets nest største finansgruppering, og det betyr at systemene, tjenestene og produktene vi jobber med er viktige for mange. Faktisk berører løsningene våre over én million mennesker hver eneste dag. Derfor er vi naturlig nok veldig opptatt av å lære av våre feil og aktivt jobbe for å bli bedre.    
                            </p>

                            <p>
                                Måten utviklerne, designerne og testerne hos oss jobber er blant annet inspirert av boken <a class="ffe-link-text" rel="noreferrer" target="_blank" href="https://www.amazon.com/Radical-Focus-Achieving-Important-Objectives-ebook/dp/B01BFKJA0Y">«Radical focus»</a>. Vi kickstarter uken med å samle hele det kryssfunksjonelle teamet (de har vi 25 av) – og spør “Hvordan ligger vi an i forhold til målene vi har satt oss” og “hva må vi ha fokus på denne uken for å nå målet?”. Vi blir enige om de viktigste oppgavene, som vi forplikter oss til i felleskap og som vi strekker oss for å levere innen fredag. Fredager handler om å feire det vi har fått til og dele hva vi har lært. Resultatet er felles stolthet over det vi har fått til sammen. 
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
                                <Link to="/#ansatte" className="ffe-link-text">Her kan du bli enda bedre kjent med oss og folka som jobber her.</Link>
                            </p>
                        </div>
                    }

                    {showTester && 
                        <div className="text-tester">
                            <p>
                                Vi lager løsninger som betyr noe i folks hverdag. SpareBank 1 er landets nest største finansgruppering, og det betyr at systemene, tjenestene og produktene vi jobber med er viktige for mange. Faktisk berører løsningene våre over én million mennesker hver eneste dag. Derfor er vi naturlig nok veldig opptatt av å lære av våre feil og aktivt jobbe for å bli bedre.
                            </p>

                            <p>
                                Måten utviklerne, designerne og testerne hos oss jobber er blant annet inspirert av boken <a class="ffe-link-text" rel="noreferrer" target="_blank" href="https://www.amazon.com/Radical-Focus-Achieving-Important-Objectives-ebook/dp/B01BFKJA0Y">«Radical focus»</a>. Vi kickstarter uken med å samle hele det kryssfunksjonelle teamet (de har vi 25 av) – og spør “Hvordan ligger vi an i forhold til målene vi har satt oss” og “hva må vi ha fokus på denne uken for å nå målet?”. Vi blir enige om de viktigste oppgavene, som vi forplikter oss til i felleskap og som vi strekker oss for å levere innen fredag. Fredager handler om å feire det vi har fått til og dele hva vi har lært. Resultatet er felles stolthet over det vi har fått til sammen.
                            </p>

                            <p>
                                Vi jobber alltid hypotesedrevet, og basert på måling av brukeroppførsel. Vi sitter veldig tett på brukerne, og tar til oss titusenvis av gode og dårlige tilbakemeldinger årlig.
                            </p>
                            
                            <p>
                                Kundene våre forventer at tjenestene våre er tilgjengelig når de trenger det, enten det er i lunsjpausen eller etter leggetid for ungene. Det krever sikre, stabile og brukervennlige løsninger. Vi jobber innenfor et regulert domene og tenker risiko i alt vi gjør. Liten risiko for kundene våre, kun automatisert test før vi releaser. Stor risiko, da må vi teste verdikjeder, automatisk og manuelt, kanskje vi kjører sikkerhets- og ytelsestest også.
                            </p>

                            <p>
                                Vi er opptatt av riktig kvalitet til rett tid og leter hele tiden etter bedre måter å kvalitetssikre koden og leveransene våre på. Vi har både fokus på shift left, tidlig test og shift right, overvåkning i produksjon. Vi liker også open source godt og deler gjerne egenutviklede verktøy eksternt.
                            </p>
                            <p>
                                <Link to="/#ansatte" className="ffe-link-text">Her kan du bli enda bedre kjent med oss og folka som jobber her.</Link>
                            </p>
                        </div>
                    }

                    {showArkitekt && 
                        <div className="text-arkitekt">
                            <p>Vi motiveres av at vi gjør en forskjell, både for selskapene i SpareBank 1 og deres kunder. Vi lager løsninger som betyr noe i folks hverdag. SpareBank 1 er landets nest største finansgruppering, og det betyr at systemene, tjenestene og produktene vi jobber med er viktige for mange. Faktisk berører løsningene våre over én million mennesker hver eneste dag. Derfor er vi naturlig nok veldig opptatt av å lære av våre feil og aktivt jobbe for å bli bedre.</p>

                            <p>Vi har løsninger som brukes av mange, både kunder, i bank og de andre selskapene i alliansen. Den store bredden i løsninger gjør at vi får jobbet med mange ulike utfordringer. De spennende og varierte oppgavene er noe vi setter pris på, og vi får jobbet med mange ulike plattformer og teknologier.</p>

                            <p>Løsningene våre utvikles av kryss-funksjonelle, autonome produktteam og vi har interne produktteam som forvalter IT-plattformer. Som arkitekter jobber vi gjerne innen et domene, enten et forretningsmessig som sparing eller finansiering, eller et mer teknisk som integrasjon eller skyplattform. Vi jobber derfor som regel på tvers av og med team, og vi jobber tett mot forretningssiden både i eget selskap og i bankene.</p>

                            <p>Ingen dager er like, og vi jobber med alt fra løsningsarkitektur for produkter eller i prosjekter til å utarbeide retningslinjer for å sikre etterlevelse av lover og forskrifter. Hvis vi skal trekke frem en fellesnevner for det vi jobber med er det at vi jobber med problemløsning. Enten det er å finne en god løsning på et problem kunder har, hvordan vi oppnår robuste verdikjeder, eller hvilken teknologi vi bør benytte.</p>

                            <p>Vår visjon er å gi SpareBank 1 helhetlige og fremtidsrettede løsninger med god kvalitet. Vi setter retning, er proaktive og tett på forretningsutvikling. Vi er en premissgiver, rådgiver og samtalepartner når det gjelder arkitektur og teknologi.</p>

                            <p>
                                <Link to="/#ansatte" className="ffe-link-text">Her kan du bli enda bedre kjent med oss og folka som jobber her.</Link>
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
