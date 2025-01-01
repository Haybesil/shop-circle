'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductChart() {
    const data = {
        labels: ['Clothes', 'Hair', 'Footwear', 'Bottom', 'Cream', 'Others',],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgb(255, 99, 132)',  // Vivid red
                    'rgb(54, 162, 235)',  // Bright blue
                    'rgb(255, 159, 64)',   // Orange
                    'rgb(75, 192, 192)',  // Light teal
                    'rgb(153, 102, 255)', // Purple
                    'rgb(255, 205, 86)',  // Yellow
                ],
                borderColor: [
                    'rgb(255, 99, 132)',  // Vivid red
                    'rgb(54, 162, 235)',  // Bright blue
                    'rgb(255, 159, 64)',   // Orange
                    'rgb(75, 192, 192)',  // Light teal
                    'rgb(153, 102, 255)', // Purple
                    'rgb(255, 205, 86)',  // Yellow
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: '#306ED6', // Adjusts the legend text color
                    font: {
                        size: 14, // Adjusts the font size
                        weight: 'bold', // Adjusts the font weight
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;  // Show the label and data value
                    },
                },
                titleColor: 'rgb(255, 255, 255)', // Adjusts the tooltip title text color
                bodyColor: 'rgb(124, 234, 0)',  // Adjusts the tooltip body text color
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Tooltip background color (with transparency)
                borderColor: 'rgb(255, 99, 132)',  // Tooltip border color (optional)
                borderWidth: 1,  // Tooltip border width (optional)
            },
        },
        elements: {
            arc: {
                // Add shadow properties to the pie segments
                shadowOffsetX: 3,  // Horizontal shadow offset
                shadowOffsetY: 3,  // Vertical shadow offset
                shadowColor: 'rgba(0, 0, 0, 0.3)', // Shadow color (semi-transparent black)
                shadowBlur: 10,  // Shadow blur effect
            },
        },
    }

    return (
        <div className='bg-gray-200 p-8 rounded-lg'>
            <h2 className='text-blue-600 text-xl font-bold mb-4'>Best Selling Product</h2>
            {/* Chart */}
            <div className='mt-8'>
                <Pie data={data} options={options} className=''/>
            </div>
        </div>
    )
}
