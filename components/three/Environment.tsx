"use client";

import { Environment as DreiEnvironment } from "@react-three/drei";
import { Fog } from "three";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";


export default function Environment(){

  const { scene } = useThree();


  useEffect(()=>{

    scene.fog = new Fog(
      "#050014",
      5,
      20
    );


  },[scene]);


  return (

    <DreiEnvironment
      preset="night"
    />

  );

}