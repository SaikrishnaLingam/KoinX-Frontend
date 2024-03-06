import React from 'react'
import BarGraph from './Minor Components/BarGraph'

const Sentiment = () => {

    return (
        <div className='bg-slate-200'>
            <div className='flex flex-col px-10 py-10'>
                <div className='bg-white rounded-lg'>
                    <div className='font-semibold text-left px-5 py-5 text-3xl'>Sentiment</div>
                    <div className='font-bold text-left px-5 text-gray-600 text-lg'>Key Events</div>
                    <div>
                        Carousel
                    </div>
                    <div className='font-bold text-left px-5 text-gray-600 text-lg'>Analyst Estimates</div>
                    <div className='flex'>
                        <div className='flex'>Circle</div>
                        <BarGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sentiment