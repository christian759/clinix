import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// --- Shared Layout ---
interface PageLayoutProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const PageLayout = ({ title, subtitle, children }: PageLayoutProps) => (
    <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20">
            <div className="max-w-[1200px] mx-auto px-6 mb-20 text-center">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-dark mb-6 tracking-tight">{title}</h1>
                {subtitle && <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
            </div>

            <div className="max-w-[1200px] mx-auto px-6">
                {children}
            </div>
        </div>
        <Footer />
    </div>
);

// --- Pages ---

// Images
import womanImg from '../assets/woman.png';
import manImg from '../assets/man.png';
import avatar1Img from '../assets/avatar1.png';
import avatar2Img from '../assets/avatar2.png';

// ... (PageLayout code remains same, handled by context)

export const About = () => {
    const staff = [
        { name: 'Dr. Sarah Connor', role: 'Chief of Medicine', img: womanImg },
        { name: 'Dr. John Smith', role: 'Head of Surgery', img: manImg },
        { name: 'Dr. Emily Chen', role: 'Lead Pediatrician', img: avatar1Img },
        { name: 'Dr. Michael Ross', role: 'Director of Cardiology', img: avatar2Img }
    ];

    return (
        <PageLayout title="About Clinix" subtitle="We are on a mission to simplify healthcare for patients and providers worldwide.">

            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                <div>
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Story</span>
                    <h2 className="text-3xl font-bold mb-6 font-display">A Sanctuary for Healing</h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        Clinix opened its doors in 2024 with a bold vision: to create a medical space that doesn't feel like a hospital. We believe the environment is just as important as the treatment.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Combining top-tier medical expertise with the warmth of hospitality and the efficiency of modern technology, we have created a clinic where patients feel heard, cared for, and respected.
                    </p>
                </div>
                <div className="bg-slate-100 rounded-[3rem] h-[400px] w-full flex items-center justify-center text-slate-300 text-6xl shadow-inner overflow-hidden relative">
                    <img src={womanImg} alt="Clinic Interior" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                </div>
            </div>

            <div className="mb-24">
                <h2 className="text-3xl font-bold mb-12 text-center font-display">Our Core Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Compassion First", desc: "We treat the person, not just the symptoms. Empathy is at the heart of every interaction.", icon: "💙" },
                        { title: "Clinical Excellence", desc: "Our team consists of world-renowned specialists dedicated to the highest standards of medicine.", icon: "⚕️" },
                        { title: "Holistic Wellbeing", desc: "We focus on preventative care and long-term vitality, helping you live your healthiest life.", icon: "🌿" }
                    ].map((val, i) => (
                        <div key={i} className="p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-slate-100">
                            <div className="text-4xl mb-6">{val.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold mb-12 text-center font-display">Medical Leadership</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {staff.map((person, i) => (
                        <div key={i} className="group">
                            <div className="bg-gray-200 rounded-3xl aspect-[3/4] mb-4 overflow-hidden relative">
                                <img src={person.img} alt={person.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <h4 className="font-bold text-lg">{person.name}</h4>
                            <p className="text-slate-500 text-sm">{person.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

export const Contact = () => (
    <PageLayout title="Contact Us" subtitle="We are here to help. Reach out to schedule a visit or ask a question.">
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                    <h3 className="text-xl font-bold mb-2 text-blue-900">Appointments</h3>
                    <p className="text-blue-700 mb-4 text-sm">Schedule or reschedule your visit.</p>
                    <a href="tel:+15550000000" className="text-xl font-bold text-blue-600 hover:underline">+1 (555) 000-0000</a>
                </div>
                <div className="p-8 bg-purple-50 rounded-3xl border border-purple-100">
                    <h3 className="text-xl font-bold mb-2 text-purple-900">Emergency</h3>
                    <p className="text-purple-700 mb-4 text-sm">For urgent medical attention.</p>
                    <a href="tel:911" className="text-xl font-bold text-purple-600 hover:underline">Dial 911</a>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Our Location</h3>
                    <p className="text-gray-600 text-sm">123 Wellness Blvd, Building A<br />San Francisco, CA 94103</p>
                </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                        <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"></textarea>
                    </div>
                    <button className="w-full py-4 bg-dark text-white rounded-xl font-bold text-lg hover:bg-black transition-colors shadow-lg shadow-black/20">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </PageLayout>
);

export const Pricing = () => (
    <PageLayout title="Transparent Care Pricing" subtitle="Clear, upfront costs for your consultations and procedures. Insurance accepted.">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200 rounded-3xl hover:border-blue-400 transition-colors">
                <h3 className="text-2xl font-bold mb-2">General Consult</h3>
                <p className="text-slate-500 text-sm mb-6">Standard checkups & visits</p>
                <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-bold tracking-tight">$150</span>
                    <span className="text-slate-500 ml-2">/visit</span>
                </div>
                <button className="w-full py-3 border-2 border-slate-200 text-dark font-bold rounded-xl hover:border-dark hover:bg-slate-50 transition-all mb-8">Book Visit</button>
                <ul className="space-y-4 text-slate-600 text-sm">
                    {['30-minute consultation', 'Basic vitals check', 'Prescription renewal', 'Referrals included'].map((feat, i) => (
                        <li key={i} className="flex items-center"><span className="text-green-500 mr-3">✓</span>{feat}</li>
                    ))}
                </ul>
            </div>

            <div className="p-8 bg-dark text-white rounded-3xl shadow-xl transform md:-translate-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                <h3 className="text-2xl font-bold mb-2">Wellness Membership</h3>
                <p className="text-slate-400 text-sm mb-6">Year-round comprehensive care</p>
                <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-bold tracking-tight">$299</span>
                    <span className="text-slate-400 ml-2">/year</span>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 mb-8">Join Membership</button>
                <ul className="space-y-4 text-slate-300 text-sm">
                    {['Unlimited telehealth', 'Annual full-body physical', 'Priority scheduling', '20% off specialist visits', 'Family coverage options'].map((feat, i) => (
                        <li key={i} className="flex items-center"><span className="text-blue-400 mr-3">✓</span>{feat}</li>
                    ))}
                </ul>
            </div>

            <div className="p-8 border border-slate-200 rounded-3xl hover:border-blue-400 transition-colors">
                <h3 className="text-2xl font-bold mb-2">Specialist Care</h3>
                <p className="text-slate-500 text-sm mb-6">Cardiology, Dermatology, etc.</p>
                <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-bold tracking-tight">$250</span>
                    <span className="text-slate-500 ml-2">/start</span>
                </div>
                <button className="w-full py-3 border-2 border-dark text-dark font-bold rounded-xl hover:bg-dark hover:text-white transition-all mb-8">Find Specialist</button>
                <ul className="space-y-4 text-slate-600 text-sm">
                    {['60-minute deep dive', 'Advanced diagnostics', 'Personalized treatment plan', 'Follow-up included', 'Direct specialist access'].map((feat, i) => (
                        <li key={i} className="flex items-center"><span className="text-green-500 mr-3">✓</span>{feat}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center font-display">Patient Questions</h2>
            <div className="space-y-4">
                {[
                    { q: "Do you accept insurance?", a: "Yes, we accept most major insurance providers including BlueCross, Aetna, Cigna, and Medicare." },
                    { q: "Can I book same-day appointments?", a: "We reserve blocks for urgent care and same-day appointments. Please call early." },
                    { q: "What is included in the membership?", a: "The membership covers preventative care, annual physicals, and unlimited telehealth, giving you peace of mind year-round." }
                ].map((faq, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl">
                        <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                        <p className="text-slate-600">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
    </PageLayout>
);

export const Careers = () => (
    <PageLayout title="Join Our Clinical Team" subtitle="Work at the forefront of patient-centered care.">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Why Practice at Clinix?</h2>
                <ul className="space-y-4 text-lg">
                    <li className="flex items-center"><span className="mr-3 text-2xl">👩‍⚕️</span> Focus on Patient Care, Not Paperwork</li>
                    <li className="flex items-center"><span className="mr-3 text-2xl">🏥</span> State-of-the-art Facilities</li>
                    <li className="flex items-center"><span className="mr-3 text-2xl">⚖️</span> Sustainable Work-Life Balance</li>
                    <li className="flex items-center"><span className="mr-3 text-2xl">🤝</span> Collaborative Specialist Network</li>
                </ul>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                    We believe that happy doctors lead to healthy patients. Clinix provides a supportive, modern environment where medical professionals can thrive.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed">
                    Our proprietary technology handles the administrative burden, so you can spend your time doing what you do best: healing.
                </p>
            </div>
        </div>

        <div>
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
                {[
                    { role: "General Practitioner", team: "Family Medicine", loc: "San Francisco Clinic" },
                    { role: "Senior Registered Nurse", team: "Critical Care", loc: "San Francisco Clinic" },
                    { role: "Pediatrician", team: "Pediatrics", loc: "San Francisco Clinic" },
                    { role: "Clinical Psychologist", team: "Mental Health", loc: "Remote / Hybrid" },
                    { role: "Medical Receptionist", team: "Administration", loc: "San Francisco Clinic" }
                ].map((job, i) => (
                    <div key={i} className="flex items-center justify-between p-6 border border-slate-200 rounded-2xl hover:border-blue-500 transition-colors group cursor-pointer">
                        <div>
                            <h4 className="text-xl font-bold text-dark group-hover:text-blue-600 transition-colors">{job.role}</h4>
                            <p className="text-slate-500">{job.team} • {job.loc}</p>
                        </div>
                        <span className="text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">Apply →</span>
                    </div>
                ))}
            </div>
        </div>
    </PageLayout>
);

export const Integrations = () => (
    <PageLayout title="Connect Your Stack" subtitle="Clinix works with 50+ of the tools you already know and love.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                { name: 'Epic', cat: 'EHR', icon: '🏥' },
                { name: 'Cerner', cat: 'EHR', icon: '📝' },
                { name: 'Google Calendar', cat: 'Scheduling', icon: '📅' },
                { name: 'Zoom', cat: 'Telehealth', icon: '📹' },
                { name: 'Stripe', cat: 'Payments', icon: '💳' },
                { name: 'Slack', cat: 'Communication', icon: '💬' },
                { name: 'Quickbooks', cat: 'Finance', icon: '📊' },
                { name: 'Outlook', cat: 'Email', icon: '📧' },
                { name: 'Salesforce', cat: 'CRM', icon: '☁️' }
            ].map(tool => (
                <div key={tool.name} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-all cursor-pointer">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className="text-xl font-bold mb-1">{tool.name}</h3>
                    <p className="text-slate-500 text-sm">{tool.cat}</p>
                </div>
            ))}
        </div>
    </PageLayout>
);

export const Privacy = () => (
    <PageLayout title="Privacy Policy" subtitle="Last updated: October 2023">
        <div className="prose prose-lg prose-blue mx-auto text-slate-600 bg-slate-50 p-12 rounded-3xl">
            <p>At Clinix, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website.</p>
            <h3>1. Introduction</h3>
            <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
            <h3>2. Collecting and Using Your Personal Data</h3>
            <p>We collect detailed health information to provide our services. This includes:</p>
            <ul>
                <li>Personal identification information (Name, email, phone number)</li>
                <li>Health records and medical history</li>
                <li>Payment information</li>
            </ul>
            <h3>3. Security of Your Data</h3>
            <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
        </div>
    </PageLayout>
);

export const Terms = () => (
    <PageLayout title="Terms of Service" subtitle="Please read these terms carefully before using Clinix.">
        <div className="prose prose-lg prose-blue mx-auto text-slate-600 bg-slate-50 p-12 rounded-3xl">
            <h3>1. Agreement to Terms</h3>
            <p>By viewing or using our Website, which can be accessed at clinix.com, you are agreeing to be bound by all these Website’s Terms of Use and agree with any applicable local laws.</p>
            <h3>2. Intellectual Property Rights</h3>
            <p>All content, trademarks and data on this Website, including software, databases, text, graphics, icons, hyperlinks, private information, designs and agreements, are the property of or licensed to us.</p>
            <h3>3. Limitation of Liability</h3>
            <p>Clinix shall not be held liable for any damages that arise out of the use or inability to use the materials on Clinix’s website, even if we or an authorized representative of this Website has been notified.</p>
        </div>
    </PageLayout>
);
