"use client";

import { useEffect, useState } from "react";


export default function Loader(){

  const [show,setShow] = useState(true);


  useEffect(()=>{

    const timer = setTimeout(()=>{

      setShow(false);

    },2000);


    return ()=>clearTimeout(timer);


  },[]);



  if(!show) return null;


  return (

    <div
      className="
      fixed
      inset-0
      z-[9999]
      bg-black
      flex
      items-center
      justify-center
      text-white
      "
    >

      <h1
      className="
      text-6xl
      font-bold
      text-purple-500
      "
      >

      LOADING...

      </h1>


    </div>

  );

}