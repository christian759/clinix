import { useState } from 'react';

const testimonials = [
    {
        name: 'Milana Katerin',
        role: 'Marketing',
        quote: "Working with Clinix was a pleasure. Their team was professional and our project went better than planned.",
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
    },
    {
        name: 'Michael Jordan',
        role: 'Designer',
        quote: "The personalized care plans helped me recover 2x faster than expected.",
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-16">

                {/* Left Text */}
                <div className="lg:w-1/3">
                    <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Client Stories</span>
                    <h2 className="text-5xl font-bold font-display text-dark mt-4 mb-8 leading-tight">
                        What our <br /> customers say
                    </h2>

                    <div className="text-6xl font-serif text-dark mb-6">“</div>
                    <p className="text-xl font-medium text-dark leading-relaxed mb-8">
                        {testimonials[0].quote}
                    </p>

                    <div className="flex items-center gap-4">
                        <img src={testimonials[0].image} className="w-12 h-12 rounded-full object-cover" alt="User" />
                        <div>
                            <h4 className="font-bold text-dark">{testimonials[0].name}</h4>
                            <p className="text-slate-500 text-sm">{testimonials[0].role}</p>
                        </div>
                    </div>
                </div>

                {/* Right Cards (The Green Portrait Cards) */}
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((person, index) => (
                        <div key={index} className="relative group rounded-[3rem] overflow-hidden bg-primary-200 h-[500px]">
                            {/* Image Bg */}
                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-full h-full object-cover object-center translate-y-10 group-hover:translate-y-0 transition-transform duration-700"
                            />

                            {/* Floating White Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-[2rem] shadow-lg">
                                <h3 className="text-lg font-bold text-dark font-display">{person.name}</h3>
                                <p className="text-slate-400 text-sm uppercase tracking-wider font-bold mt-1">{person.role}</p>

                                <div className="mt-4 flex justify-between items-center">
                                    <div className="flex gap-1 text-dark text-xs font-bold">● ● ●</div>
                                    <div className="text-slate-300">★★★★★</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
