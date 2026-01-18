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

export const About = () => (
    <PageLayout title="About Clinix" subtitle="We are on a mission to simplify healthcare for patients and providers worldwide.">

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
                <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Story</span>
                <h2 className="text-3xl font-bold mb-6 font-display">Born from a Need for Simplicity</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Clinix began in 2024 when a group of doctors and engineers realized that the technology running modern hospitals was stuck in the past.
                    Systems were slow, fragmented, and difficult to use.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                    We set out to build a platform that feels as intuitive as your favorite consumer apps, but with the power and security required for healthcare.
                    Today, we serve over 500 clinics and transform the lives of thousands of patients daily.
                </p>
            </div>
            <div className="bg-slate-100 rounded-[3rem] h-[400px] w-full flex items-center justify-center text-slate-300 text-6xl shadow-inner">
                {/* Image Placeholder */}
                🏢
            </div>
        </div>

        <div className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center font-display">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Patient First", desc: "Every decision we make starts with the question: 'How does this improve the patient experience?'", icon: "💙" },
                    { title: "Radical Transparency", desc: "No hidden fees, no confusing medical jargon. Just clear, honest communication.", icon: "🔍" },
                    { title: "Continuous Innovation", desc: "Healthcare never stops evolving, and neither do we. We ship improvements daily.", icon: "🚀" }
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
            <h2 className="text-3xl font-bold mb-12 text-center font-display">Meet the Leadership</h2>
            <div className="grid md:grid-cols-4 gap-6">
                {['Sarah Connor', 'John Smith', 'Emily Chen', 'Michael Ross'].map((name, i) => (
                    <div key={i} className="group">
                        <div className="bg-gray-200 rounded-3xl aspect-[3/4] mb-4 overflow-hidden relative">
                            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors"></div>
                        </div>
                        <h4 className="font-bold text-lg">{name}</h4>
                        <p className="text-slate-500 text-sm">{['CEO', 'CTO', 'Head of Product', 'Chief Medical Officer'][i]}</p>
                    </div>
                ))}
            </div>
        </div>
    </PageLayout>
);

export const Contact = () => (
    <PageLayout title="Contact Us" subtitle="Have a question or just want to say hi? We'd love to hear from you.">
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                    <h3 className="text-xl font-bold mb-2 text-blue-900">Support Context</h3>
                    <p className="text-blue-700 mb-4 text-sm">For technical issues and account help.</p>
                    <a href="mailto:support@clinix.com" className="text-xl font-bold text-blue-600 hover:underline">support@clinix.com</a>
                </div>
                <div className="p-8 bg-purple-50 rounded-3xl border border-purple-100">
                    <h3 className="text-xl font-bold mb-2 text-purple-900">Sales Inquiries</h3>
                    <p className="text-purple-700 mb-4 text-sm">For enterprise and clinic partnerships.</p>
                    <a href="mailto:sales@clinix.com" className="text-xl font-bold text-purple-600 hover:underline">sales@clinix.com</a>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Visit Us</h3>
                    <p className="text-gray-600 text-sm">123 Market Street, Suite 400<br />San Francisco, CA 94103</p>
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
    <PageLayout title="Simple, Transparent Pricing" subtitle="Choose the plan that's right for your practice. No hidden fees.">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200 rounded-3xl hover:border-blue-400 transition-colors">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-slate-500 text-sm mb-6">Perfect for solo practitioners</p>
                <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-bold tracking-tight">$99</span>
                    <span className="text-slate-500 ml-2">/mo</span>
                </div>
                <button className="w-full py-3 border-2 border-slate-200 text-dark font-bold rounded-xl hover:border-dark hover:bg-slate-50 transition-all mb-8">Start Free Trial</button>
                <ul className="space-y-4 text-slate-600 text-sm">
                    {['1 Practitioner', '500 Patient Records', 'Basic Scheduling', 'Email Support'].map((feat, i) => (
                        <li key={i} className="flex items-center"><span className="text-green-500 mr-3">✓</span>{feat}</li>
                    ))}
                </ul>
            </div>

            <div className="p-8 bg-dark text-white rounded-3xl shadow-xl transform md:-translate-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-slate-400 text-sm mb-6">For growing clinics</p>
                <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-bold tracking-tight">$299</span>
                    <span className="text-slate-400 ml-2">/mo</span>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 mb-8">Get Started</button>
                <ul className="space-y-4 text-slate-300 text-sm">
                    {['Up to 5 Practitioners', 'Unlimited Records', 'Telehealth Integration', 'Advanced Analytics', 'Priority Support'].map((feat, i) => (
                        <li key={i} className="flex items-center"><span className="text-blue-400 mr-3">✓</span>{feat}</li>
                    ))}
                </ul>
            </div>

            <div className="p-8 border border-slate-200 rounded-3xl hover:border-blue-400 transition-colors">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-slate-500 text-sm mb-6">For hospitals & networks</p>
                <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-bold tracking-tight">Custom</span>
                </div>
                <button className="w-full py-3 border-2 border-dark text-dark font-bold rounded-xl hover:bg-dark hover:text-white transition-all mb-8">Contact Sales</button>
                <ul className="space-y-4 text-slate-600 text-sm">
                    {['Unlimited Practitioners', 'Custom API Access', 'Dedicated Account Manager', 'SLA Guarantees', 'On-premise Deployment'].map((feat, i) => (
                        <li key={i} className="flex items-center"><span className="text-green-500 mr-3">✓</span>{feat}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center font-display">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {[
                    { q: "Can I upgrade my plan later?", a: "Absoutely. You can upgrade or downgrade your plan at any time from the dashboard settings." },
                    { q: "Is my patient data secure?", a: "Yes. We use military-grade encryption and are fully HIPAA and GDPR compliant." },
                    { q: "Do you offer a free trial?", a: "Yes, the Starter and Professional plans come with a 14-day free trial. No credit card required." }
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
    <PageLayout title="Join Our Mission" subtitle="Help us build the future of healthcare.">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Why Clinix?</h2>
                <ul className="space-y-4 text-lg">
                    <li className="flex items-center"><span className="mr-3 text-2xl">🚀</span> Fast-growing environment</li>
                    <li className="flex items-center"><span className="mr-3 text-2xl">⚕️</span> Meaningful impact on lives</li>
                    <li className="flex items-center"><span className="mr-3 text-2xl">🌍</span> Remote-first culture</li>
                    <li className="flex items-center"><span className="mr-3 text-2xl">💰</span> Competitive equity & salary</li>
                </ul>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                    We are a team of dreamers, doers, and problem solvers. We don't just write code; we solve real-world problems that affect millions of people.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed">
                    If you care about craft, empathy, and innovation, you'll fit right in.
                </p>
            </div>
        </div>

        <div>
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
                {[
                    { role: "Senior Frontend Engineer", team: "Product", loc: "Remote" },
                    { role: "Product Designer", team: "Design", loc: "San Francisco" },
                    { role: "Backend Engineer", team: "Infrastructure", loc: "Remote" },
                    { role: "Customer Success Manager", team: "Sales", loc: "New York" }
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
