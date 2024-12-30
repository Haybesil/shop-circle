import React from 'react'
import LargeCard from './LargeCard'
import { CreditCard, Layers, ShoppingCart } from 'lucide-react'

export default function LargeCards() {
  const orderStats = [
    {
        period: 'Today Order',
        sales: 'N1,000',
        color: 'bg-green-600',
        icon: <Layers/>
    },
    {
        period: 'Yesterday Sales',
        sales: 'N1,000',
        color: 'bg-purple-600',
        icon: <Layers/>
    },
    {
        period: 'This Month',
        sales: 'N1,000',
        color: 'bg-blue-600',
        icon: <ShoppingCart/>
    },
    {
        period: 'Last Month',
        sales: 'N1,000',
        color: 'bg-orange-600',
        icon: <CreditCard/>
    },
    {
        period: 'All Time Sales',
        sales: 'N1,000',
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
