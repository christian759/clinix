import React from 'react';

const steps = [
    {
        number: "01",
        title: "Sign Up & Profile",
        description: "Create your account in seconds and build your comprehensive health profile. Securely upload past records and set your preferences.",
        color: "bg-blue-600"
    },
    {
        number: "02",
        title: "Find Your Specialist",
        description: "Use our AI-powered matching system to find the perfect doctor for your specific needs, or browse our curated verified network.",
        color: "bg-teal-500"
    },
    {
        number: "03",
        title: "Book & Consult",
        description: "Schedule appointments instantly. Choose between in-person visits or high-definition secure video consultations.",
        color: "bg-purple-500"
    },
    {
        number: "04",
        title: "Track & Improve",
        description: "Access your dashboard to view prescriptions, test results, and personalized health insights updated in real-time.",
        color: "bg-pink-500"
    }
];

const Process = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="md:w-2/3 mb-20">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">How It Works</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4 font-display leading-tight">
                        Your Journey to Better Health <br /> in Four Simple Steps
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10 transform translate-y-4"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-8 shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform duration-300`}>
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-4">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
