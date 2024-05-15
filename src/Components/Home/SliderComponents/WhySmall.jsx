import React from 'react'

const WhySmall = ({left,right,text,heading}) => {
    return (
        <div className='why_small_main' style={{marginLeft:left,marginRight:right}}>
            <div className="why_small_circle">
                <img src="https://manasvitechnologies.org/assets/imgs/icon/experience.png" alt="" className="why_small_img" />
            </div>
            <div className="why_small_content">
                <p className="why_small_title">{heading}</p>
                <p className="why_small_desc">{text}</p>
            </div>
        </div>
    )
}

export default WhySmall
