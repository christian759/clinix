import { motion } from 'framer-motion';

const doctors = [
    {
        name: "Dr. Sarah Johnson",
        role: "Chief Cardiologist",
        image: "/assets/doctor_sarah_1768695603748.png", // Assuming these assets were copied to public/assets
        rating: "5.0"
    },
    {
        name: "Dr. Michael Chen",
        role: "Neurologist",
        image: "/assets/doctor_michael_1768695620650.png",
        rating: "4.9"
    },
    {
        name: "Dr. Emily Rodriguez",
        role: "Pediatrician",
        image: "/assets/doctor_emily_1768695637116.png",
        rating: "4.9"
    }
];

const Doctors = () => {
    return (
        <section id="doctors" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Our Team</span>
                        <h2 className="text-4xl font-bold text-slate-900 mt-2">Meet Our Specialists</h2>
                    </div>
                    <button className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-2 group">
                        View All Doctors
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-4 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-64 rounded-[1.5rem] overflow-hidden bg-indigo-50 mb-6 group">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        // Fallback if image not found
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Doctor';
                                    }}
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-slate-800 shadow-sm">
                                    <span className="text-yellow-500">★</span> {doctor.rating}
                                </div>
                            </div>
                            <div className="px-2 pb-4 text-center">
                                <h3 className="text-xl font-bold text-slate-800 mb-1">{doctor.name}</h3>
                                <p className="text-indigo-600 font-medium">{doctor.role}</p>

                                <div className="mt-6 flex justify-center gap-4">
                                    <button className="px-6 py-3 bg-slate-900 text-white text-sm rounded-xl font-medium hover:bg-indigo-600 transition-colors w-full shadow-lg shadow-slate-200">
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
