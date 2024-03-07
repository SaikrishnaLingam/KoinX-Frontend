import React from 'react';

const KeyEventCard = ({ bgColor, logo, heading, text, slidesToShow }) => {
    const cardStyle = {
        backgroundColor: bgColor,
    };

    return (
        <div className={`flex flex-row text-left items-start ml-1 p-4 border border-gray-300 rounded-xl`} style={cardStyle}>
            <span>
                <img src={logo} className="rounded-lg w-[18rem] h-34 mt-4" alt="logo" />
            </span>
            <div className={`ml-4 ${slidesToShow === 1 ? 'text-sm' : 'text-base'}`}>
                <h2 className="text-xl font-bold">{heading}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default KeyEventCard;
