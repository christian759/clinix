import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const DashboardLayout = () => {
    const { user, logout } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const getPageTitle = () => {
        const path = location.pathname.split('/').pop();
        if (!path || path === 'dashboard') return 'Overview';
        return path.charAt(0).toUpperCase() + path.slice(1);
    };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
                <div className="flex items-center justify-center h-20 border-b border-gray-100">
                    <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                        Clinix
                    </span>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto py-6">
                    <nav className="flex-1 px-4 space-y-2">
                        {[
                            { to: '/dashboard', end: true, icon: '⚡', label: 'Overview' },
                            { to: '/dashboard/appointments', icon: '📅', label: 'Appointments' },
                            { to: '/dashboard/records', icon: '📄', label: 'Records' },
                            { to: '/dashboard/prescriptions', icon: '💊', label: 'Prescriptions' }, // New
                            { to: '/dashboard/messages', icon: '💬', label: 'Messages' }, // New
                            { to: '/dashboard/doctors', icon: '👨‍⚕️', label: 'Find Doctors' },
                            { to: '/dashboard/settings', icon: '⚙️', label: 'Settings' },
                        ].map(item => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                className={({ isActive }) => `w-full flex items-center px-4 py-3.5 rounded-xl transition-all duration-200 group font-medium ${isActive
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                                    }`}
                            >
                                <span className="mr-3 text-lg">{item.icon}</span>
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="p-4 mt-auto">
                        <button onClick={handleLogout} className="flex items-center w-full px-4 py-3 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 font-medium">
                            <span className="mr-3">🚪</span>
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden relative">
                {/* Header */}
                <header className="flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-xl border-b border-gray-200 z-10">
                    <div className="flex items-center flex-1">
                        <button className="md:hidden text-gray-500 focus:outline-none mr-4">
                            <span className="text-xl">☰</span>
                        </button>
                        <div className="relative w-full max-w-md hidden sm:block">
                            <h1 className="text-2xl font-bold text-gray-800">{getPageTitle()}</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative mx-4 hidden lg:block">
                            <input
                                className="w-64 bg-gray-50 rounded-xl pl-4 pr-4 py-2 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400 text-sm"
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="relative text-gray-500 hover:text-blue-600 transition-colors">
                            <span className="text-xl">🔔</span>
                            <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-gray-900 leading-none mb-1">{user?.name}</p>
                                <p className="text-xs text-gray-500">Patient</p>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 p-[2px]">
                                <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-blue-600 font-bold">
                                    {user?.name?.charAt(0) || 'U'}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* content body */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50/50 p-8">
                    <Outlet context={{ searchQuery }} />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
