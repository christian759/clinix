import { motion } from 'framer-motion';

const services = [
    {
        title: "General Consultation",
        description: "Comprehensive health assessments for all ages with our expert physicians.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: "bg-indigo-500"
    },
    {
        title: "Cardiology",
        description: "Advanced heart care utilizing the latest diagnostic technology and treatments.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        color: "bg-rose-500"
    },
    {
        title: "Diagnostics",
        description: "State-of-the-art laboratory services with quick turnaround times.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        color: "bg-emerald-500"
    },
    {
        title: "Pediatrics",
        description: "Specialized care for infants, children, and adolescents in a friendly environment.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: "bg-amber-500"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50 z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">What We Offer</span>
                    <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Comprehensive Care</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We provide a wide range of medical services to ensure your health is always in the best hands.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all group"
                        >
                            <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transition-transform group-hover:scale-110 duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
