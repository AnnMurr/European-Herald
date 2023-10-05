import { ForecastDataProps } from "../../../../types";
import { Span } from "./styledTemperature";

export const Temperature: React.FC<ForecastDataProps> = ({ forecastData }) => {
    return (
        <div>
            <Span>{forecastData.day.maxtemp_c} °C</Span>
        </div>
    )
}