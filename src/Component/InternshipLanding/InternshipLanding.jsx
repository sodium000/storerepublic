
import { Star } from 'lucide-react';


const EditorialArrow = ({ size = 24, color = "currentColor", className = "" }) => (
    <svg
        width={size} height={size} viewBox="0 0 100 100" fill="none"
        xmlns="http://www.w3.org/2000/svg" className={className}
    >
        <line x1="50" y1="5" x2="50" y2="95" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M25 70 C 40 70, 48 80, 50 95 C 52 80, 60 70, 75 70" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const InternshipLanding = () => {


    const testimonials = [
        "Mostahid Patwary", "Grace Morgan", "Benjamin Scott", "James Walker", "Emma Wallace"
    ];

    return (
        <div className="bg-white dark:bg-[#0f172a] text-slate-800 dark:text-slate-200 min-h-screen transition-colors duration-500 forum-regular">
            <main>
                <section className="relative bg-[#041624] py-32 px-4 overflow-hidden">
                    <div className="absolute bottom-50 right-50  pointer-events-none translate-x-1/4 translate-y-1/4">
                        <img src="/quote1.png" alt="" />
                    </div>

                    <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
                        <div className="flex gap-1 mb-10">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} className="text-white fill-white" />
                            ))}
                        </div>

                        <blockquote className="text-white text-xl md:text-3xl font-light leading-relaxed mb-12 max-w-4xl forum-regular italic">
                            "The Lex & Co internship wasn't just a learning experience; it was the foundation of my career. The mentorship and global exposure are truly unmatched in the industry."
                        </blockquote>

                        <div className="flex items-center gap-4 mb-16">
                            <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20">
                                <img alt="James Walker" className="w-full h-full object-cover" src="/comment.png" />
                            </div>
                            <div className="text-left">
                                <div className="text-white font-medium text-lg">James Walker</div>
                                <div className="text-white/60 text-xs tracking-widest uppercase">From USA</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 border-t border-white/10 pt-10 w-full max-w-4xl">
                            {testimonials.map((name) => (
                                <button
                                    key={name}
                                    className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 pb-1 border-b-2 ${name === "James Walker" ? "text-white border-white" : "text-white/40 border-transparent hover:text-white"
                                        }`}
                                >
                                    {name}
                                </button>
                            ))}
                        </div>

                        <a className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group" href="#">
                            <span className="text-sm underline underline-offset-8 decoration-[#bc836a]">Check out our Google Reviews</span>
                            <EditorialArrow size={30} color="#bc836a" className="rotate-270 group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default InternshipLanding;