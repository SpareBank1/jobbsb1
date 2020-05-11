
import React from 'react'
import ChevronIkon from '@sb1/ffe-icons-react/lib/chevron-ikon';


export default ({id, path, title, target}) => {

  return(
    <a className="sb1-joblist__link" key={id} href={path} target={target}>
        {title}

        <span className="sb1-joblist__link-icon">
          <ChevronIkon />
        </span>
    </a>
  )
}
