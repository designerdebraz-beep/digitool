import React from 'react';
import banner from './assets/banner.png'
import { Play } from 'lucide-react';
import { CircleDot } from 'lucide-react';

const Banner = () => {
    return (
        <div className='md:flex justify-between items-center gap-3 px-16'>
            <div className='space-y-7'>
                <div className='flex bg-[#4f39f618] rounded-full w-70'>
                     <CircleDot className='text-[#9514fa] text-xs' />
                         <p className=' text-left px-2 text-[#9514fa]'> New: AI-Powered Tools Available</p>
                </div>
                <h2 className='md:text-7xl font-extrabold text-[#161f34]'>Supercharge Your <br />Digital Workflow</h2>
              
                <p className='text-[#627382] '>Access premium AI tools, design assets, templates, and productivity <br />

software—all in one place. Start creating faster today. <br />
Explore Products 
</p>
                <div className='flex gap-4'>
                    <button className='text-white  from-blue-500 bg-linear-to-r via-blue-600 to-purple-700  focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5 cursor-pointer'>Explore Products</button>
                    <button className='btn btn-outline btn-primary rounded-full'>  <Play /> Watch Demo</button>
                </div>
            </div>
            <div>
                <img className='max-w-96 shadow h-8/12' src={banner} alt=""  />
            </div>
        </div>
    );
};

export default Banner;