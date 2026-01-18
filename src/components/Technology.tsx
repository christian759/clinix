import { motion } from 'framer-motion';

const Technology = () => {
    return (
        <section className="py-24 bg-white overflow-hidden relative border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-['Poppins']">
                        Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Diagnostics</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
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
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-100">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-slate-900 mb-1">{item.title}</h4>
                                    <p className="text-slate-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Holographic Data Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-[600px] w-full bg-slate-50 rounded-3xl overflow-hidden relative border border-slate-200 shadow-2xl"
                >
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                    {/* Central Scanner Interface */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-80 h-80">
                            {/* Rotating Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-dashed border-indigo-200"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 rounded-full border border-indigo-100"
                            />

                            {/* Scanning Line */}
                            <motion.div
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-0.5 bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)] z-10"
                            />

                            {/* Center Data Points */}
                            <div className="absolute inset-20 bg-white rounded-full shadow-lg flex items-center justify-center flex-col z-20">
                                <span className="text-3xl font-bold text-slate-800">98%</span>
                                <span className="text-xs text-slate-400 uppercase tracking-widest mt-1">Accuracy</span>
                            </div>

                            {/* Floating UI Cards around the center */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -right-20 top-0 bg-white p-4 rounded-xl shadow-lg border border-slate-100 w-40"
                            >
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-2">
                                    <div className="h-full bg-emerald-500 w-[80%] rounded-full"></div>
                                </div>
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>Vitals</span>
                                    <span className="text-emerald-600 font-bold">Normal</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute -left-20 bottom-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 w-40"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                                    <span className="text-xs font-bold text-slate-700">Analysis</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-1 w-[90%] bg-slate-100 rounded-full"></div>
                                    <div className="h-1 w-[60%] bg-slate-100 rounded-full"></div>
                                    <div className="h-1 w-[80%] bg-slate-100 rounded-full"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Technology;
