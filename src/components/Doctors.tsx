import { motion } from 'framer-motion';

const doctors = [
    {
        name: 'Dr. Sarah Jenning',
        role: 'Chief Surgeon',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea86b48e?auto=format&fit=crop&q=80&w=800',
    },
    {
        name: 'Dr. Michael Chen',
        role: 'Head of Neurology',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    },
    {
        name: 'Dr. James Wilson',
        role: 'Genetics',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    },
    {
        name: 'Dr. Emily Carter',
        role: 'Pediatrics',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
    }
];

const Doctors = () => {
    return (
        <section id="doctors" className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-4xl font-bold font-display text-dark">
                        What our patients say <br />
                        <span className="text-slate-400">& Doctors</span>
                    </h2>
                    <div className="flex gap-2">
                        <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-dark hover:text-white transition-all">←</button>
                        <button className="w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center hover:bg-slate-800 transition-all">→</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="relative group rounded-[2.5rem] overflow-hidden bg-primary-100 hover:bg-primary-200 transition-all duration-500 h-[400px]">
                            {/* Image Part */}
                            <div className="h-[250px] w-full overflow-hidden">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover object-top mix-blend-overlay opacity-90 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
                                />
                            </div>

                            {/* Content Part (White Card Overlay) */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white p-6 rounded-[2rem] shadow-sm">
                                <h3 className="text-lg font-bold text-dark font-display">{doctor.name}</h3>
                                <p className="text-slate-500 text-sm">{doctor.role}</p>

                                <div className="mt-4 flex gap-1 text-primary-500 text-xs">
                                    ★★★★★
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
