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
        color: "bg-indigo-500",
        gradient: "from-indigo-500 to-indigo-600"
    },
    {
        title: "Cardiology Center",
        description: "Advanced heart care utilizing the latest diagnostic technology and treatments.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        color: "bg-rose-500",
        gradient: "from-rose-500 to-rose-600"
    },
    {
        title: "Smart Diagnostics",
        description: "State-of-the-art laboratory services with AI-powered rapid results.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        color: "bg-emerald-500",
        gradient: "from-emerald-500 to-emerald-600"
    },
    {
        title: "Pediatrics",
        description: "Specialized care for infants, children, and adolescents in a friendly environment.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: "bg-amber-500",
        gradient: "from-amber-500 to-amber-600"
    },
    {
        title: "Neurology",
        description: "Expert diagnosis and treatment for disorders of the nervous system.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: "bg-violet-500",
        gradient: "from-violet-500 to-violet-600"
    },
    {
        title: "Dental Care",
        description: "Advanced cosmetic and restorative dentistry for a perfect smile.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: "bg-cyan-500",
        gradient: "from-cyan-500 to-cyan-600"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background blobs for glassmorphism effect */}
            <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 pointer-events-none" />
            <div className="absolute bottom-20 right-[-10%] w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm bg-indigo-50 px-4 py-1 rounded-full border border-indigo-100">Our Expertise</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-4">Comprehensive Care</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Combining advanced medical technology with personalized treatment plans for your well-being.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl border border-white/50 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-200/50 transition-all group"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 text-white shadow-lg shadow-indigo-500/30 transition-transform group-hover:scale-110 duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center text-indigo-600 font-semibold group-hover:gap-2 transition-all cursor-pointer">
                                Learn more
                                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
