import { useAppSelector } from "../../../redux/store/store";
import { TemperatureBlock } from "./components/temperatureBlock/temperatureBlock";
import { Container, Wrapper } from "./styledWeatherPage";
import { WindAndHumidityBlock } from "./components/temperatureBlock/windAndHumidityBlock/windAndHumidityBlock";

export const WeatherPage = () => {
    const weatherDataFromRedux = useAppSelector(state => state.weather.weatherData)
    console.log('weatherDataFromRedux', weatherDataFromRedux)
    return (
        <Container>
            <Wrapper>
                <TemperatureBlock weatherData={weatherDataFromRedux} />
                <WindAndHumidityBlock  weatherData={weatherDataFromRedux} />
            </Wrapper>
        </Container>
    )
}