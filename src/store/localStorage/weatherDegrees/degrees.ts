import { encryptData, decryptData } from "../../../utils/encryption/encryption";

export const setDegreesToLocalStorage = (data: string) => {
    localStorage.setItem('temperature.units', encryptData(data))
}

export const getDegreesFromLocalStorage = () => {
    const weatherData = localStorage.getItem('temperature.units')
    if (weatherData) {
        return decryptData(weatherData)
    } else {
        return null
    }
}