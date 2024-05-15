import React from 'react'
import '../Home/css/home.css'
import './css/portfolio.css'
import '../Contact/css/contact.css'
import Slider from '../GSAP/Slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const PortFolio = () => {
    return (
        <div className='portfolio_main_div'>
            <div style={{ display: 'flex', width: '100vw', height: '100vh', justifyContent: 'flex-end' }}>
                <div className="portfolio_top_first_half">
                    <p className="portfolio_title">FEATURED</p>
                    <p className="portfolio_heading">Work</p>
                    <div style={{ display: 'flex', alignItems: 'flex-start', width: '400px', gap: '20px' }}>
                        <div style={{ width: '50%', height: '1px', background: 'white' }}></div>
                        <p className="portfolio_desc">Experience our portfolio of exceptional work - see the impact we've made for our clients.</p>
                    </div>
                </div>
                <Slider />
            </div>
            <div className="portfolio_bottom_section">
                <p className="work_with_us">WORK WITH US</p>
                <p className="portfolio_bottom_heading">We would love to hear more
                    about your project</p>
                <div className="send_messages_circle">
                    <p className="send_messages">
                        Let's Talk Us<FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)', height: '18px' }} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PortFolio
