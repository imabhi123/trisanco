'use client'

import React, { useRef, useState, useEffect } from 'react';

const CustomScrollbar = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollTop } = contentRef.current;
      setScrollLeft(scrollLeft);
      setScrollTop(scrollTop);
    };

    contentRef.current.addEventListener('scroll', handleScroll);
    return () => {
      contentRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleVerticalScroll = (e) => {
    const { deltaY } = e;
    contentRef.current.scrollLeft += deltaY;
    setScrollLeft(contentRef.current.scrollLeft);
  };

  return (
    <div
      className="custom-scrollbar"
      onWheel={handleVerticalScroll}
      style={{ overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap',height:'100vh' }}
    >
      <div
        ref={contentRef}
        style={{ overflowY: 'hidden', whiteSpace: 'nowrap', width: '200%' }}
      >
        <div style={{width:'100vw',height:'10px'}}></div>
        <div style={{ width: '50%', display: 'inline-block' }}>Content 1</div>
        <div style={{ width: '50%', display: 'inline-block' }}>Content 2</div>
      </div>
    </div>
  );
};

export default CustomScrollbar;
