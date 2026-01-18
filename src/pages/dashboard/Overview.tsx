import React from 'react';
import { useData } from '../../context/DataContext';

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

const Overview = () => {
    const { appointments, records, prescriptions, messages } = useData();

    // Derived state
    const nextAppt = appointments.find(a => a.status === 'Confirmed');
    const unreadMessagesString = messages.filter(m => m.unread).length.toString();
    const activePrescriptions = prescriptions.filter(p => p.status === 'Active').length.toString();

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Next Appointment"
                    value={nextAppt ? nextAppt.date.slice(5) : "None"}
                    subtext={nextAppt ? nextAppt.time : "Schedule now"}
                    icon="📅"
                    iconColor="text-blue-500"
                />
                <StatsCard
                    title="Test Results"
                    value={records.length.toString()}
                    subtext="Total records"
                    icon="🧪"
                    iconColor="text-purple-500"
                />
                <StatsCard
                    title="Prescriptions"
                    value={activePrescriptions + " Active"}
                    subtext="View details"
                    icon="💊"
                    iconColor="text-green-500"
                />
                <StatsCard
                    title="Messages"
                    value={unreadMessagesString + " Unread"}
                    subtext="Inbox"
                    icon="💬"
                    iconColor="text-yellow-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Appointments</h3>
                    <div className="space-y-4">
                        {appointments.slice(0, 3).map((app) => (
                            <div key={app.id} className="flex items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                                    <span className="text-blue-600 font-bold">A</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{app.type}</p>
                                    <p className="text-xs text-gray-500">{app.doctor} • {app.date}</p>
                                </div>
                                <div className="ml-auto">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${app.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {app.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {appointments.length === 0 && <p className="text-gray-500 text-sm">No recent appointments.</p>}
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Latest Records</h3>
                    <div className="space-y-4">
                        {records.slice(0, 3).map(rec => (
                            <div key={rec.id} className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="flex-shrink-0 text-2xl">
                                    📄
                                </div>
                                <div className="ml-4 flex-1">
                                    <p className="text-sm font-medium text-gray-900">{rec.name}</p>
                                    <p className="text-xs text-gray-500">{rec.date} • {rec.doctor}</p>
                                </div>
                            </div>
                        ))}
                        {records.length === 0 && <p className="text-gray-500 text-sm">No records found.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
