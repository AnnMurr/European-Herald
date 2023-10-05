import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { TemperatureBlock } from "./components/temperatureBlock/temperatureBlock";
import { Container, Inner, Wrapper, CardsWrapper } from "./styledWeatherPage";
import { Location } from "./components/location/location";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { geForecasttWeather } from "../../../redux/reducers/weatherReducer/weatherReducer";
import { ForecastCards } from "./components/forecastCards/forecastCards";
import { DetailsBlock } from "./components/detailsBlock/detailsBlock";
import { GoBackBtn } from "../../reusable/backBtn/backBtn";

export const WeatherPage = () => {
    const weatherDataFromRedux = useAppSelector(state => state.weather.weatherData)
    const weatherForecastDataFromRedux = useAppSelector(state => state.weather.forecastData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
                const { latitude, longitude } = position.coords
                fetch(`http://api.weatherapi.com/v1/forecast.json?key=21c480deba1742eab47180549233009&q=${latitude},${longitude}&days=5&aqi=yes&alerts=yes`)
                    .then(response => response.json())
                    .then(data => {
                        dispatch(geForecasttWeather(data.forecast.forecastday))
                        console.log('DATA FORECAST', data)
                    })
                    .catch(error => { throw error })
            })
        }
    }, [])

    console.log('weatherForecastDataFromRedux', weatherForecastDataFromRedux)
    return (
        <Container>
            <Wrapper>
            <GoBackBtn />
                <Inner>
                
                    <Location weatherData={weatherDataFromRedux} />
                    <TemperatureBlock weatherData={weatherDataFromRedux} />
                    <DetailsBlock weatherData={weatherDataFromRedux} />
                    <CardsWrapper>
                        {weatherForecastDataFromRedux ? weatherForecastDataFromRedux.map((item: any) => <ForecastCards key={uuidv4()} forecastData={item} />) : null}
                    </CardsWrapper>
                </Inner>
            </Wrapper>
        </Container>
    )
}