import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Loader from "@/components/animations/Loader";
import SmoothScroll from "@/components/smooth/SmoothScroll";
import CustomCursor from "@/components/animations/CustomCursor";
import ScrollProgress from "@/components/animations/ScrollProgress";
import MouseGlow from "@/components/animations/MouseGlow";


export const metadata = {

  title: "Anant Salotri | Frontend Developer",

  description:
    "Frontend Developer creating immersive web experiences using React, Next.js & Three.js.",

  openGraph: {

    title: "Anant Salotri | Frontend Developer",

    description:
      "Frontend Developer creating immersive web experiences using React, Next.js & Three.js.",

    images:[
      {
        url:"/logo/avatar.png",
        width:1200,
        height:630,
        alt:"Anant Salotri Portfolio",
      }
    ],

  },


  twitter:{
    card:"summary_large_image",
    title:"Anant Salotri | Frontend Developer",
    description:
      "Frontend Developer creating immersive web experiences using React, Next.js & Three.js.",
    images:["/logo/avatar.png"],
  },


  icons:{
    icon:"/logo/favicon.png",
    shortcut:"/logo/favicon.png",
    apple:"/logo/favicon.png",
  }

};



export default function RootLayout({

children,

}: Readonly<{

children:React.ReactNode;

}>) {


return (

<html lang="en">

<body>


<Loader />

<ScrollProgress />

<MouseGlow />

<CustomCursor />


<Navbar />


<SmoothScroll>

{children}

</SmoothScroll>


</body>

</html>

);

}