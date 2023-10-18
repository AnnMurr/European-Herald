import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faSun, faTemperatureQuarter, faWind } from "@fortawesome/free-solid-svg-icons";
import { WeatherDataProps } from "../../types";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { WeatherContextType } from "../../../../../contexts/weatherContext/types";
import { WeatherContext } from "../../../../../contexts/weatherContext/weatherContext";

import { Container, Span, Inner, Item, Name, IconIner } from "./styledDetailsBlock";

export const DetailsBlock: React.FC<WeatherDataProps> = ({ weatherData }) => {
    const themeContext: ThemeContextType = useContext(ThemeContext)
    const weatherContext = useContext<WeatherContextType>(WeatherContext)

    return (
        <Container themestyles={themeContext.themeStyles}>
            <Item>
                <Inner>
                    <IconIner>
                        <FontAwesomeIcon size="xl" icon={faWind} />
                    </IconIner>
                    <Name>Wind</Name>
                </Inner>
                <Span>{weatherData?.current.wind_mph} mph</Span>
            </Item>
            <Item>
                <Inner>
                    <IconIner>
                        <FontAwesomeIcon size="xl" icon={faDroplet} />
                    </IconIner>
                    <Name>Humidity</Name>
                </Inner>
                <Span>{weatherData?.current.humidity} %</Span>
            </Item>
            <Item>
                <Inner>
                    <IconIner>
                        <FontAwesomeIcon size="xl" icon={faSun} />
                    </IconIner>
                    <Name>UV index</Name>
                </Inner>
                <Span>{weatherData?.current.uv} %</Span>
            </Item>
            <Item>
                <Inner>
                    <IconIner>
                        <FontAwesomeIcon size="xl" icon={faTemperatureQuarter} />
                    </IconIner>
                    <Name>Feels like</Name>
                </Inner>
                <Span>{weatherContext.currentDegrees === 'celcius' ?
                    weatherData && Math.ceil(weatherData?.current.feelslike_c) :
                    weatherData && Math.ceil(weatherData?.current.feelslike_f)}
                    {weatherContext.currentDegrees === 'celcius' ? '°C' : '°F'}</Span>
            </Item>
        </Container>
    )
}