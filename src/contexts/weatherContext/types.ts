export interface WeatherContextProviderProps {
    children: React.ReactNode
}
export interface WeatherContextType {
    currentDegrees: DegreesType,
    changeDegreesC: () => void,
    changeDegreesF: () => void
}

export type DegreesType = 'celcius' | 'fahrenheit'