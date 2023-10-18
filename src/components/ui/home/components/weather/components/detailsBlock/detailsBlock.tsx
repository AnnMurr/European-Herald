import { useContext } from "react";

import { WeatherDataProps } from "../../types";
import { WeatherContextType } from "../../../../../../../contexts/weatherContext/types";
import { WeatherContext } from "../../../../../../../contexts/weatherContext/weatherContext";

import { Container, Span } from "./styledDetailsBlock";

export const DetailsBlock: React.FC<WeatherDataProps> = ({ weatherData }) => {
    const weatherContext = useContext<WeatherContextType>(WeatherContext)

    return (
        <Container>
            <li>
                <Span>
                    Feels like: {' '}
                    {weatherContext.currentDegrees === 'celcius' ?
                        weatherData && Math.ceil(weatherData?.current.feelslike_c) :
                        weatherData && Math.ceil(weatherData?.current.feelslike_f)}
                    <span>{weatherContext.currentDegrees === 'celcius' ? '°C' : '°F'}</span>
                </Span>
            </li>
            <li>
                <Span>
                    Humidity: {weatherData?.current.humidity}%
                </Span>
            </li>
            <li>
                <Span>
                    Wind speed: {weatherData?.current.wind_kph} km/h
                </Span>
            </li>
        </Container>
    )
}