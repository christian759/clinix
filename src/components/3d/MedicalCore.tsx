import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

export function MedicalCore(props: any) {
    const group = useRef<THREE.Group>(null);
    const ring1 = useRef<THREE.Mesh>(null);
    const ring2 = useRef<THREE.Mesh>(null);
    const core = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (group.current) {
            // Swaying motion
            group.current.rotation.z = Math.sin(t * 0.1) * 0.1;
            group.current.rotation.x = Math.cos(t * 0.1) * 0.1;
        }
        if (ring1.current) {
            ring1.current.rotation.x = t * 0.2;
            ring1.current.rotation.y = t * 0.1;
        }
        if (ring2.current) {
            ring2.current.rotation.x = -t * 0.15;
            ring2.current.rotation.y = t * 0.25;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group ref={group} {...props}>
                {/* Central Glass Core */}
                <mesh ref={core}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <MeshTransmissionMaterial
                        backside
                        thickness={1}
                        roughness={0}
                        transmission={1}
                        ior={1.5}
                        chromaticAberration={0.4}
                        anisotropy={0.5}
                        distortion={0.2}
                        distortionScale={0.5}
                        temporalDistortion={0.5}
                        color="#ffffff"
                        background={new THREE.Color('#ffffff')}
                    />
                </mesh>

                {/* Internal Emissive Structure */}
                <Icosahedron args={[1.2, 0]} position={[0, 0, 0]}>
                    <meshStandardMaterial
                        emissive="#4338ca"
                        emissiveIntensity={4}
                        color="#000"
                        wireframe
                    />
                </Icosahedron>
                <Icosahedron args={[1.4, 0]} position={[0, 0, 0]}>
                    <meshBasicMaterial
                        color="#818cf8"
                        wireframe
                        transparent
                        opacity={0.2}
                    />
                </Icosahedron>

                {/* Orbital Rings - Metallic/Glass */}
                <mesh ref={ring1}>
                    <torusGeometry args={[3, 0.05, 16, 100]} />
                    <meshStandardMaterial
                        color="#e0e7ff"
                        metalness={1}
                        roughness={0}
                        emissive="#ffffff"
                        emissiveIntensity={0.5}
                    />
                </mesh>

                <mesh ref={ring2} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[3.5, 0.02, 16, 100]} />
                    <meshStandardMaterial
                        color="#a5b4fc"
                        metalness={1}
                        roughness={0}
                        transparent
                        opacity={0.5}
                    />
                </mesh>

                {/* Floating Data Particles */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <mesh key={i} position={[
                        (Math.random() - 0.5) * 8,
                        (Math.random() - 0.5) * 8,
                        (Math.random() - 0.5) * 8
                    ]}>
                        <sphereGeometry args={[0.05, 8, 8]} />
                        <meshBasicMaterial color="#6366f1" />
                    </mesh>
                ))}
            </group>
        </Float>
    );
}
