import React from 'react'
import TeamCard from './Minor Components/TeamCard'
import {teamData} from '../utils/Data'

const Team = () => {
    
    return (
        <div className='flex flex-col px-2 md:px-10 py-10'>
            <div className='bg-white rounded-lg'>
                <div className='font-semibold text-left px-5 pt-5 pb-2 text-3xl'>Team</div>
                <div className='px-6 py-1 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consequatur aperiam et eos ipsum temporibus dicta maxime autem voluptas recusandae voluptatum cum aliquam dolorem odit voluptatibus, alias possimus?</div>
                {
                    teamData.map((data) => (
                        <TeamCard key={data.id} {...data}/>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Team