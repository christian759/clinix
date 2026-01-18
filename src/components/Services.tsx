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
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-xs">Our Expertise</span>
                    <h2 className="text-4xl font-bold font-display text-slate-900 mt-3">Clinical Excellence</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">{service.name}</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                            <a href="#" className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                                Learn More <span className="text-lg">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
