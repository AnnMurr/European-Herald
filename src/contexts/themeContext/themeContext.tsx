import React, { useState } from "react";
import { ThemeContextType, ThemeType } from "./types";
import { Themes } from "./themes";

const initialThemeContext: ThemeContextType = {
    currentTheme: 'light',
    changeTheme: () => {},
    themeStyles: Themes['light']
}

export const ThemeContext = React.createContext<ThemeContextType>(initialThemeContext)

export const ThemeContextProvider = ({ children }: any) => {
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