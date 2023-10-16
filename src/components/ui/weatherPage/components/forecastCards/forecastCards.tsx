import { useContext } from "react";

import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ForecastDataProps } from "../../types";
import { DayName } from "./components/dayName/dayName";
import { Icon } from "./components/icon/icon";
import { Temperature } from "./components/temperature/temperature";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { Container, Wrapper } from "./styledForecastCards";

export const ForecastCards: React.FC<ForecastDataProps> = ({ forecastData }) => {
    const themeContext: ThemeContextType = useContext(ThemeContext)
    
    return (
        <Container>
            <Wrapper themestyles={themeContext.themeStyles}>
                <DayName forecastData={forecastData} />
                <Icon forecastData={forecastData} />
                <Temperature forecastData={forecastData} />
            </Wrapper>
        </Container>
    )
}