import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Settings = () => {
    const { user, login } = useAuth();
    const [formData, setFormData] = useState({ name: user?.name || '', email: user?.email || '' });
    const [message, setMessage] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        login(formData.email, formData.name);
        setMessage("Settings saved successfully!");
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="max-w-2xl animate-in fade-in duration-500">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Account Settings</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <form onSubmit={handleSave}>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>

                        {message && (
                            <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm font-medium">
                                {message}
                            </div>
                        )}

                        <div className="pt-4 flex items-center justify-end">
                            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Settings;
