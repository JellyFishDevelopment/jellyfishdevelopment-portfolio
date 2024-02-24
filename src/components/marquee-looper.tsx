"use client"
import Marquee from "react-fast-marquee";
import LogosTech from "@/components/logos-tech";
import { useEffect, useState } from "react";

export default function MarqueeLooper() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Verifique se a classe "dark" está presente na tag HTML
    const isDarkMode = document.documentElement.classList.contains('dark');
    setDarkMode(isDarkMode);
  }, []);

  return (
    <Marquee autoFill gradient gradientColor={darkMode ? "#040102" : "#fdf7f9"} speed={20}>
      <LogosTech />
    </Marquee>
  )
}