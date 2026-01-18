import { useState, useEffect } from 'react';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                </div>

                {/* Center Pills (Desktop) */}
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

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <a href="#" className="hidden md:block text-sm font-bold text-dark">Log in</a>
                    <button className="px-6 py-2.5 bg-dark text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-dark/20">
                        Get Demo
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
