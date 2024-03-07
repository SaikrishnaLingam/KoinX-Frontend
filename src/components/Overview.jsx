import React from 'react';
import LeftCol from './Minor Components/LeftCol';
import RightCol from './Minor Components/RightCol';

const overviewData = {
    todayLow: '$38,900.00',
    current: '$40,100.00',
    todayHigh: '$42,100.00',
    marketCap: '$781,234,567,890.00',
    volume: '23,456,789,000 BTC',
    change: '+2.5%',
    supply: '21,000,000 BTC',
};

const Overview = () => {
    const {
        todayLow,
        todayHigh,
        marketCap,
        current,
        ...rest
    } = overviewData;

    const progBar = ((current - todayLow) / (todayHigh - todayLow)) * 100;


    return (
        <div className='bg-slate-200'>
            <div className='flex flex-col px-10 py-10'>
                <div className='bg-white rounded-lg flex flex-col'>
                    <div className='font-semibold text-left px-5 py-5 text-3xl'>Performance</div>
                    <div>
                        Bar1
                    </div>
                    <div>Bar2</div>
                    <div className='font-semibold text-left px-5 py-5 text-3xl'>Fundamentals</div>
                    <div className='flex flex-row justify-between px-10 mx-10 py-3 mb-8'>
                        <div>
                            <LeftCol />
                        </div>
                        <div>
                            <RightCol />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Overview;