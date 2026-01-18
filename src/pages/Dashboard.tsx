import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

// --- Mock Data ---

const MOCK_APPOINTMENTS = [
    { id: 1, doctor: "Dr. Sarah Smith", specialty: "Cardiologist", date: "2023-10-24", time: "10:00 AM", status: "Confirmed", type: "Check-up" },
    { id: 2, doctor: "Dr. James Wilson", specialty: "Dermatologist", date: "2023-11-05", time: "02:30 PM", status: "Pending", type: "Consultation" },
    { id: 3, doctor: "Dr. Emily Chen", specialty: "Pediatrician", date: "2023-12-12", time: "09:15 AM", status: "Confirmed", type: "Vaccination" },
];

const MOCK_RECORDS = [
    { id: 1, name: "Blood Test Results", date: "2023-10-10", type: "PDF", doctor: "Dr. Sarah Smith" },
    { id: 2, name: "X-Ray Report", date: "2023-09-15", type: "JPG", doctor: "Dr. Roberts" },
    { id: 3, name: "Prescription #8842", date: "2023-10-12", type: "PDF", doctor: "Dr. Emily Chen" },
];

const MOCK_DOCTORS = [
    { id: 1, name: "Dr. Sarah Smith", specialty: "Cardiologist", rating: 4.9, available: true },
    { id: 2, name: "Dr. James Wilson", specialty: "Dermatologist", rating: 4.7, available: false },
    { id: 3, name: "Dr. Emily Chen", specialty: "Pediatrician", rating: 5.0, available: true },
    { id: 4, name: "Dr. Michael Brown", specialty: "Neurologist", rating: 4.8, available: true },
];

// --- Sub-Components ---

const StatsCard = ({ title, value, subtext, iconColor, icon }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            <span className={`text-xl ${iconColor}`}>{icon}</span>
        </div>
        <div className="flex items-baseline">
            <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <p className="mt-2 text-sm text-gray-500">{subtext}</p>
    </div>
);

