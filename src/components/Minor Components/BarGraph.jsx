import React from 'react';

const BarGraph = () => {
    const categories = ['Buy', 'Hold', 'Sell'];
    const values = [76, 8, 16];
    const colors = ['#4CAF50', '#808080', '#F44336']; // Green, Gray, Red

    return (
        <div className="flex items-center">
            {categories.map((category, index) => (
                <div
                    key={category}
                    className="flex flex-col items-center mr-4"
                    style={{ height: '100px', width: `${values[index]}%` }}
                >
                    <div
                        className="bg-gray-300 h-full rounded"
                        style={{
                            background: colors[index],
                        }}
                    ></div>
                    <span className="mt-2 font-bold text-center">{`${values[index]}%`}</span>
                    <span className="text-center">{category}</span>
                </div>
            ))}
        </div>
    );
};

export default BarGraph;