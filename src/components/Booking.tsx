const Booking = () => {
    return (
        <section id="booking" className="py-32 bg-slate-50 border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-2xl p-12 shadow-swiss border border-slate-100">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Appointments</span>
                        <h2 className="text-4xl font-bold font-display text-slate-900 mt-4">Schedule Consultation</h2>
                        <p className="text-slate-500 mt-4">Expert care, available at your convenience.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Full Name</label>
                                <input type="text" className="w-full px-4 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Email</label>
                                <input type="email" className="w-full px-4 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Service</label>
                                <select className="w-full px-4 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-600 font-medium">
                                    <option>General Consultation</option>
                                    <option>Cardiology</option>
                                    <option>Diagnostics</option>
                                    <option>Pediatrics</option>
                                    <option>Neurology</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Date</label>
                                <input type="date" className="w-full px-4 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-600 font-medium" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Message</label>
                            <textarea className="w-full px-4 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all h-32 resize-none font-medium" placeholder="Describe your symptoms..."></textarea>
                        </div>

                        <button className="w-full py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary-600 transition-colors shadow-swiss mt-6">
                            Confirm Appointment
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;
