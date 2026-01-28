
import { MdDarkMode, MdTrendingFlat } from "react-icons/md";

const InternshipPage = () => {

    return (
        <div>
            <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen transition-colors duration-300">
                <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
                    <div className="absolute top-[15%] right-[20%] w-60 h-50 hidden md:block animate-float-delayed">
                        <img
                            src="/right1.png"
                            alt="Professional"
                            className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-slate-200 dark:border-slate-800"
                        />
                    </div>

                    <div className="absolute bottom-[15%] left-[10%] w-60 h-50 hidden md:block animate-float">
                        <img
                            src="/left1.png"
                            alt="Boardroom"
                            className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-slate-200 dark:border-slate-800"
                        />
                    </div>

                    <div className="absolute bottom-[13%] right-[15%] w-60 h-50 hidden md:block animate-float-slow">
                        <img
                            src="/t0p1.png"
                            alt="Tablet"
                            className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-slate-200 dark:border-slate-800"
                        />
                    </div>

                    <div className="text-center forum-regular space-y-3">
                        <h1 className="serif-heading text-[70px] tracking-tight text-slate-900 dark:text-white">
                            become our intern
                        </h1>

                        <p className="text-slate-500 dark:text-slate-400  leading-relaxed max-w-lg mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>

                        <div className="pt-6">
                            <button className="ml-40 text-white px-7 py-4 flex items-center gap-3 mx-aut bg-[#a6725b] transition-all duration-300 group">
                                <span className="text-sm font-medium tracking-widest uppercase">
                                    Free Consultation
                                </span>
                                <MdTrendingFlat className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.02)_100%)] pointer-events-none" />
                </main>
            </div>
        </div>
    );
};

export default InternshipPage;
