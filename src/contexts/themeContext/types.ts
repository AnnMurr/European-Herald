import { Colors } from "./themes";

export type ThemeType = 'light' | 'dark'
export interface Theme {
    body: Colors,
    color: Colors,
    backgroundInputSearch: Colors,
    backgroundForm: Colors,
    backgroundHeader: Colors,
}

export type ThemesType = Record<ThemeType, Theme>
export interface ThemeContextType {
    currentTheme: ThemeType,
    changeTheme: () => void,
    themeStyles: Theme
}
export interface ThemeStyledProps {
    themestyles: Theme,
    theme?: ThemeType
}