"use client";


import { Html } from "@react-three/drei";


import {

FaReact,

FaNodeJs,

FaGithub

} from "react-icons/fa";


import {

SiNextdotjs,

SiTypescript,

SiJavascript,

SiMongodb,

SiThreedotjs

} from "react-icons/si";



const icons = [


{

icon:<FaReact/>,

position:[-1.8,1.1,0]

},


{

icon:<SiNextdotjs/>,

position:[1.8,1.3,0]

},


{

icon:<SiTypescript/>,

position:[-1.8,-1.2,0]

},


{

icon:<SiJavascript/>,

position:[1.8,-1.4,0]

},


{

icon:<SiThreedotjs/>,

position:[0,2,0]

},


{

icon:<FaNodeJs/>,

position:[0,-2,0]

},


{

icon:<SiMongodb/>,

position:[-2.6,0,0]

},


{

icon:<FaGithub/>,

position:[2.6,0,0]

}


];




export default function FloatingIcons(){



return(


<>


{

icons.map((item,index)=>(


<Html


key={index}


position={

item.position as [

number,

number,

number

]

}


center


>


<div className="iconBubble">


{item.icon}


</div>


</Html>


))


}


</>


);


}