import { useContext } from "react";

import { ForecastDataProps } from "../../../../types";
import { WeatherContextType } from "../../../../../../../contexts/weatherContext/types";
import { WeatherContext } from "../../../../../../../contexts/weatherContext/weatherContext";

import { Span } from "./styledTemperature";

export const Temperature: React.FC<ForecastDataProps> = ({ forecastData }) => {
    const weatherContext = useContext<WeatherContextType>(WeatherContext)

    return (
        <div>
            <Span>{weatherContext.currentDegrees === 'celcius' ?
                Math.ceil(forecastData.day.maxtemp_c) :
                Math.ceil(forecastData.day.maxtemp_f)}
                {weatherContext.currentDegrees === 'celcius' ?
                    '°C' : '°F'}</Span>
        </div>
    )
}