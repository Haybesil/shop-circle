
import { AlignJustify, Bell, Sun, User } from 'lucide-react'
import React from 'react'
import { NotificationDropDown, ProfileDropDown } from './DropDown'
import { ThemeChanger } from '../../ThemeSwitcher'



export default function Header() {
    return (
        <div className='flex items-center justify-between bg-blue-800 text-blue-50 h-20 px-8 py-4 fixed left-60 right-0 top-0'>
            {/* Icon */}
            <button><AlignJustify /></button>
            {/* 3 Icons */}
            <div className='flex space-x-3'>
               <ThemeChanger/>

                <div>
                    <NotificationDropDown />
                </div>
                <div>
                    {/* <User className='text-green-600' /> */}
                    <ProfileDropDown />
                </div>
            </div>
        </div>
    )
}
