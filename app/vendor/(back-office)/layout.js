import React from 'react'
import Sidebar from '../../components/vendor/backstore/Sidebar'
import Header from '../../components/vendor/backstore/Header'

export default function layout({ children }) {
  return (
    <div className='flex'>
      {/* sidebar */}
      <Sidebar />
      {/* mainbody */}
      <div className='w-full'>
        {/* header */}
        <Header />
        <main className='p-8 bg-white dark:bg-slate-800 text-blue-500 min-h-screen mt-16'>{children}</main>
        {/* main */}
      </div>
    </div>
  )
}
