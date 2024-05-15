'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import QuestionCard from './QuestionCard'

const HSComponent2 = () => {

  const services = [
    {
        heading: "Websites Development",
        title: "Our expert web developers create custom web and web application solutions tailored to your business needs. We deliver a compelling web presence to help you grow your business using the latest web technologies."
    },
    {
        heading: "Mobile App Development",
        title: "We specialize in creating intuitive and engaging Android, iOS, and cross-platform applications for businesses, clients, and organizations that are loved and adapted by end-users very quickly."
    },
    {
        heading: "UI/UX Design",
        title: "From concept to information architecture, visual identity, and UI/UX design, our creative team helps design user interfaces that ensure seamless navigation and enhance user experience on your website or application."
    },
    {
        heading: "Digital Marketing",
        title: "Beyond traditional marketing, digital marketing encompasses a range of activities online. Our outstanding team of professionals works 24/7 to attract, connect, and convert your audience into sales through effective digital strategies."
    },
    {
        heading: "Branding and Strategy",
        title: "A strong brand is vital and should be developed with quality content and design. We craft logos and brand promotional materials that leave a lasting impression on your users, ensuring the best first impression for your brand."
    }
];


  return (
    <div className='scrollbar_second'>
      <p className="scrollbar_second_title">
        SOLUTION'S
        WE PROVIDE
      </p>
      <div className="scrollbar_second_inner_div">
        <div style={{ width: '40%', marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {services.map((e) => <QuestionCard content={e} />
          )}
        </div>
        <div className="scrollbar_second_img">
          <img src="https://manasvitechnologies.org/assets/imgs/thumb/img-white.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HSComponent2
