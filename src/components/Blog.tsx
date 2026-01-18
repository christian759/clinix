import { motion } from 'framer-motion';

const posts = [
    {
        title: "The Future of Non-Invasive Surgery",
        category: "Technology",
        date: "March 15, 2026",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800",
        excerpt: "How nanobots are replacing traditional scalpels in modern operating rooms."
    },
    {
        title: "Understanding Your Genome",
        category: "Genetics",
        date: "March 10, 2026",
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
        excerpt: "Why preventative genetic mapping is the key to longevity and personalized health plans."
    },
    {
        title: "Mental Health in the Digital Age",
        category: "Wellness",
        date: "March 05, 2026",
        image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=800",
        excerpt: "New therapies merging VR and cognitive behavioral therapy showing promising results."
    }
];

const Blog = () => {
    return (
        <section className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Latest Insights</span>
                        <h2 className="text-4xl font-bold text-slate-900 mt-2">Health News</h2>
                    </div>
                    <button className="text-indigo-600 font-semibold hover:text-indigo-700 hidden md:block">
                        Read the Journal &rarr;
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="overflow-hidden rounded-2xl bg-indigo-50 h-64 mb-6 relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 uppercase tracking-wide">
                                    {post.category}
                                </div>
                            </div>
                            <span className="text-slate-400 text-sm font-medium">{post.date}</span>
                            <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 group-hover:text-indigo-600 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {post.excerpt}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
