'use client'

// import React, { useRef } from 'react'
// import HSComponent1 from './SliderComponents/HSComponent1'
// import HSComponent2 from './SliderComponents/HSComponent2'

// const HorizontalSlider = () => {
//     const containerRef = useRef(null);

//     const handleScroll = () => {
//         console.log('abhishek')
//         const scrollLeft = containerRef.current.scrollTop;
//         containerRef.current.querySelector('.scroll-content').style.transform = `translateX(-${scrollLeft}px)`;
//     };

//     return (
//         <div className='horizontal_scrollbar' ref={containerRef} onScroll={handleScroll}>
//             <div className='scroll-content horizontal_scrollbar' >
//                 
//             </div>
//         </div>
//     )
// }

// export default HorizontalSlider
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HSComponent1 from "./SliderComponents/HSComponent1";
import HSComponent2 from "./SliderComponents/HSComponent2";
import HSComponent3 from "./SliderComponents/HSComponent3";

const Example = () => {
    return (
        <div className="horizontal_scrollbar">
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

    return (
        <section ref={targetRef} className="horizontal_scroll_behaviour relative h-[290vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden" style={{width:''}}>
                <motion.div style={{ x, display: 'flex' }} className="flex gap-4">
                    <HSComponent1 />
                    <HSComponent3/>
                    <HSComponent2 />
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default Example;

const cards = [
    {
        url: "/imgs/abstract/1.jpg",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/imgs/abstract/2.jpg",
        title: "Title 2",
        id: 2,
    },
    {
        url: "/imgs/abstract/3.jpg",
        title: "Title 3",
        id: 3,
    },
    {
        url: "/imgs/abstract/4.jpg",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/imgs/abstract/5.jpg",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/imgs/abstract/6.jpg",
        title: "Title 6",
        id: 6,
    },
    {
        url: "/imgs/abstract/7.jpg",
        title: "Title 7",
        id: 7,
    },
];
