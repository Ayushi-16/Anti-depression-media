import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import useLocalStorage from "use-local-storage";
import Quizing from "./quizing";

const Letstest = () => {
  const [x, setX] = useLocalStorage("Mode", false);
  const toggleTheme = () => {
    setX(!x);
  };
  const [weight, setWeight] = useState(0);
  return (
    <div
      className={`${
        x ? "dark" : ""
      } w-full h-screen scrollbar-thin scrollbar-thumb-[#FF5A5F] scrollbar-track-gray-500 overflow-y-scroll overscroll-x-none `}
    >
      <Head>
        <title>Let&apos;s Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Header onDarkToggle={toggleTheme} className="" />
      <Quizing />
      
    </div>
  );
};

export default Letstest;