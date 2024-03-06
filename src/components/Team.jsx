import React from 'react'
import TeamCard from './Minor Components/TeamCard'

const Team = () => {
    const teamData = [
        {
            'id': '1',
            'pic': 'src/assets/guy1.svg',
            'name': "Ethan",
            'designation': 'CEO',
            'text': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, assumenda nobis. Amet voluptate, tempore doloribus ipsam rerum eveniet officiis neque autem porro animi quasi nesciunt quidem, corporis nam nostrum harum molestias fugit quaerat quos nulla, commodi consequuntur! Beatae amet aperiam repellendus sit quis, nulla eaque quasi dolore, perspiciatis modi, voluptas assumenda quibusdam aliquid totam porro saepe quisquam eum consequuntur ab."
        },
        {
            'id': '2',
            'pic': 'src/assets/guy2.svg',
            'name': "Ryan",
            'designation': 'CTO',
            'text': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, assumenda nobis. Amet voluptate, tempore doloribus ipsam rerum eveniet officiis neque autem porro animi quasi nesciunt quidem, corporis nam nostrum harum molestias fugit quaerat quos nulla, commodi consequuntur! Beatae amet aperiam repellendus sit quis, nulla eaque quasi dolore, perspiciatis modi, voluptas assumenda quibusdam aliquid totam porro saepe quisquam eum consequuntur ab."
        },
        {
            'id': '3',
            'pic': 'src/assets/guy3.svg',
            'name': "Brandon",
            'designation': 'COO',
            'text': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, assumenda nobis. Amet voluptate, tempore doloribus ipsam rerum eveniet officiis neque autem porro animi quasi nesciunt quidem, corporis nam nostrum harum molestias fugit quaerat quos nulla, commodi consequuntur! Beatae amet aperiam repellendus sit quis, nulla eaque quasi dolore, perspiciatis modi, voluptas assumenda quibusdam aliquid totam porro saepe quisquam eum consequuntur ab."
        }
    ]
    return (
        <div className='flex flex-col px-10 py-10'>
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