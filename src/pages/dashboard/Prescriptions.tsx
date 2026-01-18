import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const Prescriptions = () => {
    const { prescriptions } = useData();
    const { searchQuery } = useOutletContext();

    const filtered = prescriptions.filter(p =>
        p.medication.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">My Prescriptions</h2>
                <button className="px-4 py-2 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20">
                    Request Refill
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map(item => (
                    <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className={`absolute top-0 right-0 px-4 py-1 rounded-bl-xl text-xs font-bold text-white ${item.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}>
                            {item.status}
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-12 w-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl">
                                💊
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{item.medication}</h3>
                                <p className="text-sm text-gray-500">{item.dosage}</p>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex justify-between">
                                <span>Prescribed by:</span>
                                <span className="font-medium">{item.doctor}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Date:</span>
                                <span className="font-medium">{item.date}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Refills left:</span>
                                <span className="font-medium">{item.refillsLeft}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Prescriptions;
