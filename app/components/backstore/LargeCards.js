import React from 'react'
import LargeCard from './LargeCard'
import { CreditCard, Layers, ShoppingCart } from 'lucide-react'

export default function LargeCards() {
  const orderStats = [
    {
        period: 'Today Order',
        sales: '5670',
        color: 'bg-green-600',
        icon: <Layers/>
    },
    {
        period: 'Yesterday Sales',
        sales: '145,000',
        color: 'bg-purple-600',
        icon: <Layers/>
    },
    {
        period: 'This Month',
        sales: '457,000',
        color: 'bg-blue-600',
        icon: <ShoppingCart/>
    },
    {
        period: 'Last Month',
        sales: '768,000',
        color: 'bg-orange-600',
        icon: <CreditCard/>
    },
    {
        period: 'All Time Sales',
        sales: '1,827,400',
        color: 'bg-red-600',
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
