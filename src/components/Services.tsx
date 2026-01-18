import { motion } from 'framer-motion';

const services = [
    { title: 'Advanced Diagnostics', desc: 'Full-body MRI & AI Scanning.' },
    { title: 'Robotic Surgery', desc: 'Minimally invasive precision.' },
    { title: 'Genomic Therapy', desc: 'Personalized DNA treatments.' },
    { title: 'Telemedicine', desc: '24/7 Virtual consultations.' },
    { title: 'Neurology', desc: 'Brain mapping & cognitive health.' },
    { title: 'Dental Care', desc: 'Cosmetic & restorative dentistry.' },
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-slate-50 border-t border-slate-100">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-4xl font-bold font-display text-slate-900 tracking-tight mb-4">Clinical Expertise</h2>
                        <p className="text-slate-500 max-w-md text-lg">Comprehensive care modules designed for the modern patient.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {/* Zero-gap grid with borders for strict look */}
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white p-12 hover:bg-slate-50 transition-colors border border-slate-100 -ml-[1px] -mt-[1px] group"
                        >
                            <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">{service.title}</h3>
                            <p className="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                                {service.desc}
                            </p>
                            <div className="mt-8 pt-8 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm font-bold text-primary uppercase tracking-wider">Learn More</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
