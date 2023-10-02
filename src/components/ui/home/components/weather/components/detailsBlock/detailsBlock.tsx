import { WeatherDataProps } from "../../types";
import { Container, Span } from "./styledDetailsBlock";

export const DetailsBlock: React.FC<WeatherDataProps> = ({ weatherData }) => {
    return (
        <Container>
            <li>
                <Span>
                    Feels like: {weatherData?.current.feelslike_c} <span>°C</span>
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