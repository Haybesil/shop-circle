import Link from 'next/link';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CatalogueDropDown } from './CatalogueDropDown';
import { LogoutButton } from '../../ui/Button';


export default function Sidebar() {
  return (

    <nav className=''>
      <div className='bg-blue-700 w-60 h-screen text-blue-50 p-3 fixed left-0 top-0 shadow-md overflow-y-auto mb-3'>
        <div>
          <Link href="#" className=''>
            <img className='' src="/assets/logo.png" alt="" />
          </Link>
        </div>

        {/* <div className='space-y-3 flex flex-col'>
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
 */}


        <div className="md:flex">
          <ul className="flex-column space-y space-y-4 text-sm font-medium ml-5 md:me-4 mb-4 md:mb-0">

            <li>
              <Link href="/vendor/dashboard" className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-blue-50 hover:bg-gray-100 w-44 text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" /></svg>
                Dashboard
              </Link>
            </li>

            <CatalogueDropDown />
            <li>
              <Link href="/vendor/dashboard/customers" className="inline-flex items-center px-4 py-3 text-blue-500 bg-blue-50 rounded-lg active w-full " aria-current="page">
                <img className='w-4 h-4 me-2' src="/assets/customer.svg" alt="" />
                Customers
              </Link>
            </li>
            <li>
              <Link href="/vendor/dashboard/orders" className="inline-flex items-center px-4 py-3 text-white bg-blue-600 rounded-lg active w-full " aria-current="page">
                <img className='w-4 h-4 me-2' src="/assets/order.svg" alt="" />
                Orders
              </Link>
            </li>
            <li>
              <Link href="/vendor/dashboard/staff" className="inline-flex items-center px-4 py-3 text-blue-500 bg-blue-50 rounded-lg active w-full " aria-current="page">
                <img className='w-4 h-4 me-2' src="/assets/staff.svg" alt="" />
                Staffs
              </Link>
            </li>
            <li>
              <Link href="/vendor/dashboard/store" className="inline-flex items-center px-4 py-3 text-white bg-blue-600 rounded-lg active w-full " aria-current="page">
                <img className='w-4 h-4 me-2' src="/assets/online-store.svg" alt="" />
                Online Store
              </Link>
            </li>

            <li>
              <Link href="/vendor/dashboard/settings" className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-blue-50 hover:bg-gray-100 w-full text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                </svg>
                Settings
              </Link>
            </li>
            <li>
              <Link href="#" className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-blue-600 hover:bg-gray-100 w-full  dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z" />
                  <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z" />
                </svg>
                Contact
              </Link>
            </li>


            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
