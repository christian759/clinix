import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
            {/* Text Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-slate-600 font-semibold text-xs tracking-widest uppercase font-sans">Accepting New Patients</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-slate-900 tracking-tight leading-[1.1] mb-8">
                        Precision <br />
                        <span className="text-blue-600">Healthcare</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
                        Reimagining the medical experience with AI-assisted diagnostics and
                        personalized care plans designed for your longevity.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/20 w-full sm:w-auto font-sans">
                            Book Consultation
                        </button>
                        <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold text-lg hover:border-slate-400 hover:text-slate-900 transition-all w-full sm:w-auto font-sans">
                            Our Services
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
