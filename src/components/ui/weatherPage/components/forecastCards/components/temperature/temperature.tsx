import { ForecastDataProps } from "../../../../types";
import { Span } from "./styledTemperature";

export const Temperature: React.FC<ForecastDataProps> = ({ forecastData }) => {
    return (
        <div>
            <Span>{Math.ceil(forecastData.day.maxtemp_c)} °C</Span>
        </div>
    )
}