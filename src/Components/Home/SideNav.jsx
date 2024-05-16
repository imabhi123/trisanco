import React, { useState } from 'react'
import './css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import FullBar from './FullBar'
import Link from 'next/link'

const SideNav = ({setFlag}) => {

  return (
    <div className='sideNav_main_div' style={{zIndex:'9',position:''}}>
      <div className="logo_fullbar" style={{position:'relative',left:'-30%',bottom:'20px'}} >
          <Link href={'/'} style={{fontSize:'42px',marginLeft:'auto'}} >TRISANCO</Link>
        </div>
      <FontAwesomeIcon icon={faBars} onClick={()=>setFlag(true)} style={{transform:'rotate(90deg)',cursor:'pointer'}} />
      
    </div>
  )
}

export default SideNav
