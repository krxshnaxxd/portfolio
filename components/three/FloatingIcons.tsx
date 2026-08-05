"use client";

import { Float, Html } from "@react-three/drei";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
} from "react-icons/si";


const icons = [

  {
    icon:<SiReact />,
    position:[2,1,0],
  },

  {
    icon:<SiNextdotjs />,
    position:[0,2,0],
  },

  {
    icon:<SiGithub />,
    position:[2,-1,0],
  },

  {
    icon:<SiJavascript />,
    position:[0,-2,0],
  },

  {
    icon:<SiTypescript />,
    position:[-2,-1,0],
  },

  {
    icon:<SiMongodb />,
    position:[-2,1,0],
  },

  {
    icon:<SiNodedotjs />,
    position:[0,-1.8,0],
  },

];



export default function FloatingIcons(){

return (

<>


{
icons.map((item,index)=>(


<Float

key={index}
speed={1.2}

rotationIntensity={0.15}

floatIntensity={0.3}

>


<group

position={
item.position as [
number,
number,
number
]
}

>


<Html center>


<div className="iconBubble">


{item.icon}


</div>


</Html>


</group>


</Float>


))

}


</>

);

}