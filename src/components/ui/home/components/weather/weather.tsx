import { useContext, useEffect } from "react";
import { Container, StyledLink, Wrapper } from "./styledWeather";
import { useAppSelector } from "../../../../../redux/store/store";
import { useAppDispatch } from './../../../../../redux/store/store';
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { getWeather } from "../../../../../redux/reducers/weatherReducer/weatherReducer";
import { TemperatureBlock } from "./components/temperatureBlock/temperatureBlock";
import { DateInformation } from "./components/dateInformation/dateInformation";
import { DetailsBlock } from "./components/detailsBlock/detailsBlock";
import { Location } from "./components/location/location";

export const Weather = () => {
    const weatherDataFromRedux = useAppSelector(state => state.weather.weatherData)
    const dispatch = useAppDispatch()
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
                const { latitude, longitude } = position.coords
                fetch(`http://api.weatherapi.com/v1/current.json?key=21c480deba1742eab47180549233009&q=${latitude},${longitude}&aqi=no&lang=en`)
                    .then(response => response.json())
                    .then(data => {
                        dispatch(getWeather(data))
                    })
                    .catch(error => { throw error })
            })
        }
    }, [])

    console.log(weatherDataFromRedux)

    return (
        <>
            {weatherDataFromRedux ? <Container themestyles={themeContext.themeStyles}>
                <Wrapper>
                    <TemperatureBlock weatherData={weatherDataFromRedux} />
                    <StyledLink themestyles={themeContext.themeStyles} to={'/weather'}>
                        <DetailsBlock weatherData={weatherDataFromRedux} />
                        <Location weatherData={weatherDataFromRedux} />
                        <DateInformation weatherData={weatherDataFromRedux} />
                    </StyledLink>
                </Wrapper>
            </Container> : null}
        </>
    )
}