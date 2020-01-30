import React from 'react'


export default ({color='sand'}) => {

  return(
      <>
    <div className={`blob blob1 blob-${color}`} ></div>
    <div className={`blob blob2 blob-${color}`} ></div>
    <div className={`blob blob3 blob-${color}`} ></div>

    </>
  )
}
