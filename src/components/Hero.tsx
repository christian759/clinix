import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Text Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-full mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-slate-600 font-medium text-xs tracking-widest uppercase">Accepting New Patients</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-['Inter'] text-slate-900 tracking-tighter leading-none mb-8">
                        Future <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-gradient-x">Clinic</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Healthcare reimagined through the lens of precision. <br className="hidden md:block" />
                        Next-generation diagnostics for a healthier tomorrow.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-indigo-600 hover:scale-105 transition-all shadow-xl shadow-slate-200 cursor-pointer w-full sm:w-auto">
                            Book Appointment
                        </button>
                        <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all w-full sm:w-auto">
                            Explore Services
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
