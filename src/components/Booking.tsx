const Booking = () => {
    return (
        <section id="booking" className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/50">
                    <div className="text-center mb-12">
                        <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Appointments</span>
                        <h2 className="text-4xl font-bold text-slate-900 mt-2">Book Your Visit</h2>
                        <p className="text-slate-500 mt-4">Schedule a consultation with our specialists.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Service Type</label>
                                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-slate-600">
                                    <option>General Consultation</option>
                                    <option>Cardiology</option>
                                    <option>Diagnostics</option>
                                    <option>Pediatrics</option>
                                    <option>Neurology</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Preferred Date</label>
                                <input type="date" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-slate-600" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Message (Optional)</label>
                            <textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all h-32 resize-none" placeholder="Tell us more about your symptoms..."></textarea>
                        </div>

                        <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 mt-4">
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;
