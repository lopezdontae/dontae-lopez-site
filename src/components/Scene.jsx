import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text3D, Center, MeshDistortMaterial } from '@react-three/drei';

export default function Scene() {
  const groupRef = useRef();

  return (
    <>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#555555" />

      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Center>
          <group ref={groupRef}>
            <Text3D
              font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
              size={12}
              height={4}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.5}
              bevelSize={0.2}
              bevelOffset={0}
              bevelSegments={5}
            >
              D L
              <MeshDistortMaterial
                color="#222222"
                roughness={0.1}
                metalness={0.8}
                distort={0.2}
                speed={1.5}
              />
            </Text3D>
          </group>
        </Center>
      </Float>

      {/* Adding some subtle particles or dust can enrich the Yuga aesthetic */}
      <Particles />
    </>
  );
}

function Particles() {
  const pointsRef = useRef();
  
  // Create 1000 random particles spread across a wide area
  const count = 1000;
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      // spread particles out
      arr[i] = (Math.random() - 0.5) * 100;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#ffffff" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}
