import { ForecastDataProps } from "../../types";
import { DayName } from "./components/dayName/dayName";
import { Icon } from "./components/icon/icon";
import { Temperature } from "./components/temperature/temperature";
import { Container, Wrapper } from "./styledForecastCards";

export const ForecastCards = ({ forecastData }: ForecastDataProps) => {
    return (
        <Container>
            <Wrapper>
                <DayName forecastData={forecastData} />
                <Icon forecastData={forecastData} />
                <Temperature forecastData={forecastData} />
            </Wrapper>
        </Container>
    )
}