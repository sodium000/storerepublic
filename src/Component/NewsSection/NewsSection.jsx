
import { ArrowRight, MoveRight, Sun, Moon } from 'lucide-react';

const NewsSection = () => {


    const newsItems = [
        {
            id: 1,
            title: "When should you hire a lawyer? A practical guide for individuals & businesses",
            date: "June 2025",
            img: "/News1.png",
            isHighlighted: true
        },
        {
            id: 2,
            title: "Divorce and child custody: what you need to know in the United States of America",
            date: "June 2025",
            img: "/t0p1.png",
            isHighlighted: false
        },
        {
            id: 3,
            title: "How we achieved a landmark victory in a office workplace harassment case",
            date: "June 2025",
            img: "/News3.png",
            isHighlighted: false
        }
    ];

    return (
        <div className="bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 transition-colors duration-500 forum-regular">

            <main className=" w-11/12 mx-auto px-6 py-12">
                <div className="flex items-baseline mb-20 gap-20">
                    <header className=" px-6 pt-20">
                        <span className="text-[10px] uppercase tracking-[0.4em]  text-gray-400"> News</span>
                    </header>
                    <h1 className=" text-[48px]tracking-tighter uppercase leading-[0.9]">
                        Our recent news
                    </h1>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {newsItems.map((item) => (
                        <article key={item.id} className="flex flex-col group cursor-pointer">

                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#B47C62]"></span>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Insights</span>
                                </div>
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest text-right leading-tight">
                                    {item.date.split(' ')[0]}<br />{item.date.split(' ')[1]}
                                </span>
                            </div>

                            <div className={`relative mb-8 overflow-hidden ${item.isHighlighted ? ' p-1' : ''}`}>
                                <img
                                    alt={item.title}
                                    className="aspect-4/3 w-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    src={item.img}
                                />
                            </div>


                            <div className="flex items-start justify-between gap-6">
                                <h3 className={` text-xl md:text-2xl leading-tight transition-colors duration-300 
                  ${item.isHighlighted ? 'text-[#B47C62] underline decoration-[#B47C62] underline-offset-8' : 'group-hover:text-[#B47C62]'}`}>
                                    {item.title}
                                </h3>
                                <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 
                  ${item.isHighlighted ? 'bg-[#B47C62] text-white' : 'border border-[#B47C62] text-[#B47C62] group-hover:bg-[#B47C62] group-hover:text-white'}`}>
                                    <MoveRight size={20} />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>


            <footer className="mt-10 bg-[#FAF3EF] dark:bg-[#1E1A18] py-20 relative overflow-hidden">

                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-overlay"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-xl mx-auto">
                        <h4 className=" text-sm uppercase tracking-[0.4em] text-[#B47C62] mb-12">Newsletter</h4>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Enter your email address.."
                                className="w-full bg-transparent border-b border-[#B47C62]/30 dark:border-white/10 focus:border-[#B47C62] focus:ring-0 px-0 pb-6 text-2xl md:text-3xl  placeholder-gray-400 transition-colors duration-500 outline-none"
                            />
                            <button className="absolute right-0 bottom-6 flex items-center gap-3 text-[#B47C62] group/btn">
                                <span className="text-[10px] uppercase tracking-widest font-bold">Subscribe</span>
                                <ArrowRight size={18} className="-rotate-45 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default NewsSection;