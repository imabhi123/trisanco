'use client'

import React from 'react'
import '../Home/css/home.css'
import './coming.css'
const ComingSoon = ({text}) => {
  return (
    <div className='comingsoon_main'>
        <p style={{fontSize:'46px',marginBottom:'auto'}}>{text}</p>
        <p style={{fontSize:'46px',marginBottom:'auto'}}>Coming Soon...</p>
    </div>
  )
}

export default ComingSoon
