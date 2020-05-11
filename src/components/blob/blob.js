import React from 'react'


export default ({color='sand'}) => {

  return(
      <>
    <div className={`blob blob1 background-${color}`} ></div>
    <div className={`blob blob2 background-${color}`} ></div>
    <div className={`blob blob3 background-${color}`} ></div>

    </>
  )
}
