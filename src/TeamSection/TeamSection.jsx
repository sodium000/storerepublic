
import { Facebook, Twitter, Linkedin } from 'lucide-react';


const EditorialArrow = ({ size = 24, color = "currentColor", className = "" }) => (
    <svg
        width={size} height={size} viewBox="0 0 100 100" fill="none"
        xmlns="http://www.w3.org/2000/svg" className={className}
    >
        <line x1="50" y1="5" x2="50" y2="95" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M25 70 C 40 70, 48 80, 50 95 C 52 80, 60 70, 75 70" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const TeamSection = () => {

    const teamMembers = [
        { name: "Alexander reed", location: "New York", role: "Senior Partner", specialty: "Head of Corporate Law", img: "/placeholder6.png", socials: true },
        { name: "Clara thompson", location: "Chicago", role: "Managing Partner", specialty: "Lead Business Consultant", img: "/placeholder7.png", socials: true },
        { name: "James whitmore", location: "Los Angeles", role: "Courtroom Strategist", specialty: "Criminal Defense Attorney", img: "/imag9.png", socials: true },
        { name: "Sophia malik", location: "Houston", role: "Family Law Attorney", specialty: "Child Custody Specialist", img: "/image.png", socials: true }
    ];

    return (
        <>
            <div className="bg-[#041624] text-white transition-colors forum-regular duration-500">
                <section className="lg:px-40 pt-32 pb-60">
                    <div className="h-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {teamMembers.map((member, idx) => (
                                <div key={idx} className="group">
                                    <div className="relative overflow-hidden mb-6 aspect-4/5 bg-gray-800">
                                        <img
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                            src={member.img}
                                        />
                                        {member.socials && (
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col border-y border-l bg-black 
                                opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
                                                <a href="#" className="p-3 hover:text-[#c5a059] transition-colors border-b border-gray-800">
                                                    <Facebook size={12} />
                                                </a>
                                                <a href="#" className="p-3 hover:text-[#c5a059] transition-colors border-b border-gray-100 dark:border-gray-800">
                                                    <Twitter size={12} />
                                                </a>
                                                <a href="#" className="p-3 hover:text-[#c5a059] transition-colors">
                                                    <Linkedin size={12} />
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="font-forum text-2xl uppercase tracking-tighter mb-4 group-hover:text-[#c5a059] transition-colors">
                                        {member.name}
                                    </h3>

                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 text-[9px] uppercase tracking-widest border border-gray-700 text-gray-400">
                                            {member.location}
                                        </span>
                                        <span className="px-3 py-1 text-[9px] uppercase tracking-widest border border-gray-700 text-gray-400">
                                            {member.role}
                                        </span>
                                        <span className="px-3 py-1 text-[9px] uppercase tracking-widest border border-gray-700 text-gray-400">
                                            {member.specialty}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <section className="relative w-full z-10 forum-regular">
                <div className=" ml-40  group overflow-hidden shadow-2xl">
                    <div className="absolute -top-80 border w-436 h-125 md:h-150">
                        <img
                            alt="Initiatives"
                            className=" w-full h-full object-cover transition-transform duration-2000 "
                            src="/highlightcontent.png"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

                        <div className="absolute bottom-16 left-12 md:left-20 max-w-2xl">
                            <h2 className="font-forum text-5xl md:text-7xl text-white leading-[0.9] mb-10">
                                Contributing Important<br />Global Initiatives
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamSection;