/* eslint-disable no-irregular-whitespace */
import React from 'react';

const CustomArrow = ({ size = 150, color = "#000000" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth=".5"
        strokeLinecap="round"
        strokeLinejoin="round"

    >

        <line x1="12" y1="2" x2="12" y2="20" />

        <path d="M5 16C8 16 12 18 12 22C12 18 16 16 19 16" />
    </svg>
);


const Information = () => {

    return (
        <div className='grid grid-cols-12 w-11/12 mx-auto mt-35'>
            <div className='col-span-5 flex gap-7 flex-col'>
                <div>
                    <img src="/placeholder2.png" alt="" />
                </div>
                <div>
                    <img src="/placeholder1.png" alt="" />
                </div>
            </div>
            <div className='col-span-5 pl-15 forum-regular'>
                <div className='text-[48px] leading-13'>
                    Serving clients in every area of law since 1971 with experience and dedication.
                </div>
                <div className='mt-30 flex flex-col gap-19'>
                    <div>
                        <div className='text-[70px]'>1971</div>
                        <div className='text-[36px] flex items-center gap-2'>
                            <p>Founded in London </p>
                            <hr className=" w-25 mt-2 border-t text-[#BE7D60]" />
                        </div>
                        <div className='text-[16px] max-w-117.75'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                    </div>
                    <div>
                        <div className='text-[70px]'>1986</div>
                        <div className='text-[36px] flex items-center gap-2'>
                            <p>Firm Expansion</p>
                            <hr className=" w-25 mt-2 border-t text-[#BE7D60]" />
                        </div>
                        <div className='text-[16px] max-w-117.75'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                    </div>
                    <div>
                        <div className='text-[70px]'>1991 </div>
                        <div className='text-[36px] flex items-center gap-2'>
                            <p>Landmark Case Victory</p>
                            <hr className=" w-25 mt-2 border-t text-[#BE7D60]" />
                        </div>
                        <div className='text-[16px] max-w-117.75'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                    </div>
                </div>
            </div>
            <div className='col-span-1 flex flex-col items-center'>
                <div className="w-px h-80 bg-[#BE7D60] mt-55"></div>

            </div>
            <div className='    col-span-1 flex flex-col  items-start mt-70'>
                <div className="rotate-180 group-hover:text-[#BE7D60] text-gray-500">
                    <CustomArrow size={90} color="currentColor" />
                </div>
                <div className='text-[#BE7D60]'>
                    <CustomArrow size={90} color="currentColor" />
                </div>
            </div>
        </div>
    );
};

export default Information;