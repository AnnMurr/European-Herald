import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { TemperatureBlock } from "./components/temperatureBlock/temperatureBlock";
import { Container, Inner, Wrapper, CardsWrapper } from "./styledWeatherPage";
import { Location } from "./components/location/location";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect } from "react";
import { geForecasttWeather } from "../../../redux/reducers/weatherReducer/weatherReducer";
import { ForecastCards } from "./components/forecastCards/forecastCards";
import { DetailsBlock } from "./components/detailsBlock/detailsBlock";
import { GoBackBtn } from "../../reusable/backBtn/backBtn";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";
import { Spinner } from "../../reusable/spinner/spinner";

export const WeatherPage = () => {
    const { weatherData, forecastData, loading } = useAppSelector(state => state.weather)

    const themeContext: ThemeContextType = useContext(ThemeContext)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
                const { latitude, longitude } = position.coords
                fetch(`http://api.weatherapi.com/v1/forecast.json?key=21c480deba1742eab47180549233009&q=${latitude},${longitude}&days=5&aqi=yes&alerts=yes`)
                    .then(response => response.json())
                    .then(data => {
                        dispatch(geForecasttWeather(data.forecast.forecastday))
                    })
                    .catch(error => { throw error })
            })
        }
    }, [])

    return (
        <Container>
            <Wrapper>
                <GoBackBtn />
                {loading ?
                    <Spinner /> :
                    <Inner>
                        <Location weatherData={weatherData} />
                        <TemperatureBlock weatherData={weatherData} />
                        <DetailsBlock weatherData={weatherData} />
                        <CardsWrapper themestyles={themeContext.themeStyles}>
                            {forecastData ? forecastData.map((item) => <ForecastCards key={uuidv4()} forecastData={item} />) : null}
                        </CardsWrapper>
                    </Inner>}
            </Wrapper>
        </Container>
    )
}