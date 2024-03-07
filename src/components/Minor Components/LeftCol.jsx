import React from 'react';

const LeftCol = ({ BitcoinPrice, LH24h, LH7d, TradingVolume, MarketCapRank }) => {
    return (
        <div  className='flex flex-col gap-5'>
            <div className='flex flex-row justify-between border-b-2'>
                <div className='text-gray-600'>Bitcoin Price</div>
                <div>{BitcoinPrice}</div>
            </div>
            <div className='flex flex-row justify-between border-b-2'>
                <div className='text-gray-600'>24h Low / 24h High</div>
                <div>{LH24h}</div>
            </div>
            <div className='flex flex-row justify-between border-b-2'>
                <div className='text-gray-600'>7d Low / 7d High</div>
                <div>{LH7d}</div>
            </div>
            <div className='flex flex-row justify-between border-b-2'>
                <div className='text-gray-600'>Trading Volume</div>
                <div>{TradingVolume}</div>
            </div>
            <div className='flex flex-row justify-between border-b-2'>
                <div className='text-gray-600'>Market Cap Rank</div>
                <div>{MarketCapRank}</div>
            </div>
        </div>
    );
};

export default LeftCol;
