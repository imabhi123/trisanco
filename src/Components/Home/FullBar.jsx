import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import getImg from '../../Assets/img/git_in_touch.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faXmark } from '@fortawesome/free-solid-svg-icons'

const FullBar = ({ setFlag }) => {
  return (
    <div className='fullbar_main_component'>
      <div className='side_fullbar'>
        <div className="logo_fullbar">
          <Link href={'/'}>TRISANCO</Link>
        </div>
        <div className="socials_fullbar">
          <p className="socials_fullbar_heading">Follow us</p>
          <Link href={'https://www.linkedin.com/company/trisanco-infotech-pvt-ltd/'} className='socials_fullbar_socials'>Linkedin</Link>
          <Link href={'https://www.instagram.com/trisanco_infotech?igsh=MW9vOTJ2OXgzMnQ1'} className='socials_fullbar_socials'>Instagram</Link>
          <Link href={'https://www.facebook.com/share/ELW2ZpLJBqXnQStd/?mibextid=qi2Omg'} className='socials_fullbar_socials'>Facebook</Link>
        </div>
        <hr />
        <div className="side_linkss">
          <Link href={'/about-us'} className="links">About Us</Link>
          <Link href={'/blogs'} className="links">Blogs</Link>
          <Link href={'/contact'} className="links">Contact Us</Link>
        </div>
      </div>
      <hr />
      <div className='main_fullbar'>
        <Link href={'/'} className="links">Home</Link>
        <Link href={'/about-us'} className="links">About Us</Link>
        <Link href={'/portfolio'} className="links">Portfolio</Link>
        <Link href={'/blogs'} className="links">Blogs</Link>
        <Link href={'/contact'} className="links">Contact Us</Link>
      </div>
      <hr />
      <div className='right_fullbar'>
        <Image src={getImg} height={350} width={250} />
        <div className="get_in_touch_fullbar">
          <p className="getInTouch_title">Get in touch</p>
          <Link href={'/'} className="getInTouch_desc">+91 07554506621</Link>
          <Link href={'/'} className="getInTouch_desc">trisancoinfotech@gmail.com</Link>
          <Link href={'/'} className="getInTouch_desc">117, Shri Ram Colony, Near SMH Hospital, Hoshangabad Road, Bhopal,Madhya Pradesh</Link>

        </div>
      </div>

      <div style={{ position: 'absolute', top: "50px", right: '50px', background: 'black', height: '80px', width: '80px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', cursor: 'pointer' }}>
        <FontAwesomeIcon onClick={() => setFlag(false)} color='white' icon={faXmark} style={{ fontSize: '40px' }} />
      </div>
    </div>
  )
}

export default FullBar
