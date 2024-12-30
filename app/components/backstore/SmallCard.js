import React from 'react'

export default function SmallCard({ data }) {
    return (
        <div className={`rounded-lg text-white shadow-md p-8 flex gap-2 items-center bg-green-700`}>
            <span className={`p-2 rounded-full ${data.iconBg}`}>{data.icon}</span>
            <div>
                <p className='text-green-50'>{data.title}</p>
                <h2 className='text-xl lg:text-2xl font-bold'>{data.order}</h2>
            </div>
        </div>
    )
}
