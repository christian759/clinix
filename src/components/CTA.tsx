import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const FloatingShape = () => (
    <mesh>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshStandardMaterial color="#fff" roughness={0.1} metalness={0.1} />
    </mesh>
)

const CTA = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-indigo-300">

                {/* Background 3D Elements */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <Canvas>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} />
                        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                            <FloatingShape />
                        </Float>
                    </Canvas>
                </div>

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Poppins']"
                    >
                        Ready to Prioritize Your Health?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-indigo-100 text-lg md:text-xl mb-10 leading-relaxed"
                    >
                        Join thousands of satisfied patients who trust Clinix for their medical needs. Schedule your first consultation today.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl">
                            Book Appointment Now
                        </button>
                        <button className="px-10 py-5 bg-indigo-700/50 backdrop-blur border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all">
                            Contact Support
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
