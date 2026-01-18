import { Canvas } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import { Capsule, DnaHelix } from './3d/MedicalObjects';
import { motion } from 'framer-motion';

const Technology = () => {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-['Poppins']">
                        Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Diagnostics</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        We utilize state-of-the-art nanobot technology and AI-driven analysis to detect issues before they become symptoms. Our
                        non-invasive procedures set the new standard for preventative care.
                    </p>

                    <div className="space-y-6">
                        {[
                            { title: 'AI Analysis', desc: 'Real-time health monitoring and predictive analytics.' },
                            { title: 'Nano-Medicine', desc: 'Targeted drug delivery systems using microscopic carriers.' },
                            { title: 'Genetic Mapping', desc: 'Full genome sequencing for personalized treatment plans.' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/30">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                                    <p className="text-slate-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 3D Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-[500px] w-full bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700 relative"
                >
                    <div className="absolute top-4 left-4 z-10 bg-black/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                        <p className="text-xs text-indigo-300 font-mono">LIVE SIMULATION // NANOBOT_V2</p>
                    </div>

                    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <Environment preset="city" />

                        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                            {/* Reusing Capsule but with different context visually */}
                            <Capsule scale={1.5} rotation={[0.5, 0, 0]} />
                        </Float>

                        <Float speed={1} rotationIntensity={0.2} floatIntensity={1} position={[3, -2, -2]}>
                            <DnaHelix scale={0.5} />
                        </Float>

                        <ContactShadows opacity={0.5} scale={20} blur={2} far={4} color="#000" />
                    </Canvas>
                </motion.div>
            </div>
        </section>
    );
};

export default Technology;
