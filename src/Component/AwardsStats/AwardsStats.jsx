
import { ArrowUpRight, } from 'lucide-react';

const AwardsStats = () => {


    const stats = [
        {
            number: "54+",
            unit: "/Years",
            sub: "of legal excellence",
            img: "../../../public/award1.png",
            title: "Best law firm of the year",
            desc: "Awarded for outstanding legal service and client satisfaction across all practice areas."
        },
        {
            number: "500+",
            unit: "/Cases",
            sub: "successfully resolved",
            img: "../../../public/award2.png",
            title: "Top litigation firm – national legal excellence awards",
            desc: "Recognized for exceptional courtroom performance and high-profile case victories."
        },

        {
            number: "850k+",
            unit: "/Areas",
            sub: "handled across jurisdictions",
            img: "../../../public/awaed3.png",
            title: "Client choice award for legal services",
            desc: "Honored for consistent client satisfaction, trust, and long-term relationships."
        },
        {
            number: "10k+",
            unit: "/Hours",
            sub: "of courtroom representation",
            img: "../../../public/award4.png",
            title: "National excellence in advocacy award",
            desc: "Honored for consistent client satisfaction, trust, and long-term relationships."
        }
    ];

    return (
        <div className="bg-white mt-60 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 transition-colors duration-500 forum-regular">
            <section className=" px-20 py-20">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-12 group cursor-pointer border-b border-slate-100 dark:border-white/5 last:border-0`}
                    >
                        <div className="md:col-span-3">
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl md:text-6xl  tracking-tighter transition-transform group-hover:scale-105 inline-block duration-500">
                                    {item.number}
                                </span>
                                <span className="text-lg font-light text-slate-400 uppercase">
                                    {item.unit}
                                </span>
                            </div>
                            <p className="text-xs uppercase tracking-widest mt-2 text-slate-500 dark:text-slate-400">
                                {item.sub}
                            </p>
                        </div>

                        <div className="md:col-span-1 flex justify-center">
                            <img
                                alt={item.title}
                                className="w-20 h-24 object-cover shadow-sm transition-all duration-700 
                           rounded-[20px_4px_20px_4px]"
                                src={item.img}
                            />
                        </div>

                        <div className="md:col-span-4">
                            <h3 className="text-2xl  leading-tight group-hover:text-[#bc836a] transition-colors duration-300 uppercase tracking-tight">
                                {item.title}
                            </h3>
                        </div>

                        <div className="md:col-span-3">
                            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 ">
                                {item.desc}
                            </p>
                        </div>

                        <div className="md:col-span-1 flex justify-end">
                            <div className="w-12 h-12 rounded-full border border-[#bc836a] flex items-center justify-center 
                               rotate-45  transition-all duration-500">
                                <ArrowUpRight
                                    size={20}
                                    className="text-[#bc836a] transition-colors"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default AwardsStats;