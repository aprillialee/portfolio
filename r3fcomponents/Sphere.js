import { BackSide } from "three";

import * as THREE from "three";

import { useRef } from "react";

import { useLoader, useFrame } from "react-three-fiber";

function Sphere() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.005;
  });

  const texture = useLoader(THREE.TextureLoader, "/confetti.jpg");

  return (
    <mesh ref={mesh}>
      <sphereGeometry attach="geometry" args={[2, 10, 10]} />
      <meshBasicMaterial map={texture} side={BackSide} />
    </mesh>
  );
}

export default Sphere;
