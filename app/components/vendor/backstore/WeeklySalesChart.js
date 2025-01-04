'use client'

import React, { useState } from 'react';
import { useTheme } from 'next-themes'; // Import useTheme
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

export default function WeeklySalesChart() {
  const { theme } = useTheme(); // Access the current theme

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const isDarkMode = theme === 'dark';

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: isDarkMode ? '#FFFFFF' : '#000000', // Dynamic legend label color
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? '#FFFFFF' : '#000000', // Dynamic x-axis label color
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? '#FFFFFF' : '#000000', // Dynamic y-axis label color
        },
      },
    },
  };

  const labels = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'
  ];

  const getDatasetColor = (type) => {
    if (type === 'sales') {
      return {
        borderColor: isDarkMode ? 'rgb(255, 215, 0)' : 'rgb(53, 162, 235)',
        backgroundColor: isDarkMode ? 'rgba(255, 215, 0, 0.5)' : 'rgba(53, 162, 235, 0.5)',
      };
    }
    return {
      borderColor: isDarkMode ? 'rgb(255, 69, 0)' : 'rgb(255, 99, 132)',
      backgroundColor: isDarkMode ? 'rgba(255, 69, 0, 0.5)' : 'rgba(255, 99, 132, 0.5)',
    };
  };

  const tabs = [
    {
      title: 'Sales',
      type: 'sales',
      data: {
        label: 'Dataset 2',
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      },
    },
    {
      title: 'Orders',
      type: 'orders',
      data: {
        label: 'Dataset 1',
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      },
    },
  ];

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

  return (
    <div className='dark:bg-gray-500 bg-gray-200 p-8 rounded-lg'>
      <h2 className='text-blue-600 dark:text-gray-50 text-xl font-bold mb-4'>Weekly Sales</h2>

      <div className='mt-8'>
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {tabs.map((tab, i) => (
              <li className="me-2" key={i}>
                <button
                  onClick={() => setChartToDisplay(tab.type)}
                  className={chartToDisplay === tab.type
                    ? "inline-flex items-center justify-center p-4 border-b-2 border-blue-600 rounded-t-lg active text-blue-600 dark:text-gray-50 dark:border-blue-500 group"
                    : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-slate-700 dark:text-blue-900 group"
                  }>
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {tabs.map((tab, i) => {
          if (chartToDisplay === tab.type) {
            const colors = getDatasetColor(tab.type);
            return (
              <div key={i}>
                <Line
                  options={options}
                  data={{
                    labels,
                    datasets: [
                      {
                        ...tab.data,
                        borderColor: colors.borderColor,
                        backgroundColor: colors.backgroundColor,
                      },
                    ],
                  }}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
