"use client";


import { useFrame, useThree } from "@react-three/fiber";

import * as THREE from "three";



export default function CameraRig() {


  // Canvas ka camera aur mouse data le rahe hain

  const {

    camera,

    mouse

  } = useThree();



  // Har frame me run hota hai

  useFrame(() => {



    /*
    
    Mouse ki value:

    x = -1 se +1

    y = -1 se +1


    Example:

    Mouse left:
    x = -1


    Mouse right:
    x = 1

    */


    const targetX = mouse.x * 0.8;


    const targetY = mouse.y * 0.4;



    /*
    
    Camera jis position par jayega

    x = mouse ke hisab se

    y = mouse ke hisab se

    z = fixed distance


    z bada = camera peeche

    z chota = camera paas

    */


    const targetPosition = new THREE.Vector3(

      targetX,

      targetY,

      10

    );



    /*
    
    lerp = smooth movement


    0.05:

    slow smooth movement


    Agar 0.2 karoge:

    fast movement


    */


    camera.position.lerp(

      targetPosition,

      0.05

    );



    /*
    
    Camera ko center object ki taraf dekhna hai

    */


    camera.lookAt(

      0,

      0,

      0

    );



  });



  return null;


}