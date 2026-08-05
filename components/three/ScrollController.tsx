"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

export const scrollValue = {
  current: 0,
};


export default function ScrollController() {


  useEffect(() => {

    const handleScroll = () => {

      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;


      scrollValue.current =
        window.scrollY / maxScroll;

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  }, []);


  return null;
}