import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, name?: string) => void;
    signup: (name: string, email: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Check for stored user
        const storedUser = localStorage.getItem('clinix_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email: string, name: string = 'User') => {
        // Mock login - in a real app, this would validate with a backend
        // For now, if we have a stored user matching the email, use that, otherwise create a session
        const storedUserStr = localStorage.getItem('clinix_user_db_' + email);

        let userToSet: User;
        if (storedUserStr) {
            userToSet = JSON.parse(storedUserStr);
        } else {
            // Allow "login" even if not signed up strictly, for demo purposes, or force signup?
            // Let's being strictish: if we found no specific user db, just use the provided info
            userToSet = {
                id: Math.random().toString(36).substr(2, 9),
                name: name,
                email: email
            };
        }

        setUser(userToSet);
        localStorage.setItem('clinix_user', JSON.stringify(userToSet));
    };

    const signup = (name: string, email: string) => {
        const newUser = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            email
        };
        // "Save" to a mock DB
        localStorage.setItem('clinix_user_db_' + email, JSON.stringify(newUser));

        // Auto login
        setUser(newUser);
        localStorage.setItem('clinix_user', JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('clinix_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
