import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function OrbitingSphere({ color, startAngle, mergeProgress }) {
  const meshRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;

    // Orbit radius shrinks as merge progress increases
    const radius = THREE.MathUtils.lerp(2, 0, mergeProgress);
    const angle = startAngle + t * 0.8;

    meshRef.current.position.x = Math.cos(angle) * radius;
    meshRef.current.position.y = Math.sin(angle) * radius * 0.5;
    meshRef.current.position.z = Math.sin(angle) * 0.5;

    // Scale up slightly when merging
    const s = THREE.MathUtils.lerp(0.5, 0.8, mergeProgress);
    meshRef.current.scale.setScalar(s);

    // Glow pulse
    if (glowRef.current) {
      glowRef.current.scale.setScalar(s * (1.3 + Math.sin(t * 3) * 0.1));
      glowRef.current.material.opacity = THREE.MathUtils.lerp(0.15, 0.3, mergeProgress);
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

function MergedSphere({ mergeProgress }) {
  const meshRef = useRef();
  const particlesRef = useRef();

  const particlePositions = useMemo(() => {
    const pos = new Float32Array(50 * 3);
    for (let i = 0; i < 50; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 0.8 + Math.random() * 0.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = t * 0.3;
    meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;

    const s = mergeProgress * 0.9;
    meshRef.current.scale.setScalar(s);
    meshRef.current.material.opacity = mergeProgress;

    if (particlesRef.current) {
      particlesRef.current.rotation.y = -t * 0.2;
      particlesRef.current.material.opacity = mergeProgress * 0.6;
      const ps = mergeProgress * 1.2;
      particlesRef.current.scale.setScalar(ps);
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#7c3aed"
          emissiveIntensity={1}
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0}
        />
      </mesh>
      {/* Bokeh particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={50}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#e9d5ff"
          transparent
          opacity={0}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </Float>
  );
}

function Scene({ scrollProgress }) {
  const mergeProgress = Math.min(1, Math.max(0, (scrollProgress - 0.2) / 0.6));

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={1} color="#00ffc8" distance={10} />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#ff6b35" distance={10} />
      <OrbitingSphere color="#00ffc8" startAngle={0} mergeProgress={mergeProgress} />
      <OrbitingSphere color="#ff6b35" startAngle={Math.PI} mergeProgress={mergeProgress} />
      <MergedSphere mergeProgress={mergeProgress} />
    </>
  );
}

import useInView from '../hooks/useInView';

export default function MergeVisual3D({ scrollProgress = 0 }) {
  const [containerRef, isVisible] = useInView();

  return (
    <div ref={containerRef} style={{ width: '100%', height: '350px' }}>
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene scrollProgress={scrollProgress} />
        </Canvas>
      )}
    </div>
  );
}
