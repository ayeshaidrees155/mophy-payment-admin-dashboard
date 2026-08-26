import React, { createContext, useState, useEffect } from 'react';
export const ThemeContext = createContext();
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    const themeToggle = () => {
        setTheme((theme) => theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (<ThemeContext.Provider value={{ theme, themeToggle }}>{children}</ThemeContext.Provider>)

}
export default ThemeProvider;