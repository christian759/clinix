import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const { user, logout } = useAuth();
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Only show scroll background on home page, or always if not on home
    const navClass = isHome
        ? `fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' : 'py-6'}`
        : 'sticky top-0 left-0 right-0 z-50 py-4 bg-white shadow-sm';

    return (
        <nav className={navClass}>
            <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                        Clinix
                    </Link>
                </div>

                {/* Center Pills (Desktop) - Only show on Home */}
                {isHome && (
                    <div className="hidden md:flex items-center bg-white/50 backdrop-blur-md rounded-full px-2 py-1.5 border border-slate-100 shadow-sm">
                        {['Services', 'Features', 'Testimonials', 'Booking'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-dark hover:bg-white rounded-full transition-all"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            <Link to="/dashboard" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                                Dashboard
                            </Link>
                            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                                <span className="text-sm font-medium text-slate-600 hidden sm:block">
                                    Hi, {user.name}
                                </span>
                                <button
                                    onClick={logout}
                                    className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-bold rounded-full hover:bg-slate-200 transition-colors"
                                >
                                    Log out
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hidden md:block text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                                Log in
                            </Link>
                            <Link
                                to="/signup"
                                className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
