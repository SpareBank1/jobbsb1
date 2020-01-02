
import React from 'react'
import { TextCard } from '@sb1/ffe-cards-react'; 

export default ({id, path, title, desc, target, content}) => {

  return(
    
    <div className="sb1-joblist__item">
      <TextCard element="a" className="sb1-joblist__item--content" key={id} href={path} target={target}>
      {({ Title, Text }) => (
        <React.Fragment>
          <Title className="job-title">{title}</Title>
          <Text className="job-text">{desc}
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Text>

        </React.Fragment>
      )}
      </TextCard>
    </div>   
      
  )
}
