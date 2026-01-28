
import { Moon, Sun } from 'lucide-react';


const EditorialArrow = ({ size = 24, color = "currentColor", className = "" }) => (
    <svg
        width={size} height={size} viewBox="0 0 100 100" fill="none"
        xmlns="http://www.w3.org/2000/svg" className={className}
    >
        <line x1="50" y1="5" x2="50" y2="95" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M25 70 C 40 70, 48 80, 50 95 C 52 80, 60 70, 75 70" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CaseStudies = () => {



    const cases = [
        {
            img: "../../../public/image(1).png",
            title: "Secured $2.5m settlement in construction injury case"
        },
        {
            img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800",
            title: "Won full custody for father in complex divorce case",
            hasIcon: true
        },
        {
            img: "/image(4).png",
            title: "Cleared wrongfully accused client in criminal defense case"
        },
        {
            img: "/image(3).png",
            title: "Closed a major m&a deal with full legal oversight"
        }
    ];

    return (
        <div className="bg-white dark:bg-[#121212] text-[#1a1a1a] forum-regular dark:text-gray-200 transition-colors duration-500 min-h-screen ">
            <section className="max-w-11/12 mx-auto">
                <div className="flex flex-col md:flex-row border-t border-gray-100 dark:border-gray-800 pt-8 mb-16">
                    <div className="md:w-1/4 mb-8 md:mb-0">
                        <h2 className="font-forum text-3xl md:text-4xl uppercase tracking-tighter">
                            Case study
                        </h2>
                    </div>

                    <div className="md:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                            {cases.map((item) => (
                                <div key={item.id} className="group cursor-pointer">
                                    <div className="relative overflow-hidden mb-6 aspect-3/2 bg-gray-100 dark:bg-gray-900">
                                        <img
                                            alt={item.title}
                                            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                                            src={item.img}
                                        />

                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className='w-130 h-90 flex items-center justify-center bg-[#041624]/30 '>
                                                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                                                    <EditorialArrow size={36} color="#BE7D60" className="rotate-210" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="font-forum text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-300 transition-colors duration-300 group-hover:text-[#bc836a]">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;