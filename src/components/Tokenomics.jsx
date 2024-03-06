import React from 'react'
import DoughnutChart from './Minor Components/DoughnutChart'

const Tokenomics = () => {
    return (
        <div className='flex flex-col px-10 py-10'>
            <div className='bg-white rounded-lg'>
                <div className='font-semibold text-left px-5 py-5 text-3xl'>Tokenomics</div>
                <div className='font-semibold text-left px-5 py-1 text-xl'>Initial Distribution</div>

                <div className='flex flex-row items-left px-6'>
                    <DoughnutChart />
                    {/* change padding and css later */}
                </div>

                <div className='p-6 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nihil ullam labore quia sint corrupti at, nam, ab dolorem suscipit voluptas dolores maxime harum saepe nulla aperiam, debitis eum! Iste quos doloribus quia dolore nostrum molestias? Vel est suscipit perferendis. Perspiciatis, cum perferendis, quisquam maiores totam ipsum rem soluta similique veritatis dolorum fugit itaque, aut debitis animi doloremque laudantium eaque quis enim nisi deleniti modi at ea nobis! Et suscipit maiores veniam maxime illum mollitia eveniet libero modi error, unde, obcaecati totam ipsam odio! Nesciunt, quas.</div>
            </div>
        </div>
    )
}

export default Tokenomics