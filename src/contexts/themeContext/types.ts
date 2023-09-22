import { Colors } from "./themes";

export type ThemeType = 'light' | 'dark'

export interface Theme {
    body: Colors,
    background: Colors,
    color: Colors,
    backgroundInputSearch: Colors,
}

export type ThemesType = Record<ThemeType, Theme>

export interface ThemeContextType {
    currentTheme: ThemeType,
    changeTheme: () => void,
    themeStyles: Theme
}

export interface ThemeStyledProps {
    themestyles: Theme
}