"use client";

import { EffectComposer, Bloom } from "@react-three/postprocessing";


export default function PostProcessing(){

  return (

    <EffectComposer>

      <Bloom

        intensity={1.5}

        luminanceThreshold={0}

        luminanceSmoothing={0.9}

        mipmapBlur

      />

    </EffectComposer>

  );

}