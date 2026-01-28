
import { MapPin, Phone, Mail, ArrowUpRight, Sun, Moon } from 'lucide-react';

const ContactSection = () => {


    return (
        <div className="bg-white forum-regular dark:bg-[#0F0F0F] text-gray-900 dark:text-gray-100 transition-colors duration-500 font-sans min-h-screen flex items-center justify-center p-4 md:p-12">

            <div className=" w-full flex flex-col md:flex-row s overflow-hidden ">

                <div className="w-full md:w-1/3 bg-white dark:bg-[#0F0F0F] p-8 md:p-16 flex flex-col justify-between">
                    <div className="space-y-16">

                        <div className="flex items-start space-x-5 group">
                            <div className="bg-[#B97D67] p-3 flex items-center justify-center text-white shrink-0">
                                <MapPin size={20} strokeWidth={1.5} />
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">Location</p>
                                <p className="text-[#B97D67] leading-relaxed group-hover:underline cursor-pointer">
                                    612-7 Roanoke Rd,<br />
                                    Toronto, ON M3A 1E3,<br />
                                    Canada
                                </p>
                                <a href="#" className="flex items-center text-[10px] uppercase tracking-widest text-gray-500 hover:text-[#B97D67] transition-colors pt-2">
                                    Google Maps <ArrowUpRight size={12} className="ml-1" />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-5 group">
                            <div className="bg-[#B97D67] p-3 flex items-center justify-center text-white shrink-0">
                                <Mail size={20} strokeWidth={1.5} />
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">Email</p>
                                <p className="font-forum text-2xl tracking-tight lowercase">contact@email.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-5 group">
                            <div className="bg-[#B97D67] p-3 flex items-center justify-center text-white shrink-0">
                                <Phone size={20} strokeWidth={1.5} />
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">Phone</p>
                                <p className="font-forum text-2xl tracking-tight">+1-416-8241228</p>
                                <p className="font-forum text-2xl tracking-tight">+1-416-8241228</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <button className="border border-gray-200 dark:border-white/10 px-8 py-3 text-[10px] uppercase tracking-[0.3em] text-gray-500 hover:text-[#B97D67] hover:border-[#B97D67] transition-all flex items-center gap-2 group">
                            Read More <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="hidden md:block w-px bg-[#B97D67]"></div>

                <div className="w-full md:w-2/3 bg-[#F7EDE6] dark:bg-[#1A1614] p-8 md:p-20 flex flex-col justify-center">
                    <h2 className="font-forum text-5xl md:text-6xl text-gray-900 dark:text-gray-100 mb-16 max-w-lg leading-[0.9] uppercase tracking-tighter">
                        Fill out the form we will get in touch shortly
                    </h2>

                    <form className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="First name..."
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-[#B97D67] focus:ring-0 placeholder-gray-400 dark:placeholder-gray-600 transition-colors py-3 px-0 outline-none"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Last name..."
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-[#B97D67] focus:ring-0 placeholder-gray-400 dark:placeholder-gray-600 transition-colors py-3 px-0 outline-none"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email..."
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-[#B97D67] focus:ring-0 placeholder-gray-400 dark:placeholder-gray-600 transition-colors py-3 px-0 outline-none"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="Phone..."
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-[#B97D67] focus:ring-0 placeholder-gray-400 dark:placeholder-gray-600 transition-colors py-3 px-0 outline-none"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Subject..."
                                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-[#B97D67] focus:ring-0 placeholder-gray-400 dark:placeholder-gray-600 transition-colors py-3 px-0 outline-none"
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                rows="3"
                                placeholder="Message..."
                                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-[#B97D67] focus:ring-0 placeholder-gray-400 dark:placeholder-gray-600 transition-colors py-3 px-0 outline-none resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-8">
                            <button
                                type="submit"
                                className="bg-gray-950 dark:bg-black text-white px-12 py-4 text-[10px] uppercase tracking-[0.4em] font-medium hover:bg-[#B97D67] transition-all active:scale-95 shadow-xl"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;