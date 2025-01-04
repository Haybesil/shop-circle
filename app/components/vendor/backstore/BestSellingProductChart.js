'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useTheme } from 'next-themes'; 

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductChart() {

    const { theme } = useTheme(); 
    const isDarkMode = theme === 'dark';

    const data = {
    labels: ['Clothes', 'Hair', 'Footwear', 'Bottom', 'Cream', 'Others'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: isDarkMode
          ? [
              'rgb(139, 0, 0)',   // Dark red
              'rgb(0, 123, 255)', // Dark blue
              'rgb(255, 140, 0)', // Dark orange
              'rgb(32, 178, 170)', // Teal
              'rgb(106, 90, 205)', // Slate blue
              'rgb(218, 165, 32)', // Goldenrod
            ]
          : [
              'rgb(255, 99, 132)',  // Vivid red
              'rgb(54, 162, 235)',  // Bright blue
              'rgb(255, 159, 64)',   // Orange
              'rgb(75, 192, 192)',  // Light teal
              'rgb(153, 102, 255)', // Purple
              'rgb(255, 205, 86)',  // Yellow
            ],
        borderColor: isDarkMode
          ? [
              'rgb(139, 0, 0)',   // Dark red
              'rgb(0, 123, 255)', // Dark blue
              'rgb(255, 140, 0)', // Dark orange
              'rgb(32, 178, 170)', // Teal
              'rgb(106, 90, 205)', // Slate blue
              'rgb(218, 165, 32)', // Goldenrod
            ]
          : [
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
                    color: isDarkMode ? '#FFFFFF' : 'slateblue',
                    font: {
                        size: 14, 
                        weight: 'medium', 
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
        <div className='dark:bg-gray-500 bg-gray-200 p-8 rounded-lg'>
            <h2 className='text-blue-600 dark:text-gray-50 text-xl font-bold mb-4'>Best Selling Product</h2>
            {/* Chart */}
            <div className='mt-8'>
                <Pie data={data} options={options} className=''/>
            </div>
        </div>
    )
}
