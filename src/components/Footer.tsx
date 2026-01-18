const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-24 pb-12 rounded-t-[3rem] mt-20">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Visual CTA */}
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">
                        Let's Collaborate to Bring Your <br />
                        Health Vision to Life
                    </h2>
                    <button className="px-8 py-3 bg-white text-dark rounded-full font-bold hover:bg-primary-500 hover:text-white transition-all shadow-lg shadow-white/10">
                        Book Consultation
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
                    {/* Logo Column */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                            <span className="font-display font-bold text-2xl">Clinix.</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Complete systems designed <br /> for modern healthcare.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-slate-500">Product</h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-slate-500">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-slate-500">Legal</h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Terms</a></li>
                        </ul>
                    </div>
                </div>

                {/* Big Typography Logo at Bottom */}
                <div className="mt-24 pt-12 border-t border-white/5 text-center">
                    <h1 className="text-[12vw] font-bold font-display text-white/10 leading-none tracking-tighter select-none pointer-events-none">
                        CLINIX
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
