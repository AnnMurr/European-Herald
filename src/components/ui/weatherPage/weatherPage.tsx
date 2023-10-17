import { useContext, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { v4 as uuidv4 } from "uuid";
import { geForecasttWeather } from "../../../redux/reducers/weatherReducer/weatherReducer";
import { GoBackBtn } from "../../reusable/backBtn/backBtn";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";
import { Spinner } from "../../reusable/spinner/spinner";
import { DetailsBlock, ForecastCards, TemperatureBlock, Location } from ".";

import { Container, Inner, Wrapper, CardsWrapper } from "./styledWeatherPage";

export const WeatherPage = () => {
    const { weatherData, forecastData, loading } = useAppSelector(state => state.weather)

    const themeContext: ThemeContextType = useContext(ThemeContext)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
                const { latitude, longitude } = position.coords
                fetch(`https://api.weatherapi.com/v1/forecast.json?key=16fba77cc5f442648bd165016231710&q=${latitude},${longitude}&days=5&aqi=yes&alerts=yes`)
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