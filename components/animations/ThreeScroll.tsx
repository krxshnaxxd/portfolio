"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function ThreeScroll(){

  useEffect(()=>{

    const sphere =
      document.querySelector(".sphere");


    if(!sphere) return;


    gsap.to(sphere,{
      rotation: 360,
      scrollTrigger:{
        trigger: document.body,
        start:"top top",
        end:"bottom bottom",
        scrub:true,
      }
    });


  },[]);


  return null;

}