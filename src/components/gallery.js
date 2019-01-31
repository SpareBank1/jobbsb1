import React from 'react'
/* import Image from 'gatsby-image' */

export default ({posts}) => (
    <div className='grid'>
        {
            posts.edges.map(item => {
                return (
                    <div key={item.node.id}>
                        <img src={item.node.localFile.childImageSharp.fixed.src} alt=''/>
                        <ul>
                            <li>Likes: {item.node.likes}</li>
                            <li>Comments: {item.node.comments}</li>
                        </ul>
                        <p>{item.node.caption}</p>
                    </div>
                )
            })
        }
    </div>
)
