'use client'

import React, { useState } from 'react'
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

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      };

      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    //   const data = {
    //     labels,
    //     datasets: [
    //       {
    //         label: 'Dataset 1',
    //         data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
    //         borderColor: 'rgb(255, 99, 132)',
    //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //       },
        //   {
        //     label: 'Dataset 2',
        //     data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        //     borderColor: 'rgb(53, 162, 235)',
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
        //   },
        // ],
    //   };
      

    const tabs = [
        {
            title: 'Sales',
            type: 'sales',
            data: {
                    label: 'Dataset 2',
                    data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                  },
        },
        {
            title: 'Orders',
            type: 'orders',
            data: {
                label: 'Dataset 1',
                data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
        }
    ];

    const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);


    return (
        <div className='bg-gray-200 p-8 rounded-lg'>
            <h2 className='text-blue-600 text-xl font-bold mb-4'>Weekly Sales</h2>

            <div className='mt-8'>
                {/*Tabs  */}


                <div className="border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">

                        {
                            tabs.map((tab, i) => {
                                return (
                                    <li className="me-2" key={i}>
                                        <button onClick={() => setChartToDisplay(tab.type)} className={chartToDisplay == tab.type ? "inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg   group"} >
                                            <svg className="w-4 h-4 me-2 text-gray-400  dark:text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                            </svg>
                                            {tab.title}
                                        </button>
                                    </li>
                                )
                            })
                        }


                        {/* <li className="me-2">
                            <button className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                                <svg className="w-4 h-4 me-2 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                Orders
                            </button>
                        </li> */}
                    </ul>
                </div>
                {/* Contents */}
                {
                    tabs.map((tab, i) => {
                        if (chartToDisplay === tab.type) {
                            return (
                                <div key={i}>
                                    
                                    <Line options={options} data={{
                        labels,
                        datasets: [tab.data],
                    }} />
                                </div>
                            )
                        } else {
                            return null
                        }
                    })
                }
            </div>
        </div>
    )
}
