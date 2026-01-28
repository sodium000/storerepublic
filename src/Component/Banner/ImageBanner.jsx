import React from 'react';

const ImageBanner = () => {
    return (
        <div className='flex items-center mt-15'>
            <div className='text-[16px] forum-regular flex flex-col-reverse gap-15 ml-4'>
                <button className='rotate-270 hover:text-[#BE7D60]'>Dribbble</button>
                <button className='rotate-270 hover:text-[#BE7D60]'>Behance</button>
                <button className='rotate-270 hover:text-[#BE7D60]'>Github</button>
                <button className='rotate-270 hover:text-[#BE7D60]'>LinkedIn</button>
                <button className='rotate-270 hover:text-[#BE7D60]'>Facebook</button>
            </div>
            <div className='ml-5'>
                <img src="/placeholder.png" alt="" />
            </div>
        </div>
    );
};

export default ImageBanner;