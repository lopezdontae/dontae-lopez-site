import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

export default function ScrollRig() {
  const { camera } = useThree();
  const targetZ = useRef(40); // Initial camera Z position, far enough to see the massive D L
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = (e) => {
      const p = e.detail; // 0 to 1
      // When p=1, we want camera Z to be -10 (past the logo)
      // When p=0, camera Z is 40
      targetZ.current = 40 - (p * 50);
    };

    const handleMouseMove = (e) => {
      // normalized mouse coordinates from -1 to 1
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('virtual-scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('virtual-scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    // Lerp camera position based on scroll and mouse
    
    // Base scroll Z
    const currentZ = THREE.MathUtils.lerp(camera.position.z, targetZ.current, delta * 3);
    
    // Mouse parallax X/Y
    // Add subtle parallax to camera
    const targetX = mouse.current.x * 2;
    const targetY = mouse.current.y * 2;
    
    const currentX = THREE.MathUtils.lerp(camera.position.x, targetX, delta * 2);
    const currentY = THREE.MathUtils.lerp(camera.position.y, targetY, delta * 2);

    camera.position.set(currentX, currentY, currentZ);
    camera.lookAt(0, 0, 0); // Always look at center
  });

  return null;
}
