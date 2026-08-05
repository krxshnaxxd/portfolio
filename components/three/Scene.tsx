"use client";

import { Canvas } from "@react-three/fiber";

import {
  Float,
  Stars,
  Environment
} from "@react-three/drei";

import HeroModel from "./HeroModel";
import FloatingIcons from "./FloatingIcons";
import CameraRig from "./CameraRig";
import Lights from "./Lights";

export default function Scene(){

return (

<Canvas

key="hero-canvas"

frameloop="always"

className="threeCanvas"

camera={{
position:[0,0,8],
fov:42
}}

dpr={[1,1.5]}

gl={{
antialias:false,
alpha:true,
powerPreference:"high-performance"
}}

>

<CameraRig />

<Lights />

<Environment preset="city" />

<Stars
radius={100}
depth={60}
count={1200}
factor={4}
saturation={0}
fade
/>

<Float
speed={1.5}
rotationIntensity={0.25}
floatIntensity={0.45}
>

<HeroModel />

</Float>


<FloatingIcons />

</Canvas>

)

}