import { motion } from 'framer-motion';

const doctors = [
    { name: 'Dr. Sarah Jenning', role: 'Chief Board Surgeon', image: 'https://randomuser.me/api/portraits/women/68.jpg', rating: '4.9' },
    { name: 'Dr. Michael Chen', role: 'Head of Neurology', image: 'https://randomuser.me/api/portraits/men/32.jpg', rating: '5.0' },
    { name: 'Dr. James Wilson', role: 'Diagnostic Lead', image: 'https://randomuser.me/api/portraits/men/86.jpg', rating: '4.8' },
    { name: 'Dr. Emily Carter', role: 'Pediatric Specialist', image: 'https://randomuser.me/api/portraits/women/44.jpg', rating: '4.9' }
];

const Doctors = () => {
    return (
        <section id="doctors" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-16 px-2">
                    <div>
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-xs">Medical Staff</span>
                        <h2 className="text-4xl font-bold font-display text-slate-900 mt-3">Meet Our Specialists</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-400 transition-all group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <span className="text-white font-bold flex items-center gap-1">
                                        ★ {doctor.rating}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-900 font-display">{doctor.name}</h3>
                                <p className="text-slate-500 text-sm mb-4">{doctor.role}</p>
                                <button className="w-full py-2.5 bg-slate-50 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-900 hover:text-white transition-colors border border-slate-200">
                                    View Profile
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
