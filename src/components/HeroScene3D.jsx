import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ geometry, position, color, speed, rotationAxis }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = Math.sin(t) * 0.5 + rotationAxis[0] * t;
    meshRef.current.rotation.y = Math.cos(t * 0.7) * 0.5 + rotationAxis[1] * t;
    meshRef.current.rotation.z = Math.sin(t * 0.3) * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

function MouseLight() {
  const lightRef = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    if (!lightRef.current) return;
    const x = (state.pointer.x * viewport.width) / 2;
    const y = (state.pointer.y * viewport.height) / 2;
    lightRef.current.position.x += (x - lightRef.current.position.x) * 0.05;
    lightRef.current.position.y += (y - lightRef.current.position.y) * 0.05;
  });

  return <pointLight ref={lightRef} position={[0, 0, 5]} intensity={2} color="#00ffc8" distance={15} />;
}

function Scene() {
  const shapes = useMemo(() => {
    const geometries = [
      new THREE.IcosahedronGeometry(0.6, 0),
      new THREE.OctahedronGeometry(0.5, 0),
      new THREE.TorusKnotGeometry(0.35, 0.12, 64, 8, 2, 3),
      new THREE.TetrahedronGeometry(0.5, 0),
      new THREE.DodecahedronGeometry(0.45, 0),
      new THREE.TorusGeometry(0.4, 0.15, 8, 6),
    ];

    const colors = ['#00ffc8', '#6c63ff', '#00e6b4', '#8b5cf6', '#00ffc8', '#6c63ff', '#00d4a8'];

    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      geometry: geometries[i % geometries.length],
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6 - 2,
      ],
      color: colors[i % colors.length],
      speed: 0.15 + Math.random() * 0.25,
      rotationAxis: [
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        0,
      ],
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={0.15} />
      <MouseLight />
      <pointLight position={[-5, 3, 2]} intensity={0.5} color="#6c63ff" />
      {shapes.map((shape) => (
        <FloatingShape key={shape.id} {...shape} />
      ))}
    </>
  );
}

import useInView from '../hooks/useInView';

export default function HeroScene3D() {
  const [containerRef, isVisible] = useInView();

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          style={{ pointerEvents: 'auto' }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      )}
    </div>
  );
}
