import React from 'react'
import { clsx } from 'clsx'

import { TextCard } from '@sb1/ffe-cards-react'
import { Heading3, Heading2, Paragraph } from '@sb1/ffe-core-react'
import { ErrorMessage } from '@sb1/ffe-message-box-react'
import { NumberedList, NumberedListItem } from '@sb1/ffe-lists-react'

import fjell from './svgs/briller-fjell.svg'
import frost from './svgs/briller-frost.svg'
import sand from './svgs/briller-sand.svg'
import syrin from './svgs/briller-syrin.svg'
import hand from './svgs/hånd-fjell.svg'

import * as styles from './text-card.module.less'

export default function Cards({
  hands,
  title,
  text,
  color,
  subTitle,
  task3,
  task2,
  task1,
  warningMessage,
}) {
  const colorClasses = {
    sand: styles.colorSand,
    syrin: styles.colorSyrin,
    fjell: styles.colorFjell,
    frost: styles.colorFrost,
  }

  const dynamicColorClass = clsx(colorClasses[color])

  return (
    <TextCard className={dynamicColorClass}>
      {() => (
        <>
          <Heading2>{title}</Heading2>
          {hands && (
            <ErrorMessage
              icon={
                <span className="material-symbols-rounded">priority_high</span>
              }
            >
              <Paragraph>{warningMessage}</Paragraph>
            </ErrorMessage>
          )}
          <Paragraph>{text}</Paragraph>
          <Heading3>{subTitle}</Heading3>
          <div className={styles.tasks}>
            <NumberedList>
              <NumberedListItem>{task1}</NumberedListItem>
              <NumberedListItem>{task2}</NumberedListItem>
              <NumberedListItem>{task3}</NumberedListItem>
            </NumberedList>

            {color === 'sand' ? (
              hands ? (
                <img
                  src={hand}
                  alt=""
                  width={'250px'}
                  height={'170px'}
                  className={styles.svg}
                />
              ) : (
                <img src={sand} alt="" width={'200px'} className={styles.svg} />
              )
            ) : color === 'syrin' ? (
              <img src={syrin} alt="" width={'200px'} className={styles.svg} />
            ) : color === 'fjell' ? (
              <img src={fjell} alt="" width={'200px'} className={styles.svg} />
            ) : color === 'frost' ? (
              <img src={frost} alt="" width={'200px'} className={styles.svg} />
            ) : null}
          </div>
        </>
      )}
    </TextCard>
  )
}
