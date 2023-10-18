import { decryptData, encryptData } from "../../../utils/encryption/encryption";

export const setCurrentTheme = (value: string) => {
    localStorage.setItem('appSettings.theme', encryptData(value))
}

export const getCurrentTheme = () => {
    const currentTheme = localStorage.getItem('appSettings.theme')
    if (currentTheme) {
        return decryptData(currentTheme)
    } else {
        return null
    }
}