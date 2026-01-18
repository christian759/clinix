import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Process from '../components/Process';
import Technology from '../components/Technology';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
            <Navigation />

            <main>
                <Hero />
                <Stats />
                <Services />
                <Process />
                <Features />
                <Technology />
                <Testimonials />
                <FAQ />
                <Booking />
            </main>

            <Footer />
        </div>
    );
}

export default Home;
