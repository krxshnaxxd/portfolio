"use client";

export default function Lights() {

  return (
    <>

      <ambientLight intensity={1.4} />

      <directionalLight
        position={[5,5,5]}
        intensity={3}
      />

      <pointLight
        position={[-5,4,4]}
        intensity={2}
        color="#8b5cf6"
      />

      <pointLight
        position={[5,-5,-5]}
        intensity={1.5}
        color="#4f8cff"
      />

      <spotLight
        position={[0,8,5]}
        intensity={3}
        angle={0.35}
        penumbra={1}
      />

    </>
  );

}