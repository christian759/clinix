import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export function MedicalCross(props: any) {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.2;
            group.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={group} {...props}>
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.8, 3, 0.8]} />
                    <meshStandardMaterial color="#4F46E5" roughness={0.3} metalness={0.1} />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[3, 0.8, 0.8]} />
                    <meshStandardMaterial color="#4F46E5" roughness={0.3} metalness={0.1} />
                </mesh>
            </group>
        </Float>
    );
}

export function Capsule(props: any) {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.x = state.clock.getElapsedTime() * 0.3;
            group.current.rotation.y = state.clock.getElapsedTime() * 0.2;
        }
    });

    return (
        <Float speed={3} rotationIntensity={1} floatIntensity={2}>
            <group ref={group} {...props}>
                <mesh position={[0, 0.5, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color="#10B981" roughness={0.2} />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
                    <meshStandardMaterial color="#10B981" roughness={0.2} />
                </mesh>
                <mesh position={[0, -0.5, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color="#F59E0B" roughness={0.2} />
                </mesh>
            </group>
        </Float>
    );
}

export function DnaHelix(props: any) {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.4;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={group} {...props}>
                {Array.from({ length: 10 }).map((_, i) => (
                    <group key={i} position={[0, (i - 4.5) * 0.4, 0]} rotation={[0, i * 0.5, 0]}>
                        <mesh position={[0.8, 0, 0]}>
                            <sphereGeometry args={[0.15, 16, 16]} />
                            <meshStandardMaterial color="#8B5CF6" />
                        </mesh>
                        <mesh position={[-0.8, 0, 0]}>
                            <sphereGeometry args={[0.15, 16, 16]} />
                            <meshStandardMaterial color="#6366F1" />
                        </mesh>
                        <mesh rotation={[0, 0, Math.PI / 2]}>
                            <cylinderGeometry args={[0.05, 0.05, 1.6, 8]} />
                            <meshStandardMaterial color="#E2E8F0" transparent opacity={0.5} />
                        </mesh>
                    </group>
                ))}
            </group>
        </Float>
    );
}
