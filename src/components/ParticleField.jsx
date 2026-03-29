import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 400;

function Particles({ progress = 0 }) {
  const pointsRef = useRef();
  const initialPositions = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return positions;
  }, []);

  const velocities = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, () => ({
      vx: (Math.random() - 0.5) * 0.02,
      vy: (Math.random() - 0.5) * 0.02,
      vz: (Math.random() - 0.5) * 0.01,
      phase: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position.array;
    const colors = pointsRef.current.geometry.attributes.color.array;
    const t = state.clock.elapsedTime;

    // Coder color (teal)
    const coderR = 0 / 255, coderG = 255 / 255, coderB = 200 / 255;
    // Creator color (orange)
    const creatorR = 255 / 255, creatorG = 107 / 255, creatorB = 53 / 255;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const vel = velocities[i];

      // Swirl effect based on progress
      const swirl = progress * 2;
      const angle = t * 0.3 + vel.phase + swirl;
      const expandFactor = 1 + progress * 1.5;

      positions[i3] = initialPositions[i3] * expandFactor + Math.sin(angle) * vel.vx * 50;
      positions[i3 + 1] = initialPositions[i3 + 1] * expandFactor + Math.cos(angle * 0.7) * vel.vy * 50;
      positions[i3 + 2] = initialPositions[i3 + 2] + Math.sin(t * 0.5 + vel.phase) * 0.3;

      // Color transition
      const p = Math.min(1, Math.max(0, progress));
      colors[i3] = THREE.MathUtils.lerp(coderR, creatorR, p);
      colors[i3 + 1] = THREE.MathUtils.lerp(coderG, creatorG, p);
      colors[i3 + 2] = THREE.MathUtils.lerp(coderB, creatorB, p);
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.color.needsUpdate = true;
  });

  const colorArray = useMemo(() => {
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      colors[i * 3] = 0;
      colors[i * 3 + 1] = 1;
      colors[i * 3 + 2] = 0.78;
    }
    return colors;
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={initialPositions.slice()}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colorArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

import useInView from '../hooks/useInView';

export default function ParticleField({ progress = 0 }) {
  const [containerRef, isVisible] = useInView();

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true }}
        >
          <Particles progress={progress} />
        </Canvas>
      )}
    </div>
  );
}
