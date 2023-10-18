import { useContext } from 'react';

import { ThemeContext } from "../../../../../../../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../../../../../../../contexts/themeContext/types";
import { WeatherContextType } from "../../../../../../../../../contexts/weatherContext/types";
import { WeatherContext } from "../../../../../../../../../contexts/weatherContext/weatherContext";
import { WeatherDataProps } from "../../../../types";

import { CelciusBtn, TemperatureText, Wrapper, FahrenheitBtn, InnerBtns } from "./styledTemperature";

export const Temperature: React.FC<WeatherDataProps> = ({weatherData}) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    const weatherContext = useContext<WeatherContextType>(WeatherContext)

    return (
        <Wrapper>
            <TemperatureText>
                {weatherContext.currentDegrees === 'celcius' ? 
                weatherData && Math.ceil(weatherData?.current.temp_c) : 
                weatherData && Math.ceil(weatherData?.current.temp_f)}
            </TemperatureText>
            <InnerBtns>
                <CelciusBtn 
                themestyles={themeContext.themeStyles} 
                degrees={weatherContext.currentDegrees } 
                onClick={weatherContext.changeDegreesC}>°C</CelciusBtn> 
                | 
                <FahrenheitBtn 
                themestyles={themeContext.themeStyles} 
                degrees={weatherContext.currentDegrees } 
                onClick={weatherContext.changeDegreesF}>°F</FahrenheitBtn>
            </InnerBtns>
        </Wrapper>
    )
}