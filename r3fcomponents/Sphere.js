import { BackSide } from "three";

import * as THREE from "three";

import { useLoader, useFrame } from "react-three-fiber";

function Sphere() {
  const texture = useLoader(THREE.TextureLoader, "/confetti.jpg");
  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[2, 10, 10]} />
      <meshBasicMaterial map={texture} side={BackSide} />
    </mesh>
  );
}

export default Sphere;
