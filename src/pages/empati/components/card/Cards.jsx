import React, { FC } from 'react';
import { clsx } from 'clsx';

import { TextCard } from '@sb1/ffe-cards-react';
import { ContextErrorMessage } from '@sb1/ffe-context-message-react';
import { Heading1, Heading2, Paragraph } from '@sb1/ffe-core-react';
import { NumberedList, NumberedListItem } from '@sb1/ffe-lists-react';

import fjell from './svgs/briller-fjell.svg';
import frost from './svgs/briller-frost.svg';
import sand from './svgs/briller-sand.svg';
import syrin from './svgs/briller-syrin.svg';
import hand from './svgs/hånd-fjell.svg';

import styles from './text-card.module.less';
import txt from './universell-utforming.text';


export const Cards = ({ hands, title, text, color, subTitle, task3, task2, task1 }) => {

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
              <Heading1>{title}</Heading1>
              {hands && (
                  <ContextErrorMessage className={styles.warningMessage}>
                    {txt.WARNING_MESSAGE}
                  </ContextErrorMessage>
              )}
              <Paragraph>{text}</Paragraph>
              <Heading2>{subTitle}</Heading2>
              <div className={styles.tasks}>
                <NumberedList>
                  <NumberedListItem>{task1}</NumberedListItem>
                  <NumberedListItem>{task2}</NumberedListItem>
                  <NumberedListItem>{task3}</NumberedListItem>
                </NumberedList>

                {color === 'sand' ? (
                    hands ? (
                        <img src={hand} alt="" width={'250px'} height={'170px'} className={styles.svg} />
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
  );
};
