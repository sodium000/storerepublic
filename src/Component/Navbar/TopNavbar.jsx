import React from 'react';

const TopNavbar = () => {
    return (
        <div className='forum-regular text-[16px] flex justify-between w-11/12 mx-auto py-2'>
            <div className='flex gap-5'>
                <p>FAQ</p>
                <p>Personnel</p>
                <p>Our Expertise</p>
            </div> 
            <div className='flex gap-8'>
                <p>consultancy@email.com</p>
                <p>Mon - Sat : 8:00 - 16:00</p>
            </div> 
        </div>
    );
};

export default TopNavbar;