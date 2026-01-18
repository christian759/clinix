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

                {/* Abstract Graphic / Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-[500px] w-full bg-slate-100 rounded-3xl overflow-hidden relative shadow-inner"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
                    {/* Static visual representation instead of heavy 3D */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full shadow-[0_0_100px_rgba(99,102,241,0.2)] flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full border-2 border-indigo-100 flex items-center justify-center animate-pulse">
                            <div className="w-32 h-32 rounded-full bg-indigo-50"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Technology;
