import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

export function MedicalCross(props: any) {
    const group = useRef<THREE.Group>(null);
    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,
        ior: 1.5,
        chromaticAberration: 0.2,
        backside: true,
    };

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.2;
            group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={group} {...props}>
                {/* Core Cross Structure - Glass */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 3.5, 1]} />
                    <MeshTransmissionMaterial {...materialProps} color="#6366f1" />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[3.5, 1, 1]} />
                    <MeshTransmissionMaterial {...materialProps} color="#818cf8" />
                </mesh>

                {/* Internal Glowing Core */}
                <mesh position={[0, 0, 0]}>
                    <octahedronGeometry args={[0.7]} />
                    <meshBasicMaterial color="#ffffff" toneMapped={false} />
                    <pointLight intensity={1} color="#ffffff" distance={3} decay={2} />
                </mesh>

                {/* Floating Bits */}
                <Octahedron args={[0.2]} position={[1.5, 1.5, 0.5]}>
                    <meshStandardMaterial emissive="#4f46e5" emissiveIntensity={2} color="#000" />
                </Octahedron>
                <Octahedron args={[0.15]} position={[-1.2, -1.8, -0.5]}>
                    <meshStandardMaterial emissive="#818cf8" emissiveIntensity={2} color="#000" />
                </Octahedron>
            </group>
        </Float>
    );
}

export function Capsule(props: any) {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
        }
    });

    return (
        <Float speed={3} rotationIntensity={1} floatIntensity={2}>
            <group ref={group} {...props}>
                {/* Outer Shell - Clear Glass */}
                <mesh>
                    <capsuleGeometry args={[0.6, 2.2, 32, 32]} />
                    <MeshTransmissionMaterial
                        thickness={0.1}
                        roughness={0.1}
                        transmission={0.95}
                        ior={1.4}
                        chromaticAberration={0.1}
                        background="white"
                    />
                </mesh>

                {/* Inner Medicine/Nanobots */}
                <group position={[0, 0, 0]}>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <mesh key={i} position={[
                            Math.sin(i) * 0.3,
                            (i - 3.5) * 0.25,
                            Math.cos(i) * 0.3
                        ]}>
                            <sphereGeometry args={[0.15, 16, 16]} />
                            <meshStandardMaterial
                                emissive={i % 2 === 0 ? "#10b981" : "#34d399"}
                                emissiveIntensity={2}
                                color="#000000"
                            />
                        </mesh>
                    ))}
                </group>

                {/* Metallic Ring */}
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <torusGeometry args={[0.62, 0.05, 16, 32]} />
                    <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
                </mesh>
            </group>
        </Float>
    );
}

export function DnaHelix(props: any) {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={group} {...props}>
                {/* Continuous smooth strand look using closely packed spheres/instancing concept simplified */}
                {Array.from({ length: 15 }).map((_, i) => {
                    const y = (i - 7) * 0.5;
                    const rotation = i * 0.6;

                    return (
                        <group key={i} position={[0, y, 0]} rotation={[0, rotation, 0]}>
                            {/* Connection */}
                            <mesh rotation={[0, 0, Math.PI / 2]}>
                                <cylinderGeometry args={[0.04, 0.04, 2, 8]} />
                                <meshStandardMaterial
                                    color="#e0e7ff"
                                    transparent
                                    opacity={0.3}
                                    emissive="#4338ca"
                                    emissiveIntensity={0.2}
                                />
                            </mesh>

                            {/* Nodes */}
                            <mesh position={[1, 0, 0]}>
                                <sphereGeometry args={[0.2, 16, 16]} />
                                <MeshTransmissionMaterial
                                    color="#6366f1"
                                    thickness={0.5}
                                    roughness={0}
                                    transmission={1}
                                />
                            </mesh>
                            <mesh position={[-1, 0, 0]}>
                                <sphereGeometry args={[0.2, 16, 16]} />
                                <MeshTransmissionMaterial
                                    color="#ec4899"
                                    thickness={0.5}
                                    roughness={0}
                                    transmission={1}
                                />
                            </mesh>

                            {/* Orbiting particles */}
                            <mesh position={[1.4, 0, 0]} scale={0.5}>
                                <sphereGeometry args={[0.1, 8, 8]} />
                                <meshBasicMaterial color="#818cf8" />
                            </mesh>
                        </group>
                    );
                })}
            </group>
        </Float>
    );
}
