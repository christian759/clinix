import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
                <div className="flex items-center justify-center h-16 border-b border-gray-200">
                    <span className="text-2xl font-bold text-blue-600">Clinix</span>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex-1 px-4 py-4 space-y-2">
                        <a href="#" className="flex items-center px-4 py-3 text-gray-700 bg-gray-100 rounded-xl transition-colors">
                            <span className="mr-3 font-bold text-blue-600">II</span>
                            Overview
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                            <span className="mr-3">📅</span>
                            Appointments
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                            <span className="mr-3">📄</span>
                            Records
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                            <span className="mr-3">👥</span>
                            Doctors
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                            <span className="mr-3">⚙️</span>
                            Settings
                        </a>
                    </nav>
                    <div className="p-4 border-t border-gray-200">
                        <button onClick={logout} className="flex items-center w-full px-4 py-2 text-gray-600 hover:text-red-600 transition-colors">
                            <span className="mr-3">🚪</span>
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Header */}
                <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
                    <div className="flex items-center">
                        <button className="md:hidden text-gray-500 focus:outline-none focus:text-gray-700">
                            <span className="text-xl">☰</span>
                        </button>
                        <div className="relative mx-4 lg:mx-0">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <span className="text-gray-400">🔍</span>
                            </span>
                            <input className="form-input w-32 sm:w-64 rounded-xl pl-10 pr-4 py-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-shadow" type="text" placeholder="Search..." />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="flex mx-4 text-gray-600 focus:outline-none">
                            <span className="text-xl">🔔</span>
                        </button>
                        <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                {user?.name?.charAt(0) || 'U'}
                            </div>
                            <span className="ml-2 font-medium text-gray-700">{user?.name}</span>
                        </div>
                    </div>
                </header>

                {/* content body */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Stats Cards */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-500 text-sm font-medium">Next Appointment</h3>
                                <span className="text-blue-500">📅</span>
                            </div>
                            <div className="flex items-baseline">
                                <p className="text-2xl font-bold text-gray-900">Oct 24</p>
                                <p className="ml-2 text-sm text-gray-500">10:00 AM</p>
                            </div>
                            <p className="mt-2 text-sm text-green-600 font-medium">Confirmed</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-500 text-sm font-medium">Test Results</h3>
                                <span className="text-purple-500">🧪</span>
                            </div>
                            <div className="flex items-baseline">
                                <p className="text-2xl font-bold text-gray-900">3 New</p>
                            </div>
                            <p className="mt-2 text-sm text-blue-600 font-medium cursor-pointer">View Report</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-500 text-sm font-medium">Prescriptions</h3>
                                <span className="text-green-500">💊</span>
                            </div>
                            <div className="flex items-baseline">
                                <p className="text-2xl font-bold text-gray-900">2 Active</p>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">Refill in 12 days</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-500 text-sm font-medium">Messages</h3>
                                <span className="text-yellow-500">💬</span>
                            </div>
                            <div className="flex items-baseline">
                                <p className="text-2xl font-bold text-gray-900">1 Unread</p>
                            </div>
                            <p className="mt-2 text-sm text-blue-600 font-medium cursor-pointer">Dr. Sarah Smith</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                        <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                                            <span className="text-blue-600 font-bold">A</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">General Checkup</p>
                                            <p className="text-xs text-gray-500">Dr. Sarah Smith • Oct 12, 2023</p>
                                        </div>
                                        <div className="ml-auto">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Completed
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Schedule</h3>
                            <div className="space-y-4">
                                <div className="flex items-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                                    <div className="flex-shrink-0">
                                        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">TODAY</p>
                                        <p className="text-lg font-bold text-gray-900">09:30</p>
                                    </div>
                                    <div className="ml-4 border-l-2 border-blue-200 pl-4">
                                        <p className="text-sm font-medium text-gray-900">Dental Cleaning</p>
                                        <p className="text-xs text-gray-500">Dr. Roberts • Room 104</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="flex-shrink-0">
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">TOMORROW</p>
                                        <p className="text-lg font-bold text-gray-900">14:00</p>
                                    </div>
                                    <div className="ml-4 border-l-2 border-gray-200 pl-4">
                                        <p className="text-sm font-medium text-gray-900">Blood Test Results</p>
                                        <p className="text-xs text-gray-500">Lab 3 • Main Building</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
