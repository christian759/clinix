const Booking = () => {
    return (
        <section id="booking" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-[3rem] p-12 shadow-soft border border-slate-100 text-center">
                    <h2 className="text-4xl font-bold font-display text-dark mb-4">Book Your Appointment</h2>
                    <p className="text-slate-500 mb-12">Seamless scheduling for modern healthcare.</p>

                    <form className="space-y-6 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-bold text-slate-900 uppercase tracking-wide ml-4 mb-2 block">Full Name</label>
                                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary-400 outline-none transition-all font-medium" placeholder="Jane Doe" />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-900 uppercase tracking-wide ml-4 mb-2 block">Email</label>
                                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary-400 outline-none transition-all font-medium" placeholder="jane@example.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-bold text-slate-900 uppercase tracking-wide ml-4 mb-2 block">Service</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary-400 outline-none transition-all text-slate-600 font-medium">
                                    <option>General Consultation</option>
                                    <option>Cardiology</option>
                                    <option>Diagnostics</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-900 uppercase tracking-wide ml-4 mb-2 block">Date</label>
                                <input type="date" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary-400 outline-none transition-all text-slate-600 font-medium" />
                            </div>
                        </div>

                        <button className="w-full py-5 bg-dark text-white rounded-2xl font-bold text-lg hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/20 mt-8">
                            Confirm Schedule
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;
