import React from 'react';

const BarGraph = () => {
    return (
        <div className='flex w-4/12 justify-center items-center ml-10'>
            <div className='flex flex-col text-center'>
                <h1>Buy</h1>
                <h1>Sell</h1>
                <h1>Hold</h1>
            </div>
            <div className='flex flex-col'>
                <progress value={76} max={100} className='py-1 my-1 mx-1 md:mx-4' />
                <progress value={8} max={100} className='py-1 my-1 mx-1 md:mx-4' />
                <progress value={16} max={100} className='py-1 my-1 mx-1 md:mx-4' />
            </div>
        </div>
    );
};

export default BarGraph;
