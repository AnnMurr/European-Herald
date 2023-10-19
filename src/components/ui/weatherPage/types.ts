import { Theme } from "../../../contexts/themeContext/types";
import { DegreesType } from "../../../contexts/weatherContext/types";
import { WeatherDataType, WeatherForecastDataType } from "../../../redux/reducers/weatherReducer/types";
export interface ForecastDataProps {
    forecastData: WeatherForecastDataType
}
export interface WeatherDataProps {
    weatherData: WeatherDataType | null
}
export interface DegreesBtnProps {
    degrees: DegreesType,
    themestyles: Theme,
}