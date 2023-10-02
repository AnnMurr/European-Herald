import { useAppSelector } from "../../../redux/store/store";
import { Container, Wrapper } from "./styledWeatherPage";

export const WeatherPage = () => {
    const weatherDataFromRedux = useAppSelector(state => state.weather.weatherData)

    return (
        <Container>
            <Wrapper>
                <div>
                    <img src={weatherDataFromRedux?.current.condition.icon} alt="wether icon" />
                </div>
            </Wrapper>
        </Container>
    )
}