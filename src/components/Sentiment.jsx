import BarGraph from './Minor Components/BarGraph'
import KeyEventCarousel from './Minor Components/KeyEventCarousel'

const Sentiment = () => {

    return (
        <div className='bg-slate-200'>
            <div className='flex flex-col px-10 py-10'>
                <div className='bg-white rounded-lg'>
                    <div className='font-semibold text-left px-5 py-5 text-3xl'>Sentiment</div>

                    <div className='font-bold text-left px-5 text-gray-600 text-lg'>Key Events</div>
                    <KeyEventCarousel />
                    
                    <div className='font-bold text-left px-5 text-gray-600 text-lg'>Analyst Estimates</div>
                    <div className='flex'>
                        {/* Circle */}
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            className='w-36 h-36 text-green-500 fill-green-800'
                        >
                            <circle cx='12' cy='12' r='10' className='fill-green-100' />
                            <text
                                x="45%"
                                y="50%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                className='fill-green-600 font-semibold'
                                fontSize="6"
                            >
                                76
                            </text>
                            <text
                                x='65%'
                                y='50%'
                                dominantBaseline='middle'
                                textAnchor='middle'
                                className='fill-green-600 font-semibold'
                                fontSize='3'
                            >
                                %
                            </text>
                        </svg>
                        <BarGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sentiment