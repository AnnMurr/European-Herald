import React, { useState } from "react";
import { ThemeContextProviderProps, ThemeContextType, ThemeType } from "./types";
import { Themes } from "./themes";

const initialThemeContext: ThemeContextType = {
    currentTheme: 'light',
    changeTheme: () => {},
    themeStyles: Themes['light']
}

export const ThemeContext = React.createContext<ThemeContextType>(initialThemeContext)

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>('light')
    const togleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

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