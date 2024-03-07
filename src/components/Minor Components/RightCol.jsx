import React from 'react';

const RightCol = ({ MarketCap, MarketCapDominance, VolumeMarketCap, AllTimeHigh, AllTimeLow }) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row justify-between border-b-2'>
                <div className='text-gray-600'>Market Cap</div>
                <div>{MarketCap}</div>
            </div>
            <div className='flex flex-row justify-between border-b-2'>
                <div className='text-gray-600'>Market Cap Dominance</div>
                <div>{MarketCapDominance}</div>
            </div>
            <div className='flex flex-row justify-between border-b-2'>
                <div className='text-gray-600'>Volume / Market Cap</div>
                <div>{VolumeMarketCap}</div>
            </div>
            <div className='flex flex-row justify-between border-b-2'>
                <div className='text-gray-600'>All-Time High</div>
                <div>
                    <div className="flex justify-around">
                    <span className="text-left">$69,044.77</span>
                    <span className="text-right">-75.6%</span>
                    </div>
                    <div>Nov 10, 2021(about 1 year)</div>
                </div>
            </div>
            <div className='flex flex-row justify-between border-b-2'>
                <div className='text-gray-600'>All-Time Low</div>
                <div className='flex flex-col'>
                <div className="flex justify-around">
                    <span className="text-left">$67.81</span>
                    <span className="text-right">24729.1%</span>
                    </div>
                    <div>Jul 06, 2013 (over 9 years)</div>
                    </div>
            </div>
        </div>
    );
}

export default RightCol;
