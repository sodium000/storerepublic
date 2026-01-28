import React from 'react';

const Navbar = () => {
    return (
        <div className='forum-regular'>
            <div className="flex  py-2 justify-between bg-base-100 ">
                <div className="navbar-start flex-1">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Practice Areas</li>
                            <li>Our Team</li>
                            <li>Case Studies</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img src="/OBJECTS.png" alt="" />
                        <a className="ml-2 text-xl">JUSTIVO</a>
                    </div>
                </div>
                <div className="flex items-center">
                    <ul className="flex gap-15">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Practice Areas</li>
                        <li>Our Team</li>
                        <li>Case Studies</li>
                        <li>Blog</li>
                        <li className='mr-4'>Contact</li>
                    </ul>
                    <div className="px-7 py-2 bg-[#041C2C] font-[20px]  text-white">
                        <a>Free Consultation</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;