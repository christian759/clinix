import { useState } from 'react';

const Features = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Machine + Square Cards */}
                <div className="flex flex-col gap-6">
                    {/* Main Machine Card */}
                    <div className="bg-[#D1FAE5] rounded-[3rem] p-12 relative overflow-hidden h-[500px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent"></div>
                        <img
                            src="/assets/machine.png"
                            alt="Medical Machine"
                            className="relative z-10 w-[80%] drop-shadow-2xl mix-blend-multiply"
                        />
                    </div>

                    {/* Bottom Row Cards */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* 5 Years Card (White) */}
                        <div className="bg-slate-50 rounded-[2rem] p-8 flex flex-col justify-between h-[200px] relative overflow-hidden group hover:bg-white hover:shadow-xl transition-all">
                            <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-dark group-hover:text-white group-hover:border-dark transition-all">↗</div>
                            <div className="mt-auto">
                                <h3 className="text-3xl font-bold text-dark font-display">5 Years</h3>
                                <p className="text-slate-500 text-sm mt-1">Product Warranty</p>
                            </div>
                        </div>

                        {/* Top 20 Card (Black) */}
                        <div className="bg-dark rounded-[2rem] p-8 flex flex-col justify-between h-[200px] relative overflow-hidden group hover:shadow-2xl shadow-dark/30">
                            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">↗</div>
                            <div className="mt-auto">
                                <h3 className="text-3xl font-bold text-white font-display">Top 20</h3>
                                <p className="text-slate-400 text-sm mt-1">Medical Startups</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="pl-0 lg:pl-12">
                    <span className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-4 block">Specialized Care</span>
                    <h2 className="text-5xl font-bold font-display text-dark mb-6 leading-tight">
                        Connect and Share with a<br />
                        Supportive Community.
                    </h2>

                    {/* Dashboard Preview Cards */}
                    <div className="mt-12 space-y-4">
                        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-soft hover:shadow-lg transition-all cursor-pointer flex items-center justify-between">
                            <div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Analysis</span>
                                <h4 className="text-lg font-bold text-dark mt-1">Finara Dashboard</h4>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-2xl font-bold text-dark">+75%</span>
                                    <span className="text-xs text-slate-400">Week-over-week</span>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">View</button>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-soft hover:shadow-lg transition-all cursor-pointer flex items-center justify-between opacity-80 hover:opacity-100">
                            <div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Growth</span>
                                <h4 className="text-lg font-bold text-dark mt-1">User Activity</h4>
                            </div>
                            <button className="px-4 py-2 bg-slate-50 text-slate-600 text-xs font-bold rounded-full">Details</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logos */}
            <div className="max-w-[1400px] mx-auto px-6 mt-32">
                <p className="text-center text-sm font-bold text-slate-400 mb-10">Trusted by 200+ Companies</p>
                <div className="flex flex-wrap justify-between items-center opacity-30 grayscale gap-8 px-12">
                    <span className="text-2xl font-bold font-display">Goodwell</span>
                    <span className="text-2xl font-bold font-display">FocalPoint</span>
                    <span className="text-2xl font-bold font-display">ScreenTime</span>
                    <span className="text-2xl font-bold font-display">Segment</span>
                    <span className="text-2xl font-bold font-display">Kyealta</span>
                </div>
            </div>
        </section>
    );
};

export default Features;
