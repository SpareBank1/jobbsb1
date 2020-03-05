import React from 'react'
import classNames from 'classnames';
import { TextCard } from '@sb1/ffe-cards-react';
import striptags from 'striptags';
import Truncate from 'react-truncate';

function next(e) {
    let elem = document.querySelector('.sb1-mediumfeed--visible');
    let elemIdSplit = elem.getAttribute('id').split('-');
    let elemId = parseInt(elemIdSplit[1]);
    const elemPrefix = '#' + elemIdSplit[0] + '-';

    if (elemId < 9) {
        let nextElemId = parseInt(elemId + 1);
        let nextElem = document.querySelector(elemPrefix + nextElemId);
        let track = document.querySelector('.sb1-mediumfeed .sb1-somefeed__track-inner');

        track.classList.remove('sb1-somefeed__track-inner--' + elemId);
        track.classList.add('sb1-somefeed__track-inner--' + nextElemId);
        elem.classList.remove('sb1-mediumfeed--visible');
        nextElem.classList.add('sb1-mediumfeed--visible');
    }
}

function prev(e) {
    let elem = document.querySelector('.sb1-mediumfeed--visible');
    let elemIdSplit = elem.getAttribute('id').split('-');
    let elemId = parseInt(elemIdSplit[1]);
    const elemPrefix = '#' + elemIdSplit[0] + '-';

    if (elemId > 0) {
        let nextElemId = parseInt(elemId - 1);
        let nextElem = document.querySelector(elemPrefix + nextElemId);
        let track = document.querySelector('.sb1-mediumfeed .sb1-somefeed__track-inner');

        track.classList.remove('sb1-somefeed__track-inner--' + elemId);
        track.classList.add('sb1-somefeed__track-inner--' + nextElemId);
        elem.classList.remove('sb1-mediumfeed--visible');
        nextElem.classList.add('sb1-mediumfeed--visible');
    }
}

export default ({posts}) => (
    <div className='sb1-mediumfeed sb1-somefeed'>
        <h3 className="ffe-h4">
            SpareBank 1 Utvikling på Medium <span className="sb1-smaller-link"><a href="https://medium.com/sparebank1-digital" className="ffe-link-text ffe-link-text--no-underline" target="_blank" rel="noopener noreferrer">@sparebank1-digital</a></span>
        </h3>

        <div className="sb1-somefeed__track">
            <div className="sb1-somefeed__track-inner">
                {
                    posts.edges.map((item, index) => {
                        let active = (index === 0);

                        return (
                            <div
                                key={ item.node.id }
                                id={ 'med-' + index }
                                className={classNames(
                                    'sb1-mediumfeed__article', {
                                    'sb1-mediumfeed--visible': active
                                })
                            }>
                                <React.Fragment>
                                    <TextCard
                                        element="a"
                                        href={ item.node.link }
                                    >
                                        {({ Title, Subtext, Text }) => (
                                            <React.Fragment>
                                                <Title overflowEllipsis={false}>{ item.node.title }</Title>
                                                <Text>
                                                    <Truncate lines={7} ellipsis="...">
                                                        { striptags(item.node.content.encoded) }
                                                    </Truncate>
                                                </Text>
                                                <Subtext>Av { item.node.creator }</Subtext>
                                            </React.Fragment>
                                        )}
                                    </TextCard>
                                </React.Fragment>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="sb1-somefeed__controls">
            <button
                onClick={prev}
                className="ffe-inline-button ffe-inline-button--tertiary"
            >Forrige</button>
            <button
                onClick={next}
                className="ffe-inline-button ffe-inline-button--tertiary"
            >Neste</button>
        </div>
    </div>
)
