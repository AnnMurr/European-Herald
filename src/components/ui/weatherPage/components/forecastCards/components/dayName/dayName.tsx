import { ForecastDataProps } from "../../../../types";
import { Wrapper, Day } from "./styledDayName";

export const DayName: React.FC<ForecastDataProps> = ({ forecastData }) => {
    const lastUpdated = forecastData?.date
    const date = lastUpdated ? new Date(lastUpdated) : null
    const weekday = date?.toLocaleDateString('en-US', { weekday: 'long' })
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

    return (
        <Wrapper>
            <Day>{today === weekday ? 'Today' : weekday}</Day>
        </Wrapper>
    )
}