import Headings from '@/app/components/backstore/Headings'
import LargeCards from '@/app/components/backstore/LargeCards'
import SmallCards from '@/app/components/backstore/SmallCards'
import React from 'react'

export default function page() {
  return (
    <div className='pl-52'>
      <Headings title="Dashboard Overview"/>
      {/* Large cards */}
      <LargeCards/>
      <SmallCards/>
      {/* Small cards */}
      {/* charts */}
      {/* tables */}
    </div>
  )
}
