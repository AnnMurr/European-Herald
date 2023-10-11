import { ThemeContext } from "../../../../../../../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../../../../../../../contexts/themeContext/types";
import { WeatherDataProps } from "../../../../types";
import { CelciusBtn, TemperatureText, Wrapper, FahrenheitBtn, InnerBtns } from "./styledTemperature";
import { useContext, useState } from 'react';

export type DegreesType = 'celcius' | 'fahrenheit'

export const Temperature: React.FC<WeatherDataProps> = ({weatherData}) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    const [degrees, setDegrees] = useState<DegreesType>('celcius')

    const changeGegreesC = () => setDegrees('celcius')
    const changeGegreesF = () => setDegrees('fahrenheit')

    return (
        <Wrapper>
            <TemperatureText>
                {degrees === 'celcius' ? weatherData && Math.ceil(weatherData?.current.temp_c) : weatherData && Math.ceil(weatherData?.current.temp_f)}
            </TemperatureText>
            <InnerBtns>
                <CelciusBtn 
                themestyles={themeContext.themeStyles} 
                degrees={degrees} onClick={changeGegreesC}>°C</CelciusBtn> 
                | 
                <FahrenheitBtn 
                themestyles={themeContext.themeStyles} 
                degrees={degrees} onClick={changeGegreesF}>°F</FahrenheitBtn>
            </InnerBtns>
        </Wrapper>
    )
}