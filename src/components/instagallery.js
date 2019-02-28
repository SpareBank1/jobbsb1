import React from 'react'
import Timestamp from 'react-timestamp'
/* import Image from 'gatsby-image' */

export default ({posts}) => (
    <div className='sb1-instafeed'>
        {
            posts.edges.map(item => {
                return (
                    <div key={item.node.id} className="sb1-instafeed__article">
                        <img src={item.node.localFile.childImageSharp.fixed.src} alt=''/>
                        <ul>
                            <li>Likes: {item.node.likes}</li>
                            <li>Comments: {item.node.comments}</li>
                            <li>Timestamp: <Timestamp time={item.node.timestamp}/></li>
                        </ul>
                        <p>{item.node.caption}</p>
                    </div>
                )
            })
        }
    </div>
)
