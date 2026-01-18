import { motion } from 'framer-motion';

const services = [
    {
        title: 'Easy with AI-Driven Precision',
        desc: 'Our system automates routine tasks for faster, smarter results.',
        icon: '🏠',
        bg: 'bg-white',
        shadow: 'shadow-sm hover:shadow-xl'
    },
    {
        title: 'Data Analytics & Insights',
        desc: 'Visualize your health metrics with comprehensive real-time dashboards.',
        icon: '📊',
        bg: 'bg-[#E0F2FE]', // Light Blue
        shadow: 'shadow-none'
    },
    {
        title: 'Automation & Machine Learning',
        desc: 'Streamline your check-ups with automated scheduling and reminders.',
        icon: '⚡',
        bg: 'bg-white',
        shadow: 'shadow-sm hover:shadow-xl'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-[#FAFAFA]">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-20">
                    <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Trusted & Proven</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-dark mt-4 max-w-2xl leading-tight">
                        Meet the Experts Behind <br /> Your Legal Success
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`${service.bg} rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[350px] transition-all duration-300 ${service.shadow} hover:-translate-y-1`}
                        >
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lg shadow-sm mb-8 text-dark">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-dark font-display mb-4 leading-tight">{service.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
