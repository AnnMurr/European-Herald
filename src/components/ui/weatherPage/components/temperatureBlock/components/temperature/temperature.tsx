import { useContext, useState } from 'react';

import { ThemeContext } from "../../../../../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../../../../../contexts/themeContext/types";
import { DegreesType, WeatherDataProps } from "../../../../types";

import { CelciusBtn, TemperatureText, Wrapper, FahrenheitBtn, InnerBtns } from "./styledTemperature";

export const Temperature: React.FC<WeatherDataProps> = ({ weatherData }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    const [degrees, setDegrees] = useState<DegreesType>('celcius')

    const changeGegreesC = () => setDegrees('celcius')
    const changeGegreesF = () => setDegrees('fahrenheit')

    return (
        <Wrapper>
            <TemperatureText themestyles={themeContext.themeStyles}>
                {degrees === 'celcius' ?
                    weatherData && Math.ceil(weatherData?.current.temp_c) :
                    weatherData && Math.ceil(weatherData?.current.temp_f)}
            </TemperatureText>
            <InnerBtns>
                <CelciusBtn
                    themestyles={themeContext.themeStyles}
                    degrees={degrees} onClick={changeGegreesC}>°C</CelciusBtn>
                <FahrenheitBtn
                    themestyles={themeContext.themeStyles}
                    degrees={degrees} onClick={changeGegreesF}>°F</FahrenheitBtn>
            </InnerBtns>
        </Wrapper>
    )
}