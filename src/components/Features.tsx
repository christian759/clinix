import { motion } from 'framer-motion';

const Features = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: The Green Machine Box */}
                <div className="relative">
                    <div className="bg-primary-50 rounded-[3rem] p-12 relative overflow-hidden h-[600px] flex items-center justify-center">
                        {/* Abstract Rings */}
                        <div className="absolute inset-0 border-[40px] border-white/30 rounded-full scale-150 opacity-50"></div>

                        {/* Machine Image */}
                        <img
                            src="https://images.unsplash.com/photo-1516549655169-df83a06745ed?auto=format&fit=crop&w=800&q=80"
                            alt="Advanced Medical Device"
                            className="relative z-10 w-[80%] drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* Right: Content & Dashboard Cards */}
                <div>
                    <span className="text-slate-400 font-semibold text-sm uppercase tracking-wider mb-2 block">Specialized Care</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-dark mb-12">
                        Connect and Share with a<br />
                        Supportive Community.
                    </h2>

                    <div className="space-y-6">
                        {/* Card 1 */}
                        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-soft flex items-center justify-between group hover:border-primary-200 transition-colors">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold text-slate-400 uppercase">Analysis</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                                </div>
                                <h3 className="text-lg font-bold text-dark">Patient Dashboard</h3>
                                <div className="mt-2 text-3xl font-bold text-dark font-display">
                                    +75% <span className="text-sm font-normal text-slate-400">Recovery Rate</span>
                                </div>
                            </div>
                            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all">
                                ↗
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-soft flex items-center justify-between group hover:border-primary-200 transition-colors">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold text-slate-400 uppercase">Growth</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <h3 className="text-lg font-bold text-dark">Health Score</h3>
                                    <span className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span>
                                </div>
                            </div>
                            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all">
                                ↗
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Logos Strip using simple text/icons for now */}
            <div className="max-w-[1400px] mx-auto px-6 mt-24 pt-12 border-t border-slate-50 text-center">
                <p className="text-slate-400 text-sm font-semibold mb-8">Trusted by 200+ Companies</p>
                <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
                    <h3 className="text-2xl font-bold font-display">Goodwell</h3>
                    <h3 className="text-2xl font-bold font-display">FocalPoint</h3>
                    <h3 className="text-2xl font-bold font-display">ScreenTime</h3>
                    <h3 className="text-2xl font-bold font-display">Segment</h3>
                </div>
            </div>
        </section>
    );
};

export default Features;
