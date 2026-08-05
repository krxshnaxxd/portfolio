"use client";


import { useRef } from "react";


import { useFrame } from "@react-three/fiber";


import { useGLTF } from "@react-three/drei";


import * as THREE from "three";



export default function HeroModel(){



const {scene}=useGLTF("/models/hero.glb");



const modelRef = useRef<THREE.Group>(null);



useFrame((state)=>{


if(!modelRef.current)
return;



// slow rotation

modelRef.current.rotation.y += 0.004;




// smooth floating


modelRef.current.position.y =

Math.sin(

state.clock.elapsedTime * 1.2

)

*

0.08;



});




return(


<primitive


ref={modelRef}


object={scene}



scale={0.75}



position={[

0,

-0.25,

-0.8

]}



rotation={[

0,

0.5,

0

]}



/>


);


}



useGLTF.preload("/models/hero.glb");