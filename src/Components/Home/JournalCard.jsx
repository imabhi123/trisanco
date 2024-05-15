import React, { useRef } from 'react';

const JournalCard = () => {
    const triggerRef = useRef(null);

    const handleScroll = () => {
        // Scroll by 380px with a delay of 0.5 seconds
        setTimeout(() => {
            triggerRef.current.scrollLeft += 380;
        }, 100);
    };

    const handleLeave = () => {
        // Scroll back by 380px with a delay of 0.5 seconds
        setTimeout(() => {
            triggerRef.current.scrollLeft -= 380;
        }, 100);
    };

    return (
        <div className='journalcard_main_component'>
            <div
                className='trigger'
                style={{
                    width: '380px',
                    height: '450px',
                    display: 'flex',
                    overflowX: 'auto', // Ensure horizontal scrolling is enabled
                    scrollBehavior: 'smooth', // Smooth scrolling effect
                    transition: 'scrollLeft 0.4s ease', // CSS transition for smooth scrolling
                }}
                ref={triggerRef}
                onMouseEnter={handleScroll}
                onMouseLeave={handleLeave}
            >
                <img src="https://manasvitechnologies.org/assets/imgs/blog/1i.png" className='journalcard_img' alt="" />
                <img src="https://manasvitechnologies.org/assets/imgs/blog/1i.png" className='' alt="" />
            </div>
            <p className="journalcard_desc">Website Development . 28 feb 2023</p>
            <p className="journalcard_caption">Web Design vs. Web Development: What&apos;s the Difference and Why It Matters?</p>
        </div>
    );
};

export default JournalCard;
