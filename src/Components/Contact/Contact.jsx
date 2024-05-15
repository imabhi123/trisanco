'use client'

import React from 'react'
import '../Home/css/home.css'
import './css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    return (
        <div className='contact_main_div'>
            <div className="contact_top_section">
                <p className="contact_main_heading">Let’s get in touch</p>
                <p className="contact_main_desc">Great! We're excited to hear from you and let's start something special togerter. call us for any inquery.</p>
            </div>

            <div className="contact_bottom_section">
                <div className="contact_bottom_content">
                    <p className="contact_bottom_title">Don't­ be­ afraid­ man­ !</p>
                    <p className="contact_bottom_title">­ say ­hello</p>
                    <p className="contact_bottom_info">+91 89826 57135</p>
                    <p className="contact_bottom_info">info@manasvitechnologies.org</p>
                    <p className="contact_bottom_info" style={{textDecoration:'none'}}>Manasvi Technologies, Arya Nagar,
                        Kohka, Bhilai, Chhattisgarh 490023</p>
                </div>
                <div className='contact_bottom_form_main'>
                    <div className="contact_bottom_form">
                        <input placeholder='Name*' type="text" />
                        <input placeholder='Email*' type="text" />
                        <input placeholder='Phone' type="text" />
                        <input placeholder='Subject*' type="text" />
                        <textarea placeholder='Messages*' name="" id=""></textarea>
                    </div>
                    <div className="send_messages_circle">
                        <p className="send_messages">
                            Send Messages<FontAwesomeIcon icon={faArrowRight} style={{transform:'rotate(-45deg)'}}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
