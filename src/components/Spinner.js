import React from 'react'
import loadingGif from './loadingGif.gif'

const Spinner =()=>{
  
    return (
      <div className='text-center' >
        <img   className='my-3' src={loadingGif} alt="loadingGif" />
      </div>
    )
  
}

export default Spinner
