import { Canvas } from "react-three-fiber";

import Sphere from "./Sphere";

import { Suspense } from "react";

function Background() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
    </Canvas>
  );
}

export default Background;
