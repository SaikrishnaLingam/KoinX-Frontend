import React from 'react';

const TeamCard = ({ pic, name, designation, text }) => {
    return (
        <div className="flex flex-col lg:flex-row px-10 py-2">
            <div className="flex flex-col lg:flex-row bg-blue-100 rounded-lg">
                <div className="lg:w-1/4 flex flex-col items-center m-1">
                    <img src={pic} alt="Pic" className="rounded-lg w-28 h-34 mt-4" />
                    <p className="text-center font-bold">{name}</p>
                    <p className="text-center text-gray-700 font-semibold">{designation}</p>
                </div>
                <div className="lg:w-3/4 p-6 text-left">{text}</div>
            </div>
        </div>
    );
}

export default TeamCard;