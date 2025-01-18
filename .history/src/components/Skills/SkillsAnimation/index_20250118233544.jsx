import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Image, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import image from "../../../assets/images/react.png"

const FloatingLogos = ({ images }) => {
  const groupRef = useRef();
  const positions = random.inSphere(new Float32Array(images.length * 3), { radius: 2 });

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    groupRef.current.rotation.y = elapsed * 0.1; // Rotate on Y-axis
    groupRef.current.rotation.x = Math.sin(elapsed * 0.1) * 0.1; // Oscillate on X-axis
  });

  return (
    <group ref={groupRef}>
      {images.map((src, index) => (
        <Image
          key={index}
          url={src}
          scale={[0.3, 0.3, 1]} // Adjust image size
          position={[
            positions[index * 3],
            positions[index * 3 + 1],
            positions[index * 3 + 2],
          ]}
          transparent
        />
      ))}
    </group>
  );
};

const SkillsAnimation = () => {
  const imageUrls = [
    image,
    
  ];

  return (
    <div className="w-full h-screen fixed inset-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <FloatingLogos images={imageUrls} />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SkillsAnimation;
