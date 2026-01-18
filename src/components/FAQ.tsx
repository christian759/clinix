import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Do you accept international insurance?",
        answer: "Yes, we partner with major global insurance providers. Our dedicated team handles all the paperwork for direct billing."
    },
    {
        question: "How does the 'Smart Diagnosis' work?",
        answer: "We use a combination of non-invasive scanning technology and AI algorithms to analyze your vitals and biomarkers in real-time, providing results in minutes rather than days."
    },
    {
        question: "Can I book a consultation remotely?",
        answer: "Absolutely. Our TeleHealth platform allows you to have full consultations with our specialists from the comfort of your home, including digital prescription delivery."
    },
    {
        question: "What safety measures are in place?",
        answer: "Clinix operates with hospital-grade HEPA filtration and UV-C sterilization systems running 24/7. Our facility exceeds all WHO safety standards."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Common Questions</h2>
                    <p className="text-slate-600">Everything you need to know about your visit.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-semibold text-slate-800 text-lg">{faq.question}</span>
                                <span className={`transform transition-transform duration-300 text-indigo-500 font-bold text-xl ${openIndex === index ? 'rotate-180' : ''}`}>
                                    ↓
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
