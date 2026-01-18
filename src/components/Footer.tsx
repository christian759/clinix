const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-4">
                    <h2 className="text-2xl font-bold text-white font-display">clinix.</h2>
                    <p className="text-sm leading-relaxed max-w-xs text-slate-400">
                        Pioneering the future of healthcare with advanced diagnostics and AI-driven precision medicine.
                    </p>
                    <div className="pt-4 flex gap-4">
                        {/* Social Placeholders */}
                        <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"></div>
                        <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"></div>
                        <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"></div>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h4 className="text-white font-bold mb-6">Patient Care</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Book Appointment</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Insurance</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Patient Portal</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Telemedicine</a></li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h4 className="text-white font-bold mb-6">Company</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">News</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div className="md:col-span-4">
                    <h4 className="text-white font-bold mb-6">Newsletter</h4>
                    <p className="text-sm text-slate-400 mb-4">Subscribe for the latest health insights.</p>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Email address" className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-blue-500 outline-none text-white" />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-colors">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2026 Clinix Healthcare Systems. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
