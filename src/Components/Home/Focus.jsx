import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Focus = () => {
    return (
        <div className='main_focus_div'>
            <div className="focus_div_top_content">
                <div style={{ display: 'flex', justifyContent: 'flex-start', paddingTop: '100px' }}>
                    <h1 className="focus_div_top_heading">We do not strive to become the biggest
                        company. Rather we aim to become the
                        best.</h1>
                </div>
            </div>
            <div className="focus_img_div">
                <img className='focus_img_div_img' src="https://manasvitechnologies.org/assets/imgs/about/1/1m.jpg" alt="" />
                <img src="https://manasvitechnologies.org/assets/imgs/about/1/2m.jpg" className='focus_img_div_img2' alt="" />
            </div>
            <div className="focus_div_content">
                <p className="focus_div_content_text">
                    We are a team of believers, thinkers, and creators. We are team of
                    skillful, customer-centric energetic techno-geeks, hungry for the
                    latest resourceful technologies in the web and mobile application
                    development fields.We are a start-up that puts its energy into
                    bringing this vision to life through innovative technology and
                    excellence in customer experience.
                </p>
                <div style={{display:'flex',justifyContent:'center',width:'40%',paddingLeft:'140px'}}>
                <Link href={'/'} className="focus_explore">
                    <p className="">Explore Us </p>
                </Link>
                <div style={{background:'#000e2e',marginLeft:'auto',height:'80px',width:'80px'}}></div>
                </div>
            </div>
        </div>
    )
}

export default Focus
