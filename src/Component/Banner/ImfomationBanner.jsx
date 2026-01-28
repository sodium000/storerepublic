import React from 'react';
import { RxArrowTopRight } from "react-icons/rx";


const ImfomationBanner = () => {
    return (
        <div className='forum-regular mt-20 grid grid-cols-3 w-11/12 mx-auto gap-30'>
            <div className='flex flex-col gap-3'>
                <div className='text-[48px] leading-13'>Driving impact through global legal initiatives</div>
                <div className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua velit esse cillum dolore eu fugiat</div>
            </div>
            <div className='flex justify-center flex-col gap-10 pt-10 pl-30'>
                <div className='text-[24px]'>Smart, actionable tips for <br /> modern businesses</div>
                <div className='flex items-center'>
                    <button>Read More</button>
                    <RxArrowTopRight />

                </div>
            </div>
            <div className='leading-13'>
                <div className='text-[70px]'>960k+</div>
                <div className='text-[24px] leading-6 mt-3'>Helping you move forward with <br/>confidence </div>
                <div className='flex items-center mt-9'>
                    <button>Read More</button>
                    <RxArrowTopRight />
                </div>
            </div>
        </div>
    );
};

export default ImfomationBanner;