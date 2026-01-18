import { motion } from 'framer-motion';

const services = [
    {
        title: 'AI-Driven Precision',
        desc: 'Our system automates routine tasks for faster, smarter results.',
        icon: '🤖',
        bg: 'bg-primary-50', // Mint
    },
    {
        title: 'Data Analytics',
        desc: 'Visualize your health metrics with comprehensive real-time dashboards.',
        icon: '📊',
        bg: 'bg-accent-blue', // Blue Pastel
    },
    {
        title: 'Automation',
        desc: 'Streamline your check-ups with automated scheduling and reminders.',
        icon: '⚡',
        bg: 'bg-accent-yellow', // Yellow Pastel
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-16">
                    <span className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Trusted & Proven</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-dark mt-4 max-w-2xl">
                        Meet the Experts Behind <br /> Your Medical Success
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className={`${service.bg} rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:shadow-soft`}
                        >
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm mb-6">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-dark font-display mb-3">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
