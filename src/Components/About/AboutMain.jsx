'use client'

import React from 'react'
import '../Home/css/home.css'
import '../About/css/about.css'
const AboutMain = () => {
    return (
        <div className='about_main_top'>
            <div className="about_main_top_content">
                <h1 className="elementor-heading-title elementor-size-default wow words chars splitting animated" style={{ '--word-total': 7, '--char-total': 36, visibility: 'visible', color: 'white' }}>
                    DrivingYour<span className='inner_span'>Success</span> in the <span className='inner_span'>Digital World.</span>
                </h1>
                <div className="about_us_img">
                    <p>
                        ABOUT US
                    </p>
                </div>
            </div>
            <div className="about_main_bottom_content">
                <div className="about_bottom_content_top">
                    <p className="about_bottom_heading">Welcome to Trisanco Innovations</p>
                    <p className="about_bottom_desc">At Trisanco Innovations, we are pioneers of technological innovation, merging cutting-edge technology with visionary thinking to redefine the realm of possibilities. With decades of expertise, we sculpt the future where every byte of data and every line of code shapes a new horizon. Welcome to a journey of transformation and endless possibilities.
                    </p>
                </div>
                <div className="about_bottom_content_bottom">
                    <div className="about_bottom_sections">
                        <p className="about_bottom_section_title">ABOUT US</p>
                        <p className="about_bottom_section_desc">Trisanco Innovations specializes in crafting bespoke solutions that harness the power of cloud technology to propel your business forward. Explore seamless scalability and top-tier cloud application development services as we pave the path to your success.
                        </p>
                    </div>
                    <div className="about_bottom_sections">
                        <p className="about_bottom_section_title">OUR GOALS</p>
                        <p className="about_bottom_section_desc">Guided by a mission to revolutionize business strategies, our goals are crystal clear: to deliver unparalleled solutions that empower your organization&apos;s growth, streamline operations, foster enduring partnerships, and secure sustained success.
                        </p>
                    </div>
                    <div className="about_bottom_sections">
                        <p className="about_bottom_section_title">OUR VALUES</p>
                        <p className="about_bottom_section_desc">At our core, we believe in building relationships founded on trust, delivering solutions that are both visionary and grounded, and nurturing the growth and evolution of your business in a dynamic market landscape.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMain
