
import { ArrowUpRight, Sun, Moon } from 'lucide-react';

const Footer = () => {


    const socialLinks = [
        { name: 'Linkedin', href: '#' },
        { name: 'Facebook', href: '#' },
        { name: 'Twitter', href: '#' },
    ];

    const navLinks = [
        { name: 'Home', href: '#', active: true },
        { name: 'About Us', href: '#' },
        { name: 'Practice Areas', href: '#' },
        { name: 'Our Team', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <footer className="relative overflow-hidden bg-[#021520] border-t border-slate-200 dark:border-white/5 pt-24 pb-12 px-6 md:px-12 lg:px-24 transition-colors forum-regular duration-500">
            <div
                className="absolute left-150  inset-0 pointer-events-none select-none mix-blend-normal"
            >
                <img src="/elements.png" alt="" className="opacity-100 brightness-500 contrast-500" />
            </div>

            <div className=" relative z-10">
                <div className="flex justify-between lg:gap-8">

                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <h2 className="font-display text-5xl lg:text-6xl leading-[0.9] text-white mb-10 tracking-tight">
                                Together, we build smarter<br />
                                <span className=" text-[#c5a47e]">legal outcomes</span>
                            </h2>
                            <div className="flex space-x-8">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="group flex items-center text-[10px] uppercase tracking-[0.3em] font-medium text-white hover:text-[#c5a47e] transition-colors duration-300"
                                    >
                                        {social.name}
                                        <ArrowUpRight size={14} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between gap-30'>
                        <div className="lg:col-span-4 flex flex-col justify-start space-y-10">
                            <div className="space-y-4">
                                <a
                                    className="block font-display text-3xl lg:text-4xl text-white hover:text-[#c5a47e] transition-colors duration-300 decoration-1 underline-offset-8 hover:underline"
                                    href="mailto:contact@email.com"
                                >
                                    contact@email.com
                                </a>
                                <a
                                    className="block font-display text-3xl lg:text-4xl text-white hover:text-[#c5a47e] transition-colors duration-300"
                                    href="mailto:consultancy@email.com"
                                >
                                    consultancy@email.com
                                </a>
                            </div>
                            <div>
                                <a className="group flex items-center text-[10px] uppercase tracking-[0.3em] text-white hover:text-[#c5a47e] transition-colors" href="#">
                                    Google Maps <ArrowUpRight size={14} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                        <div className="lg:col-span-3 flex flex-col justify-start lg:items-end lg:text-right space-y-12">
                            <address className=" text-sm leading-relaxed text-white tracking-wide">
                                612-7 Roanoke Rd,<br />
                                Toronto, ON M3A 1E3,<br />
                                Canada
                            </address>
                            <div className="space-y-2">
                                <a className="block font-display text-2xl text-white hover:text-[#c5a47e] transition-colors" href="tel:+14168241228">+1-416-8241228</a>
                                <a className="block font-display text-2xl text-white hover:text-[#c5a47e] transition-colors" href="tel:+14168241228">+1-416-8241228</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[10px] text-slate-400 uppercase tracking-[0.4em] order-2 md:order-1">
                        © 2026 THEMEMARCH. ALL RIGHTS RESERVED.
                    </div>

                    <nav className="order-1 md:order-2">
                        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`text-[11px] uppercase tracking-widest font-medium transition-colors hover:text-[#c5a47e] ${link.active
                                            ? 'text-[#c5a47e] underline decoration-[#c5a47e]/40 underline-offset-12'
                                            : 'text-slate-600 dark:text-slate-300'
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;