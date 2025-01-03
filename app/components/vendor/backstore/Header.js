import { AlignJustify, Bell, Sun, User } from 'lucide-react'
import React from 'react'
import { NotificationDropDown, ProfileDropDown } from './DropDown'

export default function Header() {
    return (
        <div className='flex items-center justify-between bg-blue-800 text-blue-50 h-20 px-8 py-4 fixed left-60 right-0 top-0'>
            {/* Icon */}
            <button><AlignJustify /></button>
            {/* 3 Icons */}
            <div className='flex space-x-3'>
                <button><Sun className='text-green-600' /></button>

                <div type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg ">
                    <Bell className='text-green-600' />
                    <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full top-0 start-2 dark:border-gray-900">2</div>
                    <NotificationDropDown/>
                </div>
                <div>
                    {/* <User className='text-green-600' /> */}
                    <ProfileDropDown />
                </div>
            </div>
        </div>
    )
}
