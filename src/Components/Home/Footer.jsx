'use client'

import Link from 'next/link'
import React from 'react'
import logo from '../../Assets/img/trisanco (1).png'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='main_footer_component'>
            <div className="main_footer_component_first_part">
                <div className="main_footer_component_first_part_top" style={{ paddingBottom: '80px' }}>
                    <div style={{ flex: '1.5' }}>
                        <Link href={'/'} style={{fontSize:'46px',textDecoration:'none' , fontWeight:'700',color:'white',margin:'0'}}>Trisanco</Link>
                        <p className="footer_text_small">At Trisanco Infotech, we don't just build software; we build relationships, trust, and success stories. Let us be your partner in innovation and transformation.
</p>
                    </div>
                    <div style={{ position: 'relative', bottom: '20px' }}>
                        <p className="footer_text_title">Information</p>
                        <Link href={'/about-us'} style={{ textDecoration: 'none', display: 'block', fontWeight: '500', lineHeight: '30px' }} className='footer_text_small'>About Company</Link>
                        <Link href={'/portfolio'} style={{ textDecoration: 'none', display: 'block', fontWeight: '500', lineHeight: '30px' }} className='footer_text_small'>Portfolio</Link>
                        <Link href={'/blogs'} style={{ textDecoration: 'none', display: 'block', fontWeight: '500', lineHeight: '30px' }} className='footer_text_small'>Blogs</Link>
                        <Link href={'/contact'} style={{ textDecoration: 'none', display: 'block', fontWeight: '500', lineHeight: '30px' }} className='footer_text_small'>Contact us</Link>
                    </div>
                    <div style={{ position: 'relative', bottom: '20px' }}>
                        <p className="footer_text_title">Contact Us</p>
                        <p className="footer_text_small">117, Shri Ram Colony, Near SMH Hospital, Hoshangabad Road, Bhopal,Madhya Pradesh</p>
                        <p className="footer_text_small" style={{color:'white',cursor:'pointer'}}>+91 07554506621</p>
                        <Link href={'mailto:trisancoinfotech@gmail.com'} style={{ textDecoration: 'none', display: 'block', fontWeight: '500', lineHeight: '30px' }} className='footer_text_small'>trisancoinfotech@gmail.com</Link>
                    </div>
                </div>
                <div style={{ width: '100%', height: '1px', background: '#555' }}></div>
                <div className="main_footer_component_first_part_bottom">
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p className="footer_text_title" style={{ fontSize: '16px' }}>© {new Date().getFullYear()} | All rights reserved by</p>
                        <p className="footer_text_small" style={{ fontSize: '16px', margin: '0' }}>Trisanco Technologies</p>
                    </div>
                </div>
            </div>
            <div className="main_footer_component_second_part">
                <p className='main_footer_component_second_part_text'>Let’s make someting great together</p>
                <div className="main_footer_component_second_part_contact">
                    <Link href={'/contact'} className="focus_explore" style={{ border: '1px solid white' }}>
                        <p className="">Contact Us</p>
                    </Link>
                </div>
                <div className="main_footer_component_second_part_timings">
                    <p className='footer_text_title' style={{ fontSize: '18px', lineHeight: 'normal' }}>10 : 00 AM - 07 : 00 PM</p>
                    <p className='footer_text_small' style={{ lineHeight: 'normal', margin: '0' }}>Monday - Saturday</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
