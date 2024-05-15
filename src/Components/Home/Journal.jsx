import Link from 'next/link'
import React from 'react'
import JournalCard from './JournalCard'

const Journal = () => {
    return (
        <div className='journal_main_component'>
            <div className="journal_top_section">
                <p className="journal_heading">Updated
                    Journal</p>
                <p className="journal_desc">We help brands stand out through aweful,
                    elegant visual design. Our design mainly
                    philosophy.</p>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Link href={'/'} className='focus_explore' style={{ border: '1px solid white' }}>
                        <p className="journal_link">Reat All Journal</p>
                    </Link>
                </div>
            </div>
            <div className="all_journals">
                {
                    [0,0,0].map(()=><JournalCard/>)
                }
            </div>
        </div>
    )
}

export default Journal
