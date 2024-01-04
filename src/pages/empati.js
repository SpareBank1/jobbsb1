import React from 'react'
import './empati/empati.less'
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react'
import sparebank1 from './empati/images/sparebank1.svg'
import mann from './empati/images/mann.svg'
import dame1 from './empati/images/dame1.svg'
import dame2 from './empati/images/dame2.svg'
import empatiJson from './empati/empati.json'
import textCardsJson from './empati/components/card/textCards.json'
import Cards from './empati/components/card/Cards'
import SEO from '../components/seo'

const EmpatiPage = () => (
  <div className="sb1-page empati-page">
    <SEO
      title="Empati"
      keywords={[
        `sparebank 1`,
        `universell utforming`,
        `utvikling`,
        `design`,
        `test`,
      ]}
    />
    <header>
      <img src={sparebank1} alt="SpareBank 1-logo" />
      <h1 className="ffe-h1--text-center empati-heading">
        {empatiJson.heading}
      </h1>
    </header>
    <Grid>
      <GridRow>
        <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
          <p className="ffe-lead-paragraph empati-paragraph">
            {empatiJson.firstParagraph}
          </p>
          <p className="ffe-lead-paragraph empati-paragraph">
            {empatiJson.secondParagraph}
          </p>
        </GridCol>
      </GridRow>
    </Grid>

    <div className="empati-images">
      <img src={mann} alt="" />
      <img src={dame2} alt="" className="empati-images image--shrunk" />
      <img src={dame1} alt="" />
    </div>

    <Grid>
      <GridRow topPadding={false}>
        <GridCol sm={12} lg={{ cols: 8, offset: 2 }}>
          {textCardsJson.map((card, index) => (
            <Cards
              key={index}
              hands={card.hands}
              color={card.color}
              title={card.heading}
              subTitle={card.tasks}
              text={card.text}
              task1={card.task1}
              task2={card.task2}
              task3={card.task3}
              task4={card.task4}
              warningMessage={card.warningMessage}
            />
          ))}
        </GridCol>
      </GridRow>
    </Grid>
  </div>
)

export default EmpatiPage