const ViewHeader = ({ title, buttonText, onButtonClick }) => (
    <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {buttonText && (
            <button
                onClick={onButtonClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
                {buttonText}
            </button>
        )}
    </div>
);

const Dashboard = () => {
    const { user, logout, login } = useAuth(); // login used to update user mock for settings
    const [activeView, setActiveView] = useState('overview');
    const [searchQuery, setSearchQuery] = useState('');

    // Local state for interactivity
    const [appointments, setAppointments] = useState(MOCK_APPOINTMENTS);
    const [appointmentHistory, setAppointmentHistory] = useState([]);

    // Settings State
    const [settingsForm, setSettingsForm] = useState({ name: user?.name || '', email: user?.email || '' });
    const [saveMessage, setSaveMessage] = useState('');

    // --- Actions ---

    const handleCancelAppointment = (id) => {
        if (window.confirm("Are you sure you want to cancel this appointment?")) {
            setAppointments(prev => prev.filter(app => app.id !== id));
            alert("Appointment cancelled.");
        }
    };

    const handleDownload = (fileName) => {
        alert(`Downloading ${fileName}... (Mock Action)`);
    };

    const handleBookDoctor = (docName) => {
        alert(`Booking functionality for ${docName} would open a calendar modal here.`);
    };

    const handleSaveSettings = (e) => {
        e.preventDefault();
        // Mock update
        const updatedUser = { ...user, name: settingsForm.name, email: settingsForm.email };
        // This is a hacky way to update context without a real backend update function exposed, 
        // but assuming login updates state:
        login(settingsForm.email, settingsForm.name);
        setSaveMessage("Settings saved successfully!");
        setTimeout(() => setSaveMessage(''), 3000);
    };

    // --- Views ---

    const renderOverview = () => (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard title="Next Appointment" value={appointments.length > 0 ? appointments[0].date : "None"} subtext={appointments.length > 0 ? appointments[0].time : ""} icon="📅" iconColor="text-blue-500" />
                <StatsCard title="Test Results" value="3 New" subtext="View Report" icon="🧪" iconColor="text-purple-500" />
                <StatsCard title="Prescriptions" value="2 Active" subtext="Refill in 12 days" icon="💊" iconColor="text-green-500" />
                <StatsCard title="Messages" value="1 Unread" subtext="Dr. Sarah Smith" icon="💬" iconColor="text-yellow-500" />
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
                    {appointments.length > 0 ? (
                        <div className="space-y-4">
                            {appointments.slice(0, 2).map(app => (
                                <div key={app.id} className="flex items-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                                    <div className="flex-shrink-0">
                                        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">DATE</p>
                                        <p className="text-lg font-bold text-gray-900">{app.date.slice(5)}</p>
                                    </div>
                                    <div className="ml-4 border-l-2 border-blue-200 pl-4">
                                        <p className="text-sm font-medium text-gray-900">{app.type}</p>
                                        <p className="text-xs text-gray-500">{app.doctor} • {app.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-sm">No upcoming appointments.</p>
                    )}
                </div>
            </div>
        </div>
    );

    const renderAppointments = () => (
        <div className="animate-in fade-in duration-500">
            <ViewHeader title="My Appointments" buttonText="+ New Appointment" onButtonClick={() => setActiveView('doctors')} />
            <div className="space-y-4">
                {appointments.filter(app =>
                    app.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    app.type.toLowerCase().includes(searchQuery.toLowerCase())
                ).map(app => (
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
                                onClick={() => handleCancelAppointment(app.id)}
                                className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                Reschedule
                            </button>
                        </div>
                    </div>
                ))}
                {appointments.length === 0 && <p className="text-center text-gray-500 py-12">No appointments found.</p>}
            </div>
        </div>
    );

    const renderRecords = () => (
        <div className="animate-in fade-in duration-500">
            <ViewHeader title="Medical Records" buttonText="Upload New" onButtonClick={() => alert('Upload modal mock')} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_RECORDS.filter(rec => rec.name.toLowerCase().includes(searchQuery.toLowerCase())).map(rec => (
                    <div key={rec.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center text-red-500 font-bold">
                                {rec.type}
                            </div>
                            <button onClick={() => handleDownload(rec.name)} className="text-gray-400 hover:text-blue-600 transition-colors">
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
            </div>
        </div>
    );

    const renderDoctors = () => (
        <div className="animate-in fade-in duration-500">
            <ViewHeader title="Find a Doctor" buttonText={null} onButtonClick={null} />
            <div className="space-y-4">
                {MOCK_DOCTORS.filter(doc => doc.name.toLowerCase().includes(searchQuery.toLowerCase())).map(doc => (
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
                                <button onClick={() => handleBookDoctor(doc.name)} className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
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

    const renderSettings = () => (
        <div className="max-w-2xl animate-in fade-in duration-500">
            <ViewHeader title="Account Settings" buttonText={null} onButtonClick={null} />
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <form onSubmit={handleSaveSettings}>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                value={settingsForm.name}
                                onChange={(e) => setSettingsForm({ ...settingsForm, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                value={settingsForm.email}
                                onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>

                        {saveMessage && (
                            <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm font-medium">
                                {saveMessage}
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
                            { id: 'overview', icon: '⚡', label: 'Overview' },
                            { id: 'appointments', icon: '📅', label: 'Appointments' },
                            { id: 'records', icon: '📄', label: 'Records' },
                            { id: 'doctors', icon: '👨‍⚕️', label: 'Find Doctors' },
                            { id: 'settings', icon: '⚙️', label: 'Settings' },
                        ].map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActiveView(item.id)}
                                className={`w-full flex items-center px-4 py-3.5 rounded-xl transition-all duration-200 group font-medium ${activeView === item.id
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                                    }`}
                            >
                                <span className="mr-3 text-lg">{item.icon}</span>
                                {item.label}
                            </button>
                        ))}
                    </nav>
                    <div className="p-4 mt-auto">
                        <button onClick={logout} className="flex items-center w-full px-4 py-3 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 font-medium">
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
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-400">🔍</span>
                            </span>
                            <input
                                className="w-full bg-gray-50 rounded-xl pl-10 pr-4 py-2.5 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400"
                                type="text"
                                placeholder={`Search ${activeView}...`}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
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
                    {activeView === 'overview' && renderOverview()}
                    {activeView === 'appointments' && renderAppointments()}
                    {activeView === 'records' && renderRecords()}
                    {activeView === 'doctors' && renderDoctors()}
                    {activeView === 'settings' && renderSettings()}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
