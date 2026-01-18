import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const Doctors = () => {
    const { doctors, addAppointment } = useData();
    const { searchQuery } = useOutletContext();
    const navigate = useNavigate();

    const filteredDoctors = doctors.filter(doc =>
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleBook = (doctor) => {
        // Quick book - just adds a confirmed appointment for "Tomorrow"
        const nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);
        const dateStr = nextDay.toISOString().split('T')[0];

        addAppointment({
            doctor: doctor.name,
            specialty: doctor.specialty,
            date: dateStr,
            time: "09:00 AM",
            type: "New Patient Consultation"
        });

        alert(`Appointment booked with ${doctor.name} for tomorrow! Redirecting to appointments...`);
        navigate('/dashboard/appointments');
    };

    return (
        <div className="animate-in fade-in duration-500">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Find a Specialist</h2>
            <div className="space-y-4">
                {filteredDoctors.map(doc => (
                    <div key={doc.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                        <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl overflow-hidden">
                            {/* Placeholder Avatar */}
                            👨‍⚕️
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                            <h4 className="text-xl font-bold text-gray-900">{doc.name}</h4>
                            <p className="text-blue-600 font-medium">{doc.specialty}</p>
                            <div className="flex items-center justify-center sm:justify-start gap-1 mt-1 text-yellow-500">
                                {'★'.repeat(Math.floor(doc.rating))}
                                <span className="text-gray-400 text-sm ml-2">({doc.rating})</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full sm:w-auto">
                            {doc.available ? (
                                <button onClick={() => handleBook(doc)} className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                                    Book Appointment
                                </button>
                            ) : (
                                <button disabled className="px-6 py-2 bg-gray-100 text-gray-400 rounded-xl font-semibold cursor-not-allowed">
                                    Not Available
                                </button>
                            )}
                            <button className="px-6 py-2 border border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                                View Profile
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doctors;
