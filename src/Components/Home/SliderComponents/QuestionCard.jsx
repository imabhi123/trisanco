'use client'

import React, { useState } from 'react'

const QuestionCard = ({content}) => {
    const [flag, setFlag] = useState(false);
    return (
        <>
            <div className="scrollbar_second_technologies" onClick={()=>setFlag(!flag)} style={{border:`${flag?'2px solid white':''}`,padding:"0 10px"}}>
                <p className="scrollbar_second_tech_name">
                    {content.heading}
                </p>
                <div className="scrollbar_second_plus_icon">
                    +
                </div>
            </div>
            {flag&&<div className="scrollbar_second_tech_desc" style={{marginLeft:'40px'}}>
               {content.title}
            </div>}
        </>
    )
}

export default QuestionCard
