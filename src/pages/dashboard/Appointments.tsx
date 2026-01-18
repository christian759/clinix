import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const Appointments = () => {
    const { appointments, cancelAppointment } = useData();
    const { searchQuery } = useOutletContext();

    const filteredAppointments = appointments.filter(app =>
        app.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCancel = (id) => {
        if (window.confirm("Are you sure you want to cancel this appointment?")) {
            cancelAppointment(id);
        }
    };

    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">My Appointments</h2>
                <Link to="/dashboard/doctors" className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                    + New Appointment
                </Link>
            </div>

            <div className="space-y-4">
                {filteredAppointments.map(app => (
                    <div key={app.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                                📅
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">{app.type}</h4>
                                <p className="text-gray-600">{app.doctor} - <span className="text-gray-400">{app.specialty}</span></p>
                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                    <span>🗓 {app.date}</span>
                                    <span>⏰ {app.time}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${app.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                {app.status}
                            </span>
                            <button
                                onClick={() => handleCancel(app.id)}
                                className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ))}
                {filteredAppointments.length === 0 && <p className="text-center text-gray-500 py-12">No appointments found matching your search.</p>}
            </div>
        </div>
    );
};

export default Appointments;
