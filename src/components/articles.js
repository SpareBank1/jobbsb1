import React from 'react'

export default ({posts}) => (
    <div className='grid'>
        {
            posts.edges.map(item => {
                return (
                    <div key={item.node.id}>
                        <h1><b>{item.node.title}</b></h1>
                        <img src={"https://cdn-images-1.medium.com/max/500/" + item.node.virtuals.previewImage.imageId} alt=''/>
                        <p>{item.node.virtuals.subtitle}</p>
                        <p>Av: {item.node.author.name}</p>
                        <a href={"https://medium.com/sparebank1-digital/" + item.node.uniqueSlug}>Les hele artikkelen</a>
                    <br/>
                    </div>
                )
            })
        }
    </div>
)
