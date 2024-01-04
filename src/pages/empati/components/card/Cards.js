import React from 'react'
import { clsx } from 'clsx'

import { Heading3, Heading2, Paragraph } from '@sb1/ffe-core-react'
import { NumberedList, NumberedListItem } from '@sb1/ffe-lists-react'

import fjell from './svgs/briller-fjell.svg'
import frost from './svgs/briller-frost.svg'
import syrin from './svgs/briller-syrin.svg'
import hand from './svgs/hånd-fjell.svg'

import * as styles from './text-card.module.less'
import { ContextErrorMessage } from '@sb1/ffe-context-message-react'

export default function Cards({
  hands,
  title,
  text,
  color,
  subTitle,
  task3,
  task2,
  task1,
  task4,
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
    <div className={dynamicColorClass}>
      <Heading2>{title}</Heading2>
      {hands && (
        <ContextErrorMessage title={warningMessage}>
          <Paragraph>test</Paragraph>
        </ContextErrorMessage>
      )}
      <Paragraph>{text}</Paragraph>
      <Heading3>{subTitle}</Heading3>
      <div className={styles.tasks}>
        <NumberedList>
          <NumberedListItem>{task1}</NumberedListItem>
          <NumberedListItem>{task2}</NumberedListItem>
          <NumberedListItem>{task3}</NumberedListItem>
          {!!task4 && <NumberedListItem>{task4}</NumberedListItem>}
        </NumberedList>

        {color === 'sand' && hands ? (
          <img
            src={hand}
            alt=""
            width={'250px'}
            height={'170px'}
            className={styles.svg}
          />
        ) : color === 'syrin' ? (
          <img src={syrin} alt="" width={'200px'} className={styles.svg} />
        ) : color === 'fjell' ? (
          <img src={fjell} alt="" width={'200px'} className={styles.svg} />
        ) : color === 'frost' ? (
          <img src={frost} alt="" width={'200px'} className={styles.svg} />
        ) : null}
      </div>
    </div>
  )
}
