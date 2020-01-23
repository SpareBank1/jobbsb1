
import React from 'react'
import { TextCard } from '@sb1/ffe-cards-react'; 

export default ({id, path, title, target}) => {

  return(
    
    <div className="sb1-joblist__item">
      <TextCard element="a" className="sb1-joblist__item--content" key={id} href={path} target={target}>
      {({ Title }) => (
        <React.Fragment>
          <Title>{title}</Title>
        </React.Fragment>
      )}
      </TextCard>
    </div>   
      
  )
}
