import Link from 'next/link'
import React from 'react'

const FullBar = () => {
  return (
    <div className='fullbar_main_component'>
      <div className='side_fullbar'></div>
      <hr />
      <div className='main_fullbar'>
        <Link href={'/'} className="links">Home</Link>
        <Link href={'/about-us'} className="links">About Us</Link>
        <Link href={'/portfolio'} className="links">Portfolio</Link>
        <Link href={'/blogs'} className="links">Blogs</Link>
        <Link href={'/contact'} className="links">Contact Us</Link>
      </div>
      <hr />
      <div className='right_fullbar'></div>
      
    </div>
  )
}

export default FullBar
