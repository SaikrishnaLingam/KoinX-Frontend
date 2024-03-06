import React, { useEffect, useState } from 'react'
const greenArrow = 'https://i.ibb.co/V213cpN/upward-green.png';
const redArrow = 'https://i.ibb.co/0ctqGxZ/down-redpreview.png';

const Trending24H = () => {
    const [trend24H, setTrend24H] = useState([])

    const fetchTrend24H = async () => {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
                .then(response => response.json())
            const data = await response.coins;
            setTrend24H(data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchTrend24H();
    }, []);

    const topThree = trend24H.filter((coin) => coin.item.score >= 0 && coin.item.score <= 2).slice(0, 3);
    //if more than one elem has same score, then topThree will have more than 3 coins, so we have to use slice

    return (
        <div>
            <div className="flex flex-col bg-white shadow-md rounded-lg m-4 text-black text-md">
                <div className="flex p-4 font-bold border-gray-300 text-2xl">
                    <div className="flex-1 text-xl">
                        <p className='text-xl text-left'>Trending Coins (24 Hr)</p>
                    </div>
                </div>
                {topThree.map((coin, index) => (
                    <div key={index} className="flex pb-1 px-4 items-center">
                        {coin.item.small && (
                            <img
                                src={coin.item.small}
                                alt={coin.item.name}
                                className="w-8 h-8 object-cover rounded-full mr-2"
                            />
                        )}
                        <div className="flex-1 font-semibold">
                            <div className="flex items-center">
                                <div>{coin.item.name}</div>
                                <div className="ml-2">({coin.item.symbol})</div>
                            </div>
                        </div>
                        <div className="flex items-center bg-green-100 p-0.5 mx-2 rounded-lg text-green-700">
                            {coin.item.data.price_change_percentage_24h.usd >= 0 ? (
                                <img src={greenArrow} alt="Upward arrow" className="w-4 h-4 mr-1" />
                            ) : (
                                <img src={redArrow} alt="Downward arrow" className="w-4 h-4 mr-1" />
                            )}
                            <div className="mr-1">
                                {Math.abs(coin.item.data.price_change_percentage_24h.usd).toFixed(2)}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trending24H