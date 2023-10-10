import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Span, Inner, Name, IconIner } from "./styledDetailsBlock";
import { faDroplet, faSun, faTemperatureQuarter, faWind } from "@fortawesome/free-solid-svg-icons";
import { WeatherDataProps } from "../../types";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { useContext } from "react";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

export const DetailsBlock: React.FC<WeatherDataProps> = ({ weatherData }) => {
    const themeContext: ThemeContextType = useContext(ThemeContext)
    
    return (
        <Container themestyles={themeContext.themeStyles}>
            <Inner>
                <div>
                    <IconIner>
                        <FontAwesomeIcon size="xl" icon={faWind} />
                    </IconIner>
                    <Name>Wind</Name>
                </div>
                <Span>{weatherData?.current.wind_mph} mph</Span>
            </Inner>
            <Inner>
                <div>
                <IconIner>
                    <FontAwesomeIcon size="xl" icon={faDroplet} />
                </IconIner>
                <Name>Humidity</Name>
                </div>
                <Span>{weatherData?.current.humidity} %</Span>
            </Inner>
            <Inner>
                <div>
                <IconIner>
                    <FontAwesomeIcon size="xl" icon={faSun} />
                </IconIner>
                <Name>UV index</Name>
                </div>
                <Span>{weatherData?.current.uv} %</Span>
            </Inner>
            <Inner>
                <div>
                <IconIner>
                    <FontAwesomeIcon size="xl" icon={faTemperatureQuarter} />
                </IconIner>
                <Name>Feels like</Name>
                </div>
                <Span>{weatherData?.current.feelslike_c}°C</Span>
            </Inner>
        </Container>
    )
}