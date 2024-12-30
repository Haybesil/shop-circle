import React from 'react'
import { Check,LoaderCircle, RefreshCcw, ShoppingCart, Truck } from 'lucide-react'
import SmallCard from './SmallCard'

export default function SmallCards() {
  const orderStats = [
    {
        title: 'Total Order',
        order: '552',
        iconBg: 'bg-red-600',
        icon: <ShoppingCart/>
    },
    {
        title: 'Orders Pending',
        order: '185',
        iconBg: 'bg-purple-600',
        icon: <RefreshCcw/>
    },
    {
        title: 'Orders Processing',
        order: '45',
        iconBg: 'bg-blue-600',
        icon: <Truck/>
    },
    {
        title: 'Orders Delivered',
        order: '306',
        iconBg: 'bg-orange-600',
        icon: <Check/>
    },
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8'>
      {
        orderStats.map((item, i) => (
          <SmallCard
            key={i}
            data={item}
          />
        ))
      }
    </div>
  )
}
