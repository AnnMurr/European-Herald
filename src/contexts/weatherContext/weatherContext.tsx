import { createContext, useEffect, useState } from "react";
import { getDegreesFromLocalStorage, setDegreesToLocalStorage } from "../../store/localStorage/weatherDegrees/degrees";
import { DegreesType, WeatherContextProviderProps, WeatherContextType } from "./types";

const initialWeatherContext: WeatherContextType = {
    changeDegreesC: () => { },
    changeDegreesF: () => { },
    currentDegrees: 'celcius'
}

export const WeatherContext = createContext<WeatherContextType>(initialWeatherContext)

export const WeatherContextProvider: React.FC<WeatherContextProviderProps> = ({ children }) => {
    const [degrees, setDegrees] = useState<DegreesType>('celcius')

    const changeDegreesC = () => {
        setDegrees('celcius')
        setDegreesToLocalStorage(degrees === 'celcius' ? 'fahrenheit' : 'celcius')
    }

    const changeDegreesF = () => {
        setDegrees('fahrenheit')
        setDegreesToLocalStorage(degrees === 'celcius' ? 'fahrenheit' : 'celcius')
    }

    useEffect(() => {
        const degreeFromStore: string | null = getDegreesFromLocalStorage()
        degreeFromStore && setDegrees(degreeFromStore as DegreesType)
    }, [])

    return (
        <WeatherContext.Provider
            value={{
                currentDegrees: degrees,
                changeDegreesC: changeDegreesC,
                changeDegreesF: changeDegreesF
            }}>
            {children}
        </WeatherContext.Provider>
    )
}