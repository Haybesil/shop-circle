import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='bg-blue-700 space-y-6 w-52 h-screen text-blue-50 p-3 fixed left-0 top-0 shadow-md'>
      <Link href="#" className='pb-6'>Logo</Link>
      <div className='space-y-3 flex flex-col'>
      <Link href="#">Dashboard</Link>
      <Link href="#">Catalogue</Link>
      <Link href="#">Customers</Link>
      <Link href="#">Orders</Link>
      <Link href="#">Market</Link>
      <Link href="#">Farmer</Link>
      <Link href="#">Staff</Link>
      <Link href="#">Settings</Link>
      <Link href="#">Online Store</Link>
      </div>
    </div>
  )
}
