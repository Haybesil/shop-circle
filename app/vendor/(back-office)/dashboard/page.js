import CustomDataTable from '@/app/components/vendor/backstore/CustomDataTable'
import DashboardCharts from '@/app/components/vendor/backstore/DashboardCharts'
import Headings from '@/app/components/vendor/backstore/Headings'
import LargeCards from '@/app/components/vendor/backstore/LargeCards'
import SmallCards from '@/app/components/vendor/backstore/SmallCards'
import React from 'react'

export default function page() {
  return (
    <div className='pl-60'>
      <Headings title="Dashboard Overview" />
      {/* Large cards */}
      <LargeCards />
      {/* Small cards */}
      <SmallCards />
      {/* charts */}
      <DashboardCharts />
      {/* tables */}
      <CustomDataTable/>
    </div>
  )
}
