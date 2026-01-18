import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
    {
        name: "Jessica Parker",
        role: "Patient",
        quote: "The level of care at Clinix is unmatched. The advanced diagnostics caught an issue my previous doctor missed completely.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
        name: "David Chen",
        role: "Patient",
        quote: "Incredible facility. It feels more like a spaceship than a clinic. The entire process was seamless and incredibly fast.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Sarah Williams",
        role: "Mother",
        quote: "My daughter actually enjoys going to the doctor now. The pediatric wing is fantastic and the staff is wonderful.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        name: "Marcus Johnson",
        role: "Athlete",
        quote: "Their sports medicine team helped me recover from my injury in half the expected time. Truly cutting-edge recovery tech.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/15.jpg"
    }
];

const Testimonials = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="py-32 bg-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm border border-indigo-500/30 px-4 py-1 rounded-full">Testimonials</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 font-['Poppins']">
                        Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Healing</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            style={{ y: i % 2 === 0 ? 0 : y }} // Parallax effect for odd columns
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-indigo-500/30" />
                                <div>
                                    <h4 className="text-white font-bold text-lg">{t.name}</h4>
                                    <p className="text-slate-400 text-sm">{t.role}</p>
                                </div>
                                <div className="ml-auto flex gap-1">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-500 text-lg">★</span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-slate-300 text-lg leading-relaxed italic">"{t.quote}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
