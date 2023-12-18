import React from 'react'
import './empati/empati.less'
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react'
import sparebank1 from './empati/images/sparebank1.svg'
import mann from './empati/images/mann.svg'
import dame1 from './empati/images/dame1.svg'
import dame2 from './empati/images/dame2.svg'
import txt from './empati/empati.text'
import { createCard } from './empati/components/card/CreateCard'

const EmpatiPage = () => (
  <div className="sb1-page empati-page">
    <img src={sparebank1} alt="SpareBank 1 Logo" />
    <h1 className="ffe-h1--text-center empati-heading">{txt.HEADING}</h1>
    <Grid >
      <GridRow>
        <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
          <p className="ffe-body-paragraph empati-paragraph">
            {txt.PARAGRAPH_1}
          </p>
          <p className="ffe-body-paragraph empati-paragraph">
            {txt.PARAGRAPH_2}
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
        <GridCol>
          {createCard('STAND_1', 'fjell')}
          {createCard('STAND_2', 'syrin')}
          {createCard('STAND_3', 'frost')}
          {createCard('STAND_4', 'sand', true)}
          {createCard('STAND_5', 'fjell')}
          {createCard('STAND_6', 'syrin')}
          {createCard('STAND_7', 'sand')}
        </GridCol>
      </GridRow>
    </Grid>
  </div>
)

export default EmpatiPage
