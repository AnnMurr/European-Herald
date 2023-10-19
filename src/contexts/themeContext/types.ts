import { Colors } from "./themes";

export type ThemeType = 'light' | 'dark'

export type ThemesType = Record<ThemeType, Theme>
export interface Theme {
    body: Colors,
    color: Colors,
    backgroundInputSearch: Colors,
    backgroundForm: Colors,
    backgroundHeader: Colors,
    backgroundSettingsForm: Colors,
    backgroundForecastBlock: Colors,
}
export interface ThemeContextType {
    currentTheme: ThemeType,
    changeTheme: () => void,
    themeStyles: Theme
}
export interface ThemeStyledProps {
    themestyles: Theme,
    theme?: ThemeType
}
export interface ThemeContextProviderProps {
    children: React.ReactNode
}