import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
            {/* Soft Ambient Background */}
            <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

            {/* Text Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-100 rounded-full mb-8 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        <span className="text-slate-500 font-semibold text-xs tracking-widest uppercase font-sans">Accepting New Patients</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-display text-slate-900 tracking-tight leading-[1.1] mb-8">
                        Healthcare <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Reimagined</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-sans leading-relaxed font-light">
                        Experience a new standard of medical excellence where
                        <span className="text-slate-800 font-medium"> precision technology</span> meets
                        <span className="text-slate-800 font-medium"> compassionate care</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-blue-600 hover:scale-105 transition-all shadow-xl shadow-blue-900/10 w-full sm:w-auto font-sans">
                            Book Consultation
                        </button>
                        <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-white text-slate-600 border border-slate-200 rounded-full font-semibold text-lg hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50/50 transition-all w-full sm:w-auto font-sans">
                            Explore Services
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
