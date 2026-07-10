"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, PointMaterial, Points } from "@react-three/drei";
import { useState, useRef, Suspense } from "react";
import * as random from "maath/random/dist/maath-random.esm";

function Particles(props: any) {
  const ref = useRef<any>(null);
  // Generate random positions for the particles
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#38BDF8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function BackgroundScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-background">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <Particles />
          </Float>
        </Suspense>
      </Canvas>
      {/* Overlay gradient to blend with the scene */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/80 to-background" />
    </div>
  );
}
