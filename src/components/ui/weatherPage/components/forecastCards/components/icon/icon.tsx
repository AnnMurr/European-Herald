import { ForecastDataProps } from "../../../../types";
import { Inner } from "./styledIcon";

export const Icon: React.FC<ForecastDataProps> = ({ forecastData }) => {
    return (
        <Inner>
            <img src={`${forecastData.day.condition.icon}`} alt='"weather icon' />
        </Inner>
    )
}