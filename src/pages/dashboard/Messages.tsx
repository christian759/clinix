import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const Messages = () => {
    const { messages, markMessageRead } = useData();
    const { searchQuery } = useOutletContext();

    const filtered = messages.filter(m =>
        m.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Messages</h2>
                <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors">
                    Mark All Read
                </button>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {filtered.map(msg => (
                    <div
                        key={msg.id}
                        onClick={() => markMessageRead(msg.id)}
                        className={`p-6 border-b border-gray-100 last:border-0 cursor-pointer transition-colors hover:bg-gray-50 flex items-start gap-4 ${msg.unread ? 'bg-blue-50/30' : ''}`}
                    >
                        <div className="h-10 w-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                            {msg.sender.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className={`text-base truncate ${msg.unread ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                                    {msg.sender}
                                </h4>
                                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{msg.time}</span>
                            </div>
                            <p className={`text-sm truncate ${msg.unread ? 'text-gray-900' : 'text-gray-500'}`}>
                                {msg.content}
                            </p>
                        </div>
                        {msg.unread && (
                            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                        )}
                    </div>
                ))}
                {filtered.length === 0 && <p className="p-12 text-center text-gray-500">No messages found.</p>}
            </div>
        </div>
    );
};

export default Messages;
