import React from 'react'
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DoughnutChart = () => {
    const data = {
        labels: ["Crowdsale Investors: 80%", "Foundation: 20%"],
        datasets: [
            {
                data: [80, 20],
                backgroundColor: ["blue", "gold"],
                borderColor: ["blue", "gold"],
                borderWidth: 0.5,
            },
        ],
    };
    return (
        <div>
            <Chart
                type="doughnut"
                data={data}
                options={{
                    cutout: "75%",
                    plugins: {
                        legend: {
                            display: true,
                            position: "right",
                        },
                    },
                    borderWidth: 0.25,
                }}
            />
        </div>
    )
}

export default DoughnutChart