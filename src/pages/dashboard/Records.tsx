import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const Records = () => {
    const { records } = useData();
    const { searchQuery } = useOutletContext();

    const handleDownload = (fileName) => {
        alert(`Downloading ${fileName}... (This is a mock action)`);
    };

    const filteredRecords = records.filter(rec =>
        rec.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Medical Records</h2>
                <button onClick={() => alert("Mock Upload Modal")} className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                    Upload New
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecords.map(rec => (
                    <div key={rec.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center text-red-500 font-bold">
                                {rec.type}
                            </div>
                            <button onClick={() => handleDownload(rec.name)} className="text-gray-400 hover:text-blue-600 transition-colors text-xl">
                                ⬇
                            </button>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{rec.name}</h4>
                        <p className="text-sm text-gray-500 mb-4">Added on {rec.date}</p>
                        <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-lg">👨‍⚕️</span> {rec.doctor}
                        </div>
                    </div>
                ))}
                {filteredRecords.length === 0 && <p className="col-span-full text-center text-gray-500 py-12">No records found.</p>}
            </div>
        </div>
    );
};

export default Records;
