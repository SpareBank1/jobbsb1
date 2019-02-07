import React from 'react'

export default ({posts}) => (
    <div className='grid'>
        {
            posts.edges.map(item => {
                return (
                    <div key={item.node.id}>
                        <p>{item.node.title}</p>
                        <img src={item.node.virtuals.previewImage.imageId} alt=''/>
                        <p>Text: {item.node.virtuals.subtitle}</p>
                        <p>Author: {item.node.author.name}</p>
                    </div>
                )
            })
        }
    </div>
)
