import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-white">
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left: Typography */}
                <div className="lg:col-span-7 pt-20 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="block text-primary font-bold tracking-widest uppercase text-xs mb-6">
                            Est. 2026 — New York / London / Tokyo
                        </span>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display text-slate-900 tracking-tighter leading-[0.9] mb-8">
                            Precision <br />
                            Medicine.
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-500 max-w-xl font-light leading-relaxed mb-10">
                            We combine advanced diagnostic technology with personalized care to extend human longevity.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-600 transition-colors">
                                Book Consultation
                            </button>
                            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors">
                                Our Services
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Abstract Visualization (Clean) */}
                <div className="lg:col-span-5 relative hidden lg:block h-[600px] bg-slate-50 rounded-2xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1200"
                        alt="Minimal Medical"
                        className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
