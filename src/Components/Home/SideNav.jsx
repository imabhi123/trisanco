import React, { useState } from 'react'
import './css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import FullBar from './FullBar'

const SideNav = ({setFlag}) => {

  return (
    <div className='sideNav_main_div' style={{zIndex:'9',position:''}}>
      <FontAwesomeIcon icon={faBars} onClick={()=>setFlag(true)} style={{transform:'rotate(90deg)',cursor:'pointer'}} />
      
    </div>
  )
}

export default SideNav
