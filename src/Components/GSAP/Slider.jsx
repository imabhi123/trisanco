'use client'

import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { styled } from "@mui/material";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Image = styled("img")(({ theme }) => ({
    width: "100vh",
    height: "100vh",
    objectFit:'cover',
    transform:'rotate(-90deg)',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 180
    }
}));

const Slider = () => {

    const navData = [
        {
            url: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
            text: "Top Offers",
        },
        {
            url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
            text: "Grocery",
        },
        {
            url: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
            text: "Mobile",
        },
        {
            url: "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
            text: "Fashion",
        }, 
        {
            url: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
            text: "Electronics",
        },
        {
            url: "https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100",
            text: "Home",
        },
        {
            url: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
            text: "Appliances",
        },
        {
            url: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
            text: "Travel",
        },
        {
            url: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
            text: "Beauty, Toys & More",
        },
    ];
    const bannerData = [
        {
            id: 1,
            url: "https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50",
        },
        {
            id: 2,
            url: "https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50",
        },
        {
            id: 3,
            url: "https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50",
        },
        {
            id: 4,
            url: "https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50",
        },
    ];
    const imageURL = [
        "https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg",
        "https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50",
    ];

    return (
        <Carousel
            responsive={responsive}
            className="slider_carousel"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            infinite={true}
            swipeable={true}
            draggable={true}
            autoPlay={true}
            arrows={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            slidesToSlide={1}
        >
            {bannerData.map((e) => {
                return <Image src={e.url} alt="Banner" />;
            })}
        </Carousel>
    );
};

export default Slider;
