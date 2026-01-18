import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { SoftShadows } from '@react-three/drei';
import * as THREE from 'three';

const Sun = () => {
    const light = useRef<THREE.DirectionalLight>(null);
    const { scrollYProgress } = useScroll();

    useFrame(() => {
        if (light.current) {
            // Map scroll (0 to 1) to X position (East to West)
            // Start at X = 20 (East), End at X = -20 (West)
            const currentScroll = scrollYProgress.get();
            const xPos = 20 - (currentScroll * 40);

            // Y position creates an arc (high at noon/mid-page)
            const yPos = 10 + Math.sin(currentScroll * Math.PI) * 10;

            light.current.position.set(xPos, yPos, 10);
            light.current.intensity = 2 + Math.sin(currentScroll * Math.PI) * 2; // Brighter in middle
        }
    });

    return (
        <directionalLight
            ref={light}
            castShadow
            position={[20, 10, 10]}
            intensity={2}
            shadow-mapSize={[2048, 2048]}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
        >
            <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20]} />
        </directionalLight>
    );
};

const Backdrop = () => {
    return (
        <mesh receiveShadow position={[0, -5, -5]} rotation={[-Math.PI / 4, 0, 0]} scale={100}>
            <planeGeometry />
            <meshStandardMaterial color="#f1f5f9" roughness={0.8} />
        </mesh>
    );
};

// Abstract shapes to cast shadows
const ShadowCasters = () => {
    return (
        <group position={[0, 0, 5]}>
            {/* Invisible objects just for casting shadows on the backdrop */}
            {[...Array(5)].map((_, i) => (
                <mesh key={i} position={[(i - 2) * 8, 10, 0]} rotation={[Math.random(), Math.random(), 0]} visible={false}>
                    <boxGeometry args={[2, 20, 2]} />
                    <meshStandardMaterial />
                </mesh>
            ))}
            {/* Actual visible abstract structures at the edges */}
            <mesh position={[15, 5, 0]} rotation={[0, 0, -0.5]} castShadow receiveShadow>
                <boxGeometry args={[2, 20, 2]} />
                <meshStandardMaterial color="#cbd5e1" />
            </mesh>
            <mesh position={[-15, -5, 0]} rotation={[0, 0, 0.5]} castShadow receiveShadow>
                <boxGeometry args={[2, 15, 2]} />
                <meshStandardMaterial color="#cbd5e1" />
            </mesh>
        </group>
    );
};


export const GlobalLighting = () => {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
            <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 20], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <Sun />
                <Backdrop />
                <ShadowCasters />
                <fog attach="fog" args={['#f8fafc', 5, 40]} />
            </Canvas>
        </div>
    );
};
