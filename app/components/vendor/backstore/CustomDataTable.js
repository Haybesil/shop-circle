'use client'

import React, { useState } from 'react'
import data from '../../../../data.json'

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CustomDataTable() {

    console.log(data);

    const PAGE_SIZE = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE
    const currentlyDisplayedData = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / PAGE_SIZE);
    const itemStartIndex = startIndex + 1;
    const itemEndIndex = endIndex > data.length ? data.length : endIndex;



    return (
        <div className='dark:bg-gray-500 bg-gray-200 p-8 rounded-lg mt-8'>
            <h2 className='text-blue-600 dark:text-gray-50 text-xl font-bold mb-4'>Recent Orders</h2>

            {/* Table */}



            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs  uppercase bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                        <tr>
                            <th scope="col" className="p-4">
                                {/* <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div> */}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentlyDisplayedData.map((item, i) => {
                                return (
                                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ">
                                            {item.product_name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.color}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.category}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-yellow-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }






                    </tbody>
                </table>
                <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 pl-4 bg-gray-50 dark:bg-gray-700" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">{itemStartIndex}-{itemEndIndex}</span> of <span className="font-semibold text-gray-900 dark:text-white">{data.length}</span></span>
                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 mb-2 mr-2">
                        <li>
                            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage == 1} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><ChevronLeft/></button>
                        </li>
                        {Array.from({ length: totalPages }, (_, index) => {
                            const pageNumber = index + 1;
                            return (
                                <li key={pageNumber}>
                                    <button
                                        onClick={() => setCurrentPage(pageNumber)}
                                        className={`flex items-center justify-center px-3 h-8 leading-tight border 
                            ${currentPage === pageNumber
                                                ? 'text-gray-50 bg-blue-600 hover:bg-blue-300 hover:text-blue-700'
                                                : 'text-gray-500 bg-white hover:bg-gray-300 hover:text-gray-700'}
                            border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                                    >
                                        {pageNumber}
                                    </button>
                                </li>
                            );
                        })}
                        <li>
                            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage == totalPages} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><ChevronRight/></button>
                        </li>
                    </ul>
                </nav>
            </div>


        </div>
    )
}
