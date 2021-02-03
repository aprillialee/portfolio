import { Canvas } from "react-three-fiber";

import Sphere from "./Sphere";

import { Suspense } from "react";

import { PointerLockControls } from "@react-three/drei";

function Background() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <PointerLockControls
          isLocked={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI}
        />
        <Sphere />
      </Suspense>
    </Canvas>
  );
}

export default Background;
