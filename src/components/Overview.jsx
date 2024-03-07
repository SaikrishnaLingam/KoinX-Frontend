import React from 'react';
import LeftCol from './Minor Components/LeftCol';
import RightCol from './Minor Components/RightCol';
import { leftColData, rightColData } from '../utils/Data';

const Overview = () => {

    return (
        <div className='bg-slate-200'>
            <div className='flex flex-col px-2 md:px-10 py-10'>
                <div className='bg-white rounded-lg flex flex-col'>
                    <div className='font-semibold text-left px-5 py-5 text-3xl'>Performance</div>
                    <div className='flex flex-col gap-4'>
                    <div className='flex gap-7 items-center mx-4'>
                        <div className='flex flex-col gap-2'>
                            <span>Today's Low</span>
                            <span>46,930.22</span>
                        </div>
                        <div className='ml-[4%] w-[90%] h-[5px]  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-2xl'></div>
                        <div className='flex flex-col gap-2'>
                            <span>Today's High</span>
                            <span>49,343.83</span>
                        </div>
                    </div>
                    <div className='flex gap-7 items-center mx-4'>
                    <div className='flex flex-col gap-2'>
                            <span>52W Low</span>
                            <span>16,930.22</span>
                        </div>
                        <div className='ml-[4%] w-[90%] h-[5px] mt-[4%] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-2xl'></div>
                        <div className='flex flex-col gap-2'>
                            <span>52W High</span>
                            <span>49,743.83</span>
                        </div>
                    </div>
                    </div>
                    <div className='font-semibold text-left px-5 py-5 text-3xl'>Fundamentals</div>
                    <div className='flex flex-col md:flex-row justify-between px-2 py-3 mb-8'>
                        <div className='md:pl-2 md:ml-8'>
                            <LeftCol {...leftColData}/>
                        </div>
                        <div className='md:pr-2 md:mr-8'>
                            <RightCol {...rightColData}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Overview;