import React, { useState } from "react"
import Layout from '../components/layout'
import Header from '../components/header'
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react'
import SEO from '../components/seo'
import programJson from "./smudtech/smudtech-2023-program.json";
import ProgramCard from "./smudtech/smudtech-program-card";
import './smudtech/smudtech.less';

const SmudtechPage = () => {

    const [selectedTrack, setSelectedTrack] = useState('1');

    const onSelectTrack = (e) => {
      setSelectedTrack(e.target.value)
    }

    return(
    <Layout>
        <Header/>
        <SEO title="Fagdag" keywords={[`sparebank 1`, `karriere`, `stilling`, `utvikling`, `design`]} />

        <div className="sb1-page smudtech-page">

            <header className="smudtech-header smudtech-hero hero--primary">
              <div className="container">
                <div className="hero--container">
                  <img src="/images/smudtech/smudtech-logo-background.svg" className="logo-background" alt="" />
                  <div className="hero--content">
                    <img src="/images/smudtech/smudtech-logo.svg" className="smud-tech-logo" alt="" />
                    <p className="logo-text">
                      SpareBank 1 Utvikling <br />
                      23. mars 2023
                    </p>
                  </div>
                </div>
              </div>
            </header>

            <Grid className="sb1-page__header" style={{ backgroundColor: '#D8E9F2'}}>
                <GridRow>
                <GridCol sm={{ cols: 12 }} md={{ cols: 8, offset: 2 }} className="sb1-page__teaser">
                    <h2 className="ffe-h2">SmudTech-konferansen</h2>
                    <div className="ffe-lead-paragraph">SmudTech er en tek-konferanse av, for og med de ansatte i SpareBank 1 Utvikling. Her deler mange av våre flinke ansatte sin kunnskap, så dette er virkelig en arena der vi dyrker og deler kompetanse.</div>
                </GridCol>
                </GridRow>
            </Grid>

            <div className="st-container track-buttons hide-desktop show-mobile-flex">
              <button value="1" id="spor1" onClick={onSelectTrack} className={selectedTrack === '1' ? 'selected' : ''}>Spor 1</button>
              <button value="2" id="spor2" onClick={onSelectTrack} className={selectedTrack === '2' ? 'selected' : ''}>Spor 2</button>
              <button value="3" id="spor3" onClick={onSelectTrack} className={selectedTrack === '3' ? 'selected' : ''}>Spor 3</button>
              <button value="4" id="spor4" onClick={onSelectTrack} className={selectedTrack === '4' ? 'selected' : ''}>Spor 4</button>
              <button value="5" id="spor5" onClick={onSelectTrack} className={selectedTrack === '5' ? 'selected' : ''}>Spor 5</button>
            </div>

            <div className="smudtech-agenda-container">
                <div className="smudtech-agenda" aria-labelledby="schedule-heading">
              <div style={{ gridColumn: '2/-1', gridRow: 'program-title' }}>
                <h1>Agenda</h1>
              </div>

              <div className={`track-slot track-slot-1 ${selectedTrack === '1' ? 'track-slot-visible' : ''}`} aria-hidden="true">
                <div className="track-inner">
                  <span className="track-title">Spor <span className="track-number">1</span></span>
                </div>
              </div>

              <div className={`track-slot track-slot-2 ${selectedTrack === '2' ? 'track-slot-visible' : ''}`} aria-hidden="true">
                <div className="track-inner">
                  <span className="track-title">Spor <span className="track-number">2</span></span>
                </div>
              </div>

              <div className={`track-slot track-slot-3 ${selectedTrack === '3' ? 'track-slot-visible' : ''}`} aria-hidden="true">
                <div className="track-inner">
                  <span className="track-title">Spor <span className="track-number">3</span></span>
                </div>
              </div>

              <div className={`track-slot track-slot-4 ${selectedTrack === '4' ? 'track-slot-visible' : ''}`} aria-hidden="true">
                <div className="track-inner">
                  <span className="track-title">Spor <span className="track-number">4</span></span>
                </div>
              </div>

              <div className={`track-slot track-slot-5 ${selectedTrack === '5' ? 'track-slot-visible' : ''}`} aria-hidden="true">
                <div className="track-inner">
                  <span className="track-title">Spor <span className="track-number">5</span></span>
                </div>
              </div>

                <h2 className="time-slot" style={{gridRow: 'time-1130'}}>11:30</h2>
                <h2 className="time-slot" style={{ gridRow: 'time-1200' }}>12:00</h2>
                <h2 className="time-slot" style={{ gridRow: 'time-1300' }}>13:00</h2>
                <h2 className="time-slot" style={{gridRow: 'time-1400'}}>14:00</h2>
                <h2 className="time-slot" style={{gridRow: 'time-1500'}}>15:00</h2>
                <h2 className="time-slot" style={{gridRow: 'time-1600'}}>16:00</h2>


                {programJson.map( (session, index) => (
                    <ProgramCard
                        key={index}
                        title={session.title}
                        description={session.description}
                        time={session.time}
                        track={session.track}
                        presenters={session.presenters ? session.presenters : undefined}
                        selectedTrack={selectedTrack}
                    />))
                }
              </div>
            </div>
        </div>
    
    </Layout>
    )
}

export default SmudtechPage
