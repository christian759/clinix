import { motion } from 'framer-motion';

const services = [
    { name: 'Advanced Diagnostics', icon: '🔬', desc: 'Full-body MRI & AI Scanning' },
    { name: 'Robotic Surgery', icon: '🦾', desc: 'Minimally invasive precision procedures' },
    { name: 'Genomic Therapy', icon: '🧬', desc: 'Personalized DNA-based treatments' },
    { name: 'Telemedicine', icon: '📱', desc: '24/7 Virtual consultations' },
    { name: 'Neurology', icon: '🧠', desc: 'Brain mapping & cognitive health' },
    { name: 'Dental Care', icon: '🦷', desc: 'Cosmetic & restorative dentistry' },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-xs bg-blue-50 px-3 py-1 rounded-lg">Our Expertise</span>
                    <h2 className="text-4xl font-bold font-display text-slate-900 mt-4">Clinical Excellence</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-lg">Comprehensive care solutions tailored to your unique biological needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-transparent hover:border-blue-100"
                        >
                            <div className="text-4xl mb-6 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{service.name}</h3>
                            <p className="text-slate-500 leading-relaxed mb-6 group-hover:text-slate-600">{service.desc}</p>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                <span className="text-lg">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
