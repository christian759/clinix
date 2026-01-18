import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, ContactShadows, Float, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { MedicalCore } from './3d/MedicalCore';
import * as THREE from 'three';

const InteractiveLights = () => {
    const mainLight = useRef<THREE.DirectionalLight>(null);
    const fillLight = useRef<THREE.PointLight>(null);

    useFrame((state) => {
        if (mainLight.current) {
            // Light follows mouse position for dynamic shadows
            // state.pointer.x/y are normalized coordinates (-1 to 1)
            mainLight.current.position.x = state.pointer.x * 20;
            mainLight.current.position.y = state.pointer.y * 20;
            mainLight.current.position.z = 10;
        }
        if (fillLight.current) {
            fillLight.current.intensity = 2 + Math.sin(state.clock.getElapsedTime()) * 0.5;
        }
    });

    return (
        <>
            <directionalLight
                ref={mainLight}
                castShadow
                intensity={5}
                color="#ffffff"
                shadow-bias={-0.0001}
            />
            <pointLight
                ref={fillLight}
                position={[-10, 0, 10]}
                intensity={2}
                color="#818cf8"
            />
            <ambientLight intensity={0.5} />
        </>
    );
};

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center bg-[#F8FAFC] overflow-hidden">
            {/* 3D Scene Background - Occupies full screen but model is centered/offset */}
            <div className="absolute inset-0 z-0">
                <Canvas shadows gl={{ antialias: true, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }}>
                    <PerspectiveCamera makeDefault position={[0, 0, 18]} fov={30} />
                    <InteractiveLights />
                    <Environment preset="studio" />

                    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                        <MedicalCore position={[3, 0, 0]} scale={1.8} />
                    </Float>

                    {/* Background Particles Soft */}
                    <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
                    <ContactShadows opacity={0.4} scale={40} blur={2.5} far={10} color="#1e1b4b" />
                </Canvas>
            </div>

            {/* UI Content Layer - Minimalist Aesthetic */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-none">
                {/* Pointer events none on container so mouse can interact with 3D scene behind text if needed, 
                    but text elements need pointer-events-auto */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="pointer-events-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-8 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                        <span className="text-slate-500 font-medium text-xs tracking-widest uppercase">Next Gen Healthcare</span>
                    </div>

                    <h1 className="text-6xl lg:text-8xl font-bold font-['Inter'] text-slate-900 tracking-tight leading-[1.05] mb-8">
                        Future <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">Clinic</span>
                    </h1>

                    <p className="text-xl text-slate-500 mb-10 max-w-lg font-light leading-relaxed">
                        Advanced diagnostics powered by AI and nanotechnology.
                        Experience the precision of tomorrow, today.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium text-lg hover:bg-indigo-600 hover:scale-105 transition-all shadow-xl shadow-slate-200 cursor-pointer">
                            Book Consulation
                        </button>
                        <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-all bg-white cursor-pointer">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </button>
                    </div>
                </motion.div>

                {/* Right side left empty for the Medical Core to occupy visual space */}
            </div>
        </section>
    );
};

export default Hero;
