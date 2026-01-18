import { motion } from 'framer-motion';

const doctors = [
    {
        name: 'Dr. Sarah Jenning',
        role: 'Chief Surgeon',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea86b48e?auto=format&fit=crop&q=80&w=800',
        rating: '4.9',
        specialty: 'Cardiology'
    },
    {
        name: 'Dr. Michael Chen',
        role: 'Head of Neurology',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
        rating: '5.0',
        specialty: 'Brain Mapping'
    },
    {
        name: 'Dr. James Wilson',
        role: 'Diagnostic Lead',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
        rating: '4.8',
        specialty: 'Geneticist'
    },
    {
        name: 'Dr. Emily Carter',
        role: 'Pediatric Specialist',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
        rating: '4.9',
        specialty: 'Pediatrics'
    }
];

const Doctors = () => {
    return (
        <section id="doctors" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                    <div>
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">World-Class Care</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mt-6 leading-tight">
                            Meet Our <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Medical Specialists</span>
                        </h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-semibold hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm hover:shadow-md">
                        View All Specialists <span className="text-lg">→</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative"
                        >
                            <div className="relative h-[420px] rounded-[2rem] overflow-hidden mb-6 shadow-2xl shadow-slate-200/50">
                                <div className="absolute inset-0 bg-slate-200 animate-pulse" /> {/* Loading placeholder */}
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                                <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-white font-medium text-sm">
                                    <span className="text-yellow-400 text-lg">★</span> {doctor.rating}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg mb-3 shadow-lg shadow-blue-600/20">
                                        {doctor.specialty}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white font-display mb-1">{doctor.name}</h3>
                                    <p className="text-slate-200 font-medium">{doctor.role}</p>
                                </div>
                            </div>

                            {/* Hover Action (Optional - keeps UI clean) */}
                            <div className="flex justify-between items-center px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <button className="text-sm font-bold text-blue-600 hover:text-blue-700">View Profile</button>
                                <button className="text-sm font-bold text-slate-400 hover:text-slate-600">Book Now</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
