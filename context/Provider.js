'use client'

import { ThemeProvider } from "next-themes";


export const ThemeProvider = ({ children }) => {
    return (
        <ThemeProvider attribute='class'>
            {children}
        </ThemeProvider>
    )
}