'use client'

import ComingSoon from "@/Components/ComingSoon/ComingSoon";
import Cursor from "@/Components/GSAP/Cursor";
import Achievements from "@/Components/Home/Achievements";
import Clients from "@/Components/Home/Clients";
import Focus from "@/Components/Home/Focus";
import HorizontalSlider from "@/Components/Home/HorizontalSlider";
import Journal from "@/Components/Home/Journal";
import Marquee from "@/Components/Home/Marqee";
import SideNav from "@/Components/Home/SideNav";
import TopSection from "@/Components/Home/TopSection";
import { lightTheme } from "@/constants/theme";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <div className="bg-green bg-blend-darken" style={{overflow:'hidden'}}>
      {/* <SideNav/> */}
      <Cursor theme={theme}/>
      <TopSection/>
      <Marquee/>
      <Focus/>
      <HorizontalSlider/>
      {/* <Clients/> */}
      <ComingSoon text='Clients'/>
      <Journal/>
      <Achievements/>  
    </div>
  );
}
