import React from 'react';
import ImageBanner from './ImageBanner';
import ImfomationBanner from './ImfomationBanner';

const TextBanner = () => {
    return (
        <>
            <div className='flex mt-20 w-11/12 mx-auto items-center h-264px'>
                <div className='text-[132px] forum-regular leading-35'>
                    Justice. Advocacy. <br /> <span className='text-[#BE7D60]'>Results.</span>
                </div>
                <div className='flex items-center justify-center flex-1 h-full'>
                    <img className="max-w-full max-h-full object-contain" src="/Convert.png" alt="" />
                </div>
            </div>
            <ImageBanner></ImageBanner>
            <ImfomationBanner></ImfomationBanner>
        </>
    );
};

export default TextBanner;