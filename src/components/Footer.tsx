const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-6">
                    <h2 className="text-3xl font-bold text-white font-display tracking-tight">clinix.</h2>
                    <p className="text-sm leading-relaxed max-w-xs text-slate-400 font-light">
                        Advancing human longevity through precision medicine and artificial intelligence.
                    </p>
                    <div className="pt-2 flex gap-4">
                        <div className="w-10 h-10 bg-slate-800 rounded-lg hover:bg-primary transition-colors cursor-pointer flex items-center justify-center text-white/50 hover:text-white">Run</div>
                        <div className="w-10 h-10 bg-slate-800 rounded-lg hover:bg-primary transition-colors cursor-pointer flex items-center justify-center text-white/50 hover:text-white">Li</div>
                        <div className="w-10 h-10 bg-slate-800 rounded-lg hover:bg-primary transition-colors cursor-pointer flex items-center justify-center text-white/50 hover:text-white">Tw</div>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Patient Care</h4>
                    <ul className="space-y-4 text-sm font-medium text-slate-400">
                        <li><a href="#" className="hover:text-primary transition-colors">Book Appointment</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Insurance</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Patient Portal</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Telemedicine</a></li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Company</h4>
                    <ul className="space-y-4 text-sm font-medium text-slate-400">
                        <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div className="md:col-span-4">
                    <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Newsletter</h4>
                    <p className="text-sm text-slate-400 mb-6 font-light">Join 15,000+ subscribers for the latest health insights.</p>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Email address" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm w-full focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" />
                        <button className="bg-primary text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary-600 transition-colors">Join</button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-slate-800 text-xs text-slate-500 font-medium flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2026 Clinix Healthcare. New York / London / Tokyo.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
