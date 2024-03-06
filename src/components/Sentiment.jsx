import React from 'react'
import BarGraph from './Minor Components/BarGraph'

const Sentiment = () => {
    // const graphData = {
    //     //we can also import data from a file and use Data.map() to create the labels, datasets, colors etc
    //     labels: ['Buy', 'Hold', 'Sell'],
    //     datasets: [
    //         {
    //             data: [76, 8, 16],
    //             backgroundColor: [
    //                 'rgba(0, 255, 0, 0.6)',
    //                 'rgba(255, 255, 0, 0.6)',
    //                 'rgba(255, 0, 0, 0.6)'
    //             ]
    //         }
    //     ]
    // }

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
                    <div className='flex-row'>
                        <div>Circle</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sentiment