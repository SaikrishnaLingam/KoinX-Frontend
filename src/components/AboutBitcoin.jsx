import React from 'react'
import AboutBitcoinCard from './Minor Components/AboutBitcoinCard'

const AboutBitcoin = () => {
    return (
        <div className='flex flex-col px-2 md:px-10 py-10'>
            <div className='bg-white rounded-lg'>

                <div className='font-semibold text-left px-5 pt-5 pb-2 text-3xl'>About Bitcoin</div>
                <div className='px-10 text-left'>
                    <h1 className=' font-semibold text-2xl my-3 '>What is Bitcoin</h1>
                    <div className='border-b-2 flex pb-5'>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</div>
                </div>

                <div className='px-10 text-left'>
                    <div className=' font-semibold text-2xl my-3 '>Lorem ipsum dolor sit amet.</div>
                    <div className='pb-6'>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</div>
                    <div className='pb-6'>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</div>
                    <div className='pb-6 border-b-2 flex'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</div>
                </div>

                <div className='px-10 text-left'>
                    {/* Already Holding Bitcoin */}
                    <div className=' font-semibold text-2xl my-3 '>Already Holding Bitcoin?</div>
                    <div className='flex flex-col md:flex-row border-b-2 pb-3'>
                        <AboutBitcoinCard backgroundColor={'blue'} imageSrc={"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/au/wp-content/uploads/2023/08/piggybank-sK-ziQvKGsk-unsplash-scaled-e1691736853555.jpg"} heading1={"Calculate your Profits"} buttonLabel={"Check now"} />
                        <AboutBitcoinCard backgroundColor={'red'} imageSrc={"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/au/wp-content/uploads/2023/08/piggybank-sK-ziQvKGsk-unsplash-scaled-e1691736853555.jpg"} heading1={"Calculate your tax liability"} buttonLabel={"Check now"} />
                    </div>
                </div>

                <div className='px-10 text-left'>
                    <div className='pb-6 border-b-2 flex'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</div>
                </div>

            </div>
        </div>
    )
}

export default AboutBitcoin