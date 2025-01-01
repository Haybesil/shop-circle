import Link from 'next/link'
import React from 'react'

export default function Headings({ title }) {
  return (
    <div>
      <Link href='/dashboard/coupons' className='text-2xl font-semibold text-blue-500'>{title}</Link>
    </div>
  )
}

