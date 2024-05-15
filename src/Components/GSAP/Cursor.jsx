'use client'

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Cursor = ({ theme }) => {
  const [isHoveringP, setIsHoveringP] = useState(false);
  const [black, setBlack] = useState(false);

  useEffect(() => {
    gsap.set('.ball', { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray('.ball');

    const handleMove = (e) => {
      const clientX = e.clientX; // Handle touch events
      const clientY = e.clientY; // Handle touch events

      gsap.to(targets, {
        duration: 0.5,
        x: clientX,
        y: clientY,
        ease: 'power1.out',
        overwrite: 'auto',
        stagger: 0.02,
        height: isHoveringP ? '50px' : '30px',
        width: isHoveringP ? '50px' : '30px',
      });
    };

    const handleMouseEnter = (e) => {
      setIsHoveringP(e.target.tagName.toLowerCase() === 'p' || e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'h1' || e.target.tagName.toLowerCase() === 'h2' || e.target.tagName.toLowerCase() === 'span' || containsAny(e.target.classList, ['searchh', 'cart', 'cursor-element', 'banner_3_button']));
      setBlack(containsAny(e.target.classList, ['Footer_footer__1tiND', 'banner_3_button','Footer_main__c7Ege', 'Footer_content__WRmDp', 'Footer_masked__q_h_v', 'Footer_inner__XKbDZ', 'Footer_fade__7xt9Y', 'footer_first_half', 'footer_first_inner_div', 'footer_inner_heading', 'footer_inner_items', 'Footer_right__RxVzC', 'Footer_newsletter__5vX_y', 'heading-1-xl', 'Footer_form__Mfg20', 'SignupInput_signup-input__5_Ida', 'SignupInput_label__LGSfw', 'SignupInput_signup-input-container__8dBNi', 'Button_button__6kS7R', 'Button_m__QruPa', 'Button_primary__3_h20', 'Button_disabled__DAAHh', 'Button_icon-only__1XjNv', 'Button_inversed__fEqGS', 'Button_button-content__YAp0j', 'Button_icon__Q3CYu', 'Button_button-children__Ww8Sr', 'Button_negative__flxKw', 'Footer_channels__aWhnQ', 'Footer_bottom__2QLm1', 'caption-m', 'nav_main', 'nav_main_center', 'menu_button', 'nav_main_logo', 'nav_links', 'nav_main_last', 'nav_main_item', 'links_pages', 'SignupInput_signup-input-element___YTGr', 'searchh', 'cart', 'logo']));
    };

    const handleMouseLeave = (e) => {
      if (e.target.tagName?.toLowerCase() === 'p') {
        setIsHoveringP(false);
        setBlack(false);
      }
    };

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mousemove', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mousemove', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
    };
  }, [isHoveringP]);

  // Function to check if any element in the list contains any of the specified classNames
  const containsAny = (classList, classNames) => {
    for (let i = 0; i < classList.length; i++) {
      if (classNames.includes(classList[i])) {
        return true;
      }
    }
    return false;
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
      className='cursorr'
    >
      <div
        className="ball"
        style={{
          width: '7px',
          height: '5px',
          color: black ? 'white' : 'white', // Change cursor color based on black state
          backgroundColor: isHoveringP ? 'rgba(0,0,0,0.5)' : (black ? 'white' : theme.text),
          border: `2px solid ${black ? 'white' : "black"}`,
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <div style={{height:'5px',width:'5px',background:'white',borderRadius:'50%'}}></div>
      </div>
      <div className="ball" style={{ width: '20px', height: '10px', border: 'none' }} />
      <div className="ball rotate" style={{ width: '15px', height: '5px' }} />
    </div>
  );
};

export default Cursor;
