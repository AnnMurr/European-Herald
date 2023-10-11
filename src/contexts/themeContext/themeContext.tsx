import React, { useEffect, useState } from "react";
import { ThemeContextProviderProps, ThemeContextType, ThemeType } from "./types";
import { Themes } from "./themes";
import { getToken, setToken } from "../../store/localStorage/token/token";
import { decryptData } from "../../utils/encryption/encryption";

const initialThemeContext: ThemeContextType = {
    currentTheme: 'light',
    changeTheme: () => {},
    themeStyles: Themes['light']
}

export const ThemeContext = React.createContext<ThemeContextType>(initialThemeContext)

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>('light')
    const togleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        getToken('theme') && setTheme(decryptData(getToken('theme')!))
    }, [])

    useEffect(() => {
        setToken('theme', theme)
    }, [theme])
    
    return (
        <ThemeContext.Provider value={{
            currentTheme: theme,
            changeTheme: togleTheme,
            themeStyles: Themes[theme]
        }}>
            {children}
        </ThemeContext.Provider>
    )
}