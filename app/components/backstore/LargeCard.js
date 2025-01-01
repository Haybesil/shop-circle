import React from 'react'

export default function LargeCard({ data }) {
    return (
        <div className={`rounded-lg text-blue-600 shadow-md p-8 flex flex-col gap-2 items-center ${data.color}`}>
            <span>{data.icon}</span>
            <h4>{data.period}</h4>
            <h2 className='text-2xl lg:text-3xl'>{data.sales}</h2>
        </div>
    )
}
