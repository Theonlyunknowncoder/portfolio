import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const techStack = [
  { name: 'C/C++', color: '#00ffc8' },
  { name: 'Java', color: '#6c63ff' },
  { name: 'Flutter', color: '#00b4d8' },
  { name: 'Dart', color: '#00ffc8' },
  { name: 'Firebase', color: '#ff6b35' },
  { name: 'HTML', color: '#e34f26' },
  { name: 'CSS', color: '#264de4' },
  { name: 'Git', color: '#f05032' },
  { name: 'MySQL', color: '#00758f' },
  { name: 'Kotlin', color: '#7f52ff' },
  { name: 'DSA', color: '#00ffc8' },
  { name: 'Solving', color: '#6c63ff' },
];

function TechCube({ name, color, index, total }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const angle = (index / total) * Math.PI * 2;
  const radius = 3.2;
  const basePos = useMemo(
    () => [Math.cos(angle) * radius, Math.sin(angle) * radius * 0.5, Math.sin(angle) * 1.5],
    [angle, radius]
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    // Orbit
    const orbAngle = angle + t * 0.15;
    meshRef.current.position.x = Math.cos(orbAngle) * radius;
    meshRef.current.position.y = Math.sin(orbAngle) * radius * 0.45;
    meshRef.current.position.z = Math.sin(orbAngle) * 1.5;
    // Rotation
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.008;
    // Scale on hover
    const targetScale = hovered ? 1.4 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  return (
    <group ref={meshRef} position={basePos}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <RoundedBox
          args={[0.7, 0.7, 0.7]}
          radius={0.08}
          smoothness={4}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
          onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default'; }}
        >
          <meshStandardMaterial
            color={hovered ? color : '#1a1a2e'}
            emissive={color}
            emissiveIntensity={hovered ? 0.8 : 0.2}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </RoundedBox>
        <Text
          position={[0, -0.6, 0]}
          fontSize={0.18}
          color={hovered ? color : '#8888aa'}
          anchorX="center"
          anchorY="top"
          font={undefined}
        >
          {name}
        </Text>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 5]} intensity={1.5} color="#00ffc8" distance={12} />
      <pointLight position={[-3, 3, 2]} intensity={0.6} color="#6c63ff" distance={10} />
      <pointLight position={[3, -2, 2]} intensity={0.4} color="#00e6b4" distance={8} />
      {techStack.map((tech, i) => (
        <TechCube
          key={tech.name}
          name={tech.name}
          color={tech.color}
          index={i}
          total={techStack.length}
        />
      ))}
    </>
  );
}

import useInView from '../hooks/useInView';

export default function TechCube3D() {
  const [containerRef, isVisible] = useInView();

  return (
    <div ref={containerRef} style={{ width: '100%', height: '400px', position: 'relative' }}>
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      )}
    </div>
  );
}
