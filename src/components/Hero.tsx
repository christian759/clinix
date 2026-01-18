import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';

const Hero = () => {
    return (
        <section className="relative pt-40 pb-20 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: Text Content */}
                <div className="pt-10 lg:pt-0">
                    {/* User Avatars / Social Proof */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex -space-x-3">
                            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src={avatar1} alt="User" />
                            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src={avatar2} alt="User" />
                            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src={avatar1} alt="User" />
                        </div>
                        <div className="text-sm font-semibold text-slate-900">
                            12k+ <span className="font-normal text-slate-500">Happy Patients</span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-dark tracking-tight leading-[1.1] mb-8">
                        Defending Your Future <br />
                        with Proven Medical <br />
                        <span className="text-primary-500">Powerhealth</span>
                    </h1>

                    <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
                        We offer a comprehensive suite of digital health tools,
                        expert consultations, and personalized care plans.
                    </p>

                    <div className="flex items-center gap-4 mb-20">
                        <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-dark text-white rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-dark/20 flex items-center gap-2">
                            Get Started
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </button>
                        <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all">
                            View Services
                        </button>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                        <div>
                            <h3 className="text-3xl font-bold text-dark font-display">+5K</h3>
                            <p className="text-sm text-slate-400">Total Patients</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-dark font-display">10+</h3>
                            <p className="text-sm text-slate-400">Years Experience</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-dark font-display">96%</h3>
                            <p className="text-sm text-slate-400">Success Rate</p>
                        </div>
                    </div>
                </div>

                {/* Right: The "Doctor in Blob" */}
                <div className="relative h-[700px] w-full bg-[#9BF6D3] rounded-[3rem] overflow-hidden flex items-end justify-center">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

                    {/* Main Image */}
                    <img
                        src={heroImg}
                        alt="Dr. Sarah"
                        className="relative z-10 w-[90%] object-cover object-top h-[90%]"
                    />

                    {/* Floating Glass Cards */}
                    {/* Top Left: Heart Rate */}
                    <div
                        className="absolute top-24 left-8 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-glass flex items-center gap-3 pr-8"
                    >
                        <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-500">
                            ❤️
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-semibold">Heart Rate</p>
                            <p className="text-lg font-bold text-dark">98 bpm</p>
                        </div>
                    </div>

                    {/* Bottom Right: Users Active */}
                    <div
                        className="absolute bottom-32 right-8 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-glass max-w-[200px]"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                ⚡
                            </div>
                            <span className="text-xs font-bold text-slate-400">Active</span>
                        </div>
                        <p className="text-2xl font-bold text-dark">120/80</p>
                        <p className="text-xs text-slate-400">Blood Pressure</p>

                        {/* Mini Graph */}
                        <div className="mt-2 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full w-[70%] bg-primary-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
