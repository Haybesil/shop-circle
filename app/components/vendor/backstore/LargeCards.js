import React from 'react'
import LargeCard from './LargeCard'
import { CreditCard, Layers, ShoppingCart } from 'lucide-react'

export default function LargeCards() {
  const orderStats = [
    {
        period: 'Today Order',
        sales: '5670',
        color: 'bg-gray-200',
        icon: <Layers/>
    },
    {
        period: 'Yesterday Sales',
        sales: '145,000',
        color: 'bg-gray-200',
        icon: <Layers/>
    },
    {
        period: 'This Month',
        sales: '457,000',
        color: 'bg-gray-200',
        icon: <ShoppingCart/>
    },
    {
        period: 'Last Month',
        sales: '768,000',
        color: 'bg-gray-200',
        icon: <CreditCard/>
    },
    {
        period: 'All Time Sales',
        sales: '1,827,400',
        color: 'bg-gray-200',
        icon: <CreditCard/>
    },
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8'>
      {
        orderStats.map((item, i) => (
          <LargeCard
            key={i}
            data={item}
          />
        ))
      }
    </div>
  )
}
