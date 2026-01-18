import { motion } from 'framer-motion';

const doctors = [
    {
        name: 'Dr. Sarah Jenning',
        role: 'Chief Surgeon',
        image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d46?auto=format&fit=crop&q=80&w=800',
    },
    {
        name: 'Dr. Michael Chen',
        role: 'Head of Neurology',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    },
    {
        name: 'Dr. James Wilson',
        role: 'Diagnostic Lead',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    },
    {
        name: 'Dr. Emily Carter',
        role: 'Pediatric Specialist',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
    }
];

const Doctors = () => {
    return (
        <section id="doctors" className="py-32 bg-white border-t border-slate-100">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="mb-20">
                    <h2 className="text-4xl font-bold font-display text-slate-900 tracking-tight mb-4">Specialists</h2>
                    <p className="text-slate-500 text-lg">World-renowned medical professionals.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="group">
                            <div className="aspect-[3/4] overflow-hidden bg-slate-100 mb-6">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 font-display mb-1">{doctor.name}</h3>
                                <p className="text-slate-500 font-medium">{doctor.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
