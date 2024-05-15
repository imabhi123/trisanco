import React from 'react'
import WhySmall from './WhySmall'

const HSComponent3 = () => {
    return (
        <div className='scroller_third_main'>
            <div className="scroller_third_first_half">
                <p className="scroller_third_heading" style={{ fontSize: '18px', fontWeight: "600", width: '110px' }}>WHY CHOOSE US</p>
                <p className="scroller_third_title" style={{ fontSize: '40px', fontWeight: "600", marginLeft: "15%" }}>TRUST US TO BRING YOUR VISION TO LIFE WITH COST-EFFECTIVE SOLUTIONS.</p>
                <p className="scroller_third_description" style={{ fontSize: '16px', fontWeight: "600", marginLeft: "25%" }}>Rely on Us to Realize Your Vision with Budget-Friendly Solutions.
                    At Trisanco Technologies, we boast a team of highly skilled and seasoned developers renowned for delivering top-notch, cost-efficient, tailored solutions to fulfill the unique requirements of each client.
                </p>
            </div>
            <div className="scroller_third_second_half">
                <WhySmall text={`Navigating through your marketing strategy for optimal performance shouldn't be a shot in the dark.`} heading={'EXPERIENCE & SKILLSET'} left={'auto'} right={'auto'} />
                <WhySmall text={`Your marketing strategy shouldn't be a gamble when it comes to optimizing performance.`} heading={`TAILOR-MADE SOLUTIONS`} />
                <WhySmall text={`Don't take chances with your marketing strategy's performance optimization.`} heading={`COST-EFFECTIVE PRICING`} />
            </div>
        </div>
    )
}

export default HSComponent3
