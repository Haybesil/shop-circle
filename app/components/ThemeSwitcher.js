'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, } from 'lucide-react'

export const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    console.log(theme);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button className={`w-fit p-2 rounded-md hover:scae-110 active:scale-100 duration-200 bg-slate-200 dark:bg-red-600`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'light' ? <Moon/> : <Sun size={24} className="fill-current text-red-600" />}
        </button>
    )
}
