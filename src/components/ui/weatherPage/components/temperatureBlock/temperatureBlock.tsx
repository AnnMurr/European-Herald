import { WeatherDataProps } from "../../types";
import { Temperature } from "./components/temperature/temperature";
import { Container, WeatherIconInner } from "./styledTemperatureBlock";

export const TemperatureBlock: React.FC<WeatherDataProps> = ({ weatherData }) => {
    return (
        <Container>
            <WeatherIconInner>
                <img src={weatherData?.current.condition.icon} alt="wether icon" />
            </WeatherIconInner>
            <Temperature weatherData={weatherData} />
        </Container>
    )
}