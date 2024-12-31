import DashboardCharts from '@/app/components/backstore/DashboardCharts'
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
      {/* Small cards */}
      <SmallCards/>
      {/* charts */}
      <DashboardCharts/>
      {/* tables */}
    </div>
  )
}
