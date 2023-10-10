import { useContext } from "react";
import { Container, StyledLink, Wrapper } from "./styledWeather";
import { useAppSelector } from "../../../../../redux/store/store";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { TemperatureBlock } from "./components/temperatureBlock/temperatureBlock";
import { DateInformation } from "./components/dateInformation/dateInformation";
import { DetailsBlock } from "./components/detailsBlock/detailsBlock";
import { Location } from "./components/location/location";

export const Weather = () => {
    const weatherDataFromRedux = useAppSelector(state => state.weather.weatherData)
    const themeContext = useContext<ThemeContextType>(ThemeContext)

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