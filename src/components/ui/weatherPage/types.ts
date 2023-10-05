import { WeatherDataType, WeatherForecastDataType } from "../../../redux/reducers/weatherReducer/types";

export interface ForecastDataProps {
    forecastData: WeatherForecastDataType
}

export interface WeatherDataProps {
    weatherData: WeatherDataType | null
}

export type DegreesType = 'celcius' | 'fahrenheit'