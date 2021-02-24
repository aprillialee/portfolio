import { Canvas } from "react-three-fiber";

import styled from "styled-components";

import Sphere from "./Sphere";

import { Suspense } from "react";

import { PointerLockControls } from "@react-three/drei";

function Background() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <PointerLockControls
          isLocked={true}
          maxPolarAngle={Math.PI / 2.8}
          minPolarAngle={Math.PI / 2.5}
        />
        <Sphere />
      </Suspense>
    </Canvas>
  );
}

const Loading = styled.div``;

export default Background;
