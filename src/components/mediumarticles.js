import React from 'react'

export default ({posts}) => (
    <div className='sb1-mediumfeed'>
        {
            posts.edges.map(item => {
                return (
                    <div key={item.node.id} className="sb1-mediumfeed__article">
                        <h4 className="ffe-h4">{item.node.title}</h4>
                        <p className="ffe-small-text">Av {item.node.author.name}</p>
                        <img src={"https://cdn-images-1.medium.com/max/500/" + item.node.virtuals.previewImage.imageId} alt=''/>
                        <p className="ffe-body-text">{item.node.virtuals.subtitle}</p>
                        <a className="ffe-link-text" href={"https://medium.com/sparebank1-digital/" + item.node.uniqueSlug}>Les hele artikkelen</a>
                    </div>
                )
            })
        }
    </div>
)
