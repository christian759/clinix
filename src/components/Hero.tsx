import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, ContactShadows, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { MedicalCross, Capsule, DnaHelix } from './3d/MedicalObjects';
import * as THREE from 'three';

const MovingLight = () => {
    const lightRef = useRef<THREE.PointLight>(null);
    const lightRef2 = useRef<THREE.PointLight>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (lightRef.current) {
            // Moves in a figure-8 pattern
            lightRef.current.position.x = Math.sin(time * 0.5) * 5;
            lightRef.current.position.y = Math.cos(time * 0.3) * 5;
            lightRef.current.position.z = Math.sin(time * 0.4) * 5 + 5;
        }
        if (lightRef2.current) {
            // Secondary light moves opposite
            lightRef2.current.position.x = Math.cos(time * 0.4) * 6;
            lightRef2.current.position.z = Math.sin(time * 0.6) * 4;
        }
    });

    return (
        <>
            <pointLight ref={lightRef} intensity={20} color="#6366f1" distance={15} decay={2} />
            <pointLight ref={lightRef2} intensity={15} color="#10b981" distance={15} decay={2} />
        </>
    );
};

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen pt-20 flex items-center bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas shadows gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}>
                    <PerspectiveCamera makeDefault position={[0, 0, 14]} fov={45} />
                    <ambientLight intensity={0.4} />
                    <MovingLight />
                    <Environment preset="city" blur={0.8} />

                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <MedicalCross position={[5, 1, -2]} rotation={[0.2, 0.5, 0]} scale={0.9} />
                    </Float>

                    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
                        <Capsule position={[-5, 3, -4]} rotation={[0.5, 0.2, 0.5]} scale={0.8} />
                    </Float>

                    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
                        <DnaHelix position={[6, -3, -6]} rotation={[0, 0, 0.2]} scale={1} />
                    </Float>

                    {/* Additional background elements for depth */}
                    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
                        <mesh position={[-6, -4, -8]} rotation={[1, 1, 0]}>
                            <torusGeometry args={[1, 0.2, 16, 32]} />
                            <meshStandardMaterial color="#818cf8" transparent opacity={0.3} roughness={0} metalness={0.5} />
                        </mesh>
                    </Float>

                    <ContactShadows position={[0, -5, 0]} opacity={0.4} scale={30} blur={2.5} far={4} color="#1e1b4b" />
                </Canvas>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
                        <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                        <span className="text-indigo-700 font-semibold text-sm tracking-wide uppercase">Trusted by 50k+ Patients</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold font-['Poppins'] text-slate-900 leading-[1.1] mb-6">
                        Healthcare <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Reimagined</span>
                    </h1>

                    <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                        Experience the future of medicine with our cutting-edge facilities and world-class specialists. fast, reliable, and personalized for you.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold text-lg hover:bg-indigo-700 hover:scale-105 transition-all shadow-xl shadow-indigo-200">
                            Schedule Visit
                        </button>
                        <button className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-semibold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all">
                            View Services
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-8">
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900">15k+</h3>
                            <p className="text-slate-500 font-medium">Happy Patients</p>
                        </div>
                        <div className="w-px h-12 bg-slate-200"></div>
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900">4.9/5</h3>
                            <p className="text-slate-500 font-medium">Average Rating</p>
                        </div>
                    </div>
                </motion.div>

                {/* The right side is open for the 3D scene to be visible, but we can add some floating Glassmorphism cards */}
                <div className="hidden lg:block relative h-[600px] pointer-events-none">
                    {/* 3D Canvas covers the background, so this div just reserves space in the grid */}
                    {/* We can overlay some UI cards here that look like they are floating */}
                </div>
            </div>

            {/* Floating UI Cards interacting with 3D space */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute right-[10%] top-[30%] bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/50 hidden lg:block"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-semibold">Status</p>
                        <p className="text-sm font-bold text-slate-800">Available Now</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
