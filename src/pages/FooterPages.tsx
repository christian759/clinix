import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface PageLayoutProps {
    title: string;
    children: React.ReactNode;
}

const PageLayout = ({ title, children }: PageLayoutProps) => (
    <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20 px-6 max-w-[1000px] mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-12">{title}</h1>
            <div className="prose prose-lg text-slate-600 max-w-none">
                {children}
            </div>
        </div>
        <Footer />
    </div>
);

export const About = () => (
    <PageLayout title="About Clinix">
        <p>
            Clinix is a healthcare technology company dedicated to simplifying the patient-provider relationship.
            Founded in 2024, our mission is to make healthcare accessible, transparent, and efficient for everyone.
        </p>
        <p>
            We believe that technology should fade into the background, allowing doctors to focus on care and patients
            to focus on recovery. Our platform integrates seamless scheduling, records management, and telehealth
            capabilities into one intuitive interface.
        </p>
        <h3>Our Mission</h3>
        <p>To empower every individual to take control of their health journey through intuitive technology.</p>
    </PageLayout>
);

export const Contact = () => (
    <PageLayout title="Contact Us">
        <p>We'd love to hear from you. Whether you have a question about features, pricing, or need a demo, our team is ready to answer all your questions.</p>

        <div className="grid md:grid-cols-2 gap-12 mt-12 not-prose">
            <div className="p-8 bg-slate-50 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Sales</h3>
                <p className="text-slate-600 mb-4">Interested in Clinix for your practice?</p>
                <a href="mailto:sales@clinix.com" className="text-blue-600 font-bold hover:underline">sales@clinix.com</a>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Support</h3>
                <p className="text-slate-600 mb-4">Need help using the platform?</p>
                <a href="mailto:support@clinix.com" className="text-blue-600 font-bold hover:underline">support@clinix.com</a>
            </div>
        </div>
    </PageLayout>
);

export const Privacy = () => (
    <PageLayout title="Privacy Policy">
        <p>Last updated: October 24, 2023</p>
        <p>At Clinix, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website.</p>
        <h3>Data Collection</h3>
        <p>We collect information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.</p>
        <h3>Security</h3>
        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
    </PageLayout>
);

export const Terms = () => (
    <PageLayout title="Terms of Service">
        <p>Please read these Terms of Service completely using clinix.com which is owned and operated by Clinix Inc.</p>
        <p>By using or accessing the Site in any way, viewing or browsing the Site, or adding your own content to the Site, you are agreeing to be bound by these Terms of Service.</p>
        <h3>Intellectual Property</h3>
        <p>The Site and all of its original content are the sole property of Clinix Inc. and are, as such, fully protected by the appropriate international copyright and other intellectual property rights laws.</p>
    </PageLayout>
);

export const Careers = () => (
    <PageLayout title="Careers">
        <p>Join us in revolutionizing healthcare. We are always looking for talented individuals to join our team.</p>
        <div className="mt-8 p-12 bg-slate-50 rounded-3xl text-center not-prose">
            <h3 className="text-2xl font-bold mb-4">No open positions right now</h3>
            <p className="text-slate-600">Check back later or send your resume to careers@clinix.com for future consideration.</p>
        </div>
    </PageLayout>
);

export const Pricing = () => (
    <PageLayout title="Pricing">
        <p className="text-xl mb-12">Simple, transparent pricing for practices of all sizes.</p>
        <div className="grid md:grid-cols-3 gap-8 not-prose">
            <div className="p-8 border border-slate-200 rounded-3xl">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="text-4xl font-bold mb-6">$99<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                <ul className="space-y-3 text-slate-600 mb-8">
                    <li>✓ 1 Practitioner</li>
                    <li>✓ Basic Scheduling</li>
                    <li>✓ Patient Records</li>
                </ul>
                <button className="w-full py-3 border border-dark rounded-xl font-bold hover:bg-slate-50">Get Started</button>
            </div>
            <div className="p-8 bg-dark text-white rounded-3xl shadow-xl transform md:-translate-y-4">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <div className="text-4xl font-bold mb-6">$299<span className="text-lg text-slate-400 font-normal">/mo</span></div>
                <ul className="space-y-3 text-slate-300 mb-8">
                    <li>✓ Up to 5 Practitioners</li>
                    <li>✓ Advanced Analytics</li>
                    <li>✓ Telehealth Integration</li>
                    <li>✓ Priority Support</li>
                </ul>
                <button className="w-full py-3 bg-white text-dark rounded-xl font-bold hover:bg-slate-100">Get Started</button>
            </div>
            <div className="p-8 border border-slate-200 rounded-3xl">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="text-4xl font-bold mb-6">Custom</div>
                <ul className="space-y-3 text-slate-600 mb-8">
                    <li>✓ Unlimited Practitioners</li>
                    <li>✓ Custom Integration</li>
                    <li>✓ SLA & Dedicated Manager</li>
                </ul>
                <button className="w-full py-3 border border-dark rounded-xl font-bold hover:bg-slate-50">Contact Sales</button>
            </div>
        </div>
    </PageLayout>
);

export const Integrations = () => (
    <PageLayout title="Integrations">
        <p>Clinix seamlessly connects with the tools you already use.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-12 not-prose">
            {['Epic', 'Cerner', 'Google Calendar', 'Zoom', 'Stripe', 'Slack'].map(tool => (
                <div key={tool} className="p-6 border border-slate-100 bg-slate-50 rounded-2xl flex items-center justify-center h-32 font-bold text-xl text-slate-400">
                    {tool}
                </div>
            ))}
        </div>
    </PageLayout>
);
