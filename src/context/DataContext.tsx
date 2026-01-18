import React, { createContext, useContext, useState, useEffect } from 'react';

// --- Types ---
export interface Appointment {
    id: number;
    doctor: string;
    specialty: string;
    date: string;
    time: string;
    status: 'Confirmed' | 'Pending' | 'Cancelled';
    type: string;
}

export interface MedicalRecord {
    id: number;
    name: string;
    date: string;
    type: string;
    doctor: string;
}

export interface Doctor {
    id: number;
    name: string;
    specialty: string;
    rating: number;
    available: boolean;
    image?: string;
}

export interface Prescription {
    id: number;
    medication: string;
    dosage: string;
    doctor: string;
    date: string;
    status: 'Active' | 'Expired';
    refillsLeft: number;
}

export interface Message {
    id: number;
    sender: string;
    content: string;
    time: string;
    unread: boolean;
    avatar?: string;
}

interface DataContextType {
    appointments: Appointment[];
    records: MedicalRecord[];
    doctors: Doctor[];
    prescriptions: Prescription[];
    messages: Message[];
    addAppointment: (appt: Omit<Appointment, 'id' | 'status'>) => void;
    cancelAppointment: (id: number) => void;
    rescheduleAppointment: (id: number, newDate: string, newTime: string) => void;
    addRecord: (record: Omit<MedicalRecord, 'id'>) => void;
    markMessageRead: (id: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// --- Initial Mock Data ---
const INITIAL_APPOINTMENTS: Appointment[] = [
    { id: 1, doctor: "Dr. Sarah Smith", specialty: "Cardiologist", date: "2023-10-24", time: "10:00 AM", status: "Confirmed", type: "Check-up" },
    { id: 2, doctor: "Dr. James Wilson", specialty: "Dermatologist", date: "2023-11-05", time: "02:30 PM", status: "Pending", type: "Consultation" },
    { id: 3, doctor: "Dr. Emily Chen", specialty: "Pediatrician", date: "2023-12-12", time: "09:15 AM", status: "Confirmed", type: "Vaccination" },
];

const INITIAL_RECORDS: MedicalRecord[] = [
    { id: 1, name: "Blood Test Results", date: "2023-10-10", type: "PDF", doctor: "Dr. Sarah Smith" },
    { id: 2, name: "X-Ray Report", date: "2023-09-15", type: "JPG", doctor: "Dr. Roberts" },
    { id: 3, name: "Prescription #8842", date: "2023-10-12", type: "PDF", doctor: "Dr. Emily Chen" },
];

const INITIAL_DOCTORS: Doctor[] = [
    { id: 1, name: "Dr. Sarah Smith", specialty: "Cardiologist", rating: 4.9, available: true },
    { id: 2, name: "Dr. James Wilson", specialty: "Dermatologist", rating: 4.7, available: false },
    { id: 3, name: "Dr. Emily Chen", specialty: "Pediatrician", rating: 5.0, available: true },
    { id: 4, name: "Dr. Michael Brown", specialty: "Neurologist", rating: 4.8, available: true },
];

const INITIAL_PRESCRIPTIONS: Prescription[] = [
    { id: 1, medication: "Lisinopril", dosage: "10mg", doctor: "Dr. Sarah Smith", date: "2023-09-20", status: "Active", refillsLeft: 2 },
    { id: 2, medication: "Amoxicillin", dosage: "500mg", doctor: "Dr. Emily Chen", date: "2023-10-01", status: "Active", refillsLeft: 0 },
];

const INITIAL_MESSAGES: Message[] = [
    { id: 1, sender: "Dr. Sarah Smith", content: "Your blood test results look good. Keep up the exercise!", time: "10:30 AM", unread: true },
    { id: 2, sender: "Clinix Support", content: "Welcome to Clinix! Let us know if you need help.", time: "Yesterday", unread: false },
];

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Initialize state from localStorage or defaults
    const [appointments, setAppointments] = useState<Appointment[]>(() => {
        const saved = localStorage.getItem('clinix_appointments');
        return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
    });

    const [records, setRecords] = useState<MedicalRecord[]>(() => {
        const saved = localStorage.getItem('clinix_records');
        return saved ? JSON.parse(saved) : INITIAL_RECORDS;
    });

    const [doctors] = useState<Doctor[]>(INITIAL_DOCTORS); // Doctors likely static for this demo

    const [prescriptions, setPrescriptions] = useState<Prescription[]>(() => {
        const saved = localStorage.getItem('clinix_prescriptions');
        return saved ? JSON.parse(saved) : INITIAL_PRESCRIPTIONS;
    });

    const [messages, setMessages] = useState<Message[]>(() => {
        const saved = localStorage.getItem('clinix_messages');
        return saved ? JSON.parse(saved) : INITIAL_MESSAGES;
    });


    // --- Persistence Effects ---
    useEffect(() => localStorage.setItem('clinix_appointments', JSON.stringify(appointments)), [appointments]);
    useEffect(() => localStorage.setItem('clinix_records', JSON.stringify(records)), [records]);
    useEffect(() => localStorage.setItem('clinix_prescriptions', JSON.stringify(prescriptions)), [prescriptions]);
    useEffect(() => localStorage.setItem('clinix_messages', JSON.stringify(messages)), [messages]);


    // --- Actions ---
    const addAppointment = (appt: Omit<Appointment, 'id' | 'status'>) => {
        const newAppt: Appointment = {
            ...appt,
            id: Date.now(),
            status: 'Confirmed'
        };
        setAppointments(prev => [...prev, newAppt]);
    };

    const cancelAppointment = (id: number) => {
        setAppointments(prev => prev.filter(a => a.id !== id));
    };

    const rescheduleAppointment = (id: number, newDate: string, newTime: string) => {
        setAppointments(prev => prev.map(a =>
            a.id === id ? { ...a, date: newDate, time: newTime } : a
        ));
    };

    const addRecord = (record: Omit<MedicalRecord, 'id'>) => {
        const newRecord = { ...record, id: Date.now() };
        setRecords(prev => [newRecord, ...prev]);
    };

    const markMessageRead = (id: number) => {
        setMessages(prev => prev.map(m => m.id === id ? { ...m, unread: false } : m));
    };

    return (
        <DataContext.Provider value={{
            appointments, records, doctors, prescriptions, messages,
            addAppointment, cancelAppointment, rescheduleAppointment, addRecord, markMessageRead
        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
