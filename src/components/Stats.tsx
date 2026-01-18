import React from 'react';

const stats = [
    { value: "50k+", label: "Active Patients", suffix: "+" },
    { value: "98", label: "Satisfaction Rate", suffix: "%" },
    { value: "24/7", label: "Support Access", suffix: "" },
    { value: "15", label: "Awards Won", suffix: "+" },
];

const Stats = () => {
    return (
        <section className="py-20 bg-dark text-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-0 divide-x-0 md:divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center px-6">
                            <div className="text-5xl md:text-7xl font-bold font-display mb-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                                {stat.value}<span className="text-blue-500 text-4xl align-top">{stat.suffix}</span>
                            </div>
                            <p className="text-slate-400 font-medium tracking-wide uppercase text-sm mt-4">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
