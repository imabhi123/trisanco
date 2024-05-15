'use client'

import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact } from '@fortawesome/free-brands-svg-icons'; // Import the specific icon

import SideNav from './SideNav';
import FullBar from './FullBar';
const TopSection = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <div className='top_section_main_div' style={{ position: 'relative', zIndex: '1', background: '' }}>
        <SideNav setFlag={setFlag} />
        <div className="strategy_div" style={{ display: 'flex' }}>
          <p className="strategy_div_text">
            Strategy, Design, Solution, Development
          </p>
          <p>...</p>
          {/* <FontAwesomeIcon icon={} className="react-icon" /> */}
        </div>
        <div className="deploy_div">
          <p className="small_deploy_text">
            let us design, develop and
          </p>
          <p className="big_deploy_text">
            Deploy Your
          </p>
          <div style={{ display: 'flex', color: 'white', alignItems: 'center', gap: '40px', width: '65vw' }}>
            <p className="big_deploy_text" style={{ marginTop: '20px' }}>Dreams</p>
            <p className="small_inner_big_text" style={{ color: '#a8a8a8', paddingTop: '35px' }}>
              With each and every one of our clients, we share a genuine passion for coming up with innovative solutions to problems.
            </p>
          </div>

          <div className="top_section_bottom_div_home">
            <img src="https://manasvitechnologies.org/assets/imgs/icon/arrow-down-big.png" alt="" className="top_section_bottom_div_home" />
            <div className="top_section_bottom_div_home_inner_div" >
              <p className="top_section_bottom_div_home_inner_div_first">
                10+
              </p>
              <p className="top_section_bottom_div_home_inner_div_second">
                Projects completed
                successfully
              </p>
              <img className='ball_img' src='https://manasvitechnologies.org/assets/imgs/hero/1/Ball-11.png' alt="" />
            </div>
          </div>
        </div>
        {/* <Scroll/> */}
      </div>
      {flag && <FullBar setFlag={setFlag} />}
    </>
  );
}

export default TopSection;
