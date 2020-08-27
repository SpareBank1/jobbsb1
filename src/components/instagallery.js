import React from 'react'
// import Timestamp from 'react-timestamp'

export default ({posts}) => (
    <div className="sb1-somefeed" data-testid="instafeed">
        <h3 className="ffe-h4">
            SpareBank 1 Utvikling på Instagram <span className="sb1-smaller-link"><a href="https://instagram.com/sparebank1design" className="ffe-link-text ffe-link-text--no-underline" target="_blank" rel="noopener noreferrer">@sparebank1design</a> / <a href="https://instagram.com/sparebank1utvikler" className="ffe-link-text ffe-link-text--no-underline" target="_blank" rel="noopener noreferrer">@sparebank1utvikler</a></span>
        </h3>

        <div className='sb1-instafeed sb1-somefeed'>
            {
                posts.edges.map((item, index) => {
                    return (
                        <div
                            key={ item.node.id }
                            id={ 'ig-' + index }
                            className='sb1-instafeed__article'
                        >
                            <div className="sb1-instafeed__inner">
                                <a href={ "https://www.instagram.com/p/" + item.node.id }>
                                    <img src={item.node.localFile.childImageSharp.fixed.src} alt=''/>
                                    <div className="sb1-instafeed__meta">
                                        <div className="sb1-instafeed__meta-item--interactions">
                                            <div>
                                                <svg focusable="false" viewBox="0 0 200 200" className="sb1-instafeed__icon">
                                                    <title>Likes</title>
                                                    <path d="M99.91,185c-5.33,0-10.54-1.6-15.1-4.6-20.87-14.1-58.28-45.5-72.16-67.6-14.54-23.36-16.76-50.36-5.548-70.91,9.328-17.11,26.87-26.89,48.18-26.89,14.32,0,29.65,6.56,44.72,18.89,11.3-9.33,27.2-18.89,44.8-18.89,21.32,0,38.74,9.778,48.18,26.89,11.1,20.33,8.992,47.56-5.551,70.67-13.88,22.11-51.29,53.56-72.16,67.67-4.5,3.1-9.7,4.7-15.1,4.7zm-44.74-154.9c-15.88,0-28.2,6.778-35.19,19.11-8.55,15.56-6.55,36.78,5.22,55.58,11.32,17.89,44.18,47.22,68.05,63.33,3.997,2.556,9.325,2.556,13.1,0,23.65-16.11,56.73-45.56,68.05-63.33,11.77-18.67,13.77-40,5.218-55.56-6.772-12.33-19.32-19.11-35.19-19.11-15.32,0-30.09,10.56-39.63,19.33l-5,4.54-4.99-4.56c-9.55-9-24.09-19.33-39.64-19.33z"></path>
                                                </svg>
                                                { item.node.likes ? item.node.likes : '0' }
                                            </div>
                                            <div>
                                                <svg focusable="false" viewBox="0 0 200 200" className="sb1-instafeed__icon">
                                                    <title>Kommentarer</title>
                                                    <path d="m54.8 2.1c-29.3 0-52.6 22.8-52.6 51.3l0 46.7c0 28.5 23.3 51.3 52.2 51.3l0 37c0 5.3 6.3 10.4 12.9 10.4 2.9 0 6.2-1.1 8.7-3.2l53.8-44.2 16.4 0c29.3 0 52.6-22.8 52.6-51.3l0-47C198.5 25.3 175.1 2.1 146.2 2.1l-91.4 0zm-0.5 17.4 91.9 0c19 0 34.7 15.3 34.7 33.8l0 46.7c0 18.5-15.7 33.8-34.7 33.8l-22.7 0-5.1 4.2-46.5 37.8 0-42-17.9 0c-19 0-34.4-15.3-34.4-33.8l0-46.7c0-18.5 15.7-33.8 34.7-33.8z"></path>
                                                </svg>
                                                { item.node.comments ? item.node.comments : '0' }

                                            </div>
                                        </div>
                                        <div className="sb1-instafeed__meta-item sb1-instafeed__meta-item--caption">
                                            { item.node.caption }
                                        </div>
                                        {/* <div className="sb1-instafeed__meta-item sb1-instafeed__meta-item--timestamp">
                                            <Timestamp time={ item.node.timestamp }/>
                                        </div> */}
                                    </div>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
)
