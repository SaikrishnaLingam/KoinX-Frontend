import React from 'react'

const TeamCard = ({pic, name, designation, text}) => {
    return (
        <div className="flex flex-row px-10 py-2">
            <div className="flex flex-row bg-blue-100 rounded-lg">
                <div className="flex flex-col items-center m-4">
                    <img src={pic} alt="Pic" className=" rounded-lg w-64 h-34" />
                    <p className="text-center font-bold">{name}</p>
                    <p className="text-center text-gray-700 font-semibold">{designation}</p>
                </div>
                <div className="p-6 text-left">{text}</div>
            </div>
        </div>
    )
}

export default TeamCard