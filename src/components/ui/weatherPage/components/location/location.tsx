import { WeatherDataProps } from "../../types";
import { City, Country } from "./styledLocation";

export const Location: React.FC<WeatherDataProps> = ({ weatherData }) => {
    return (
        <div>
            <Country>{weatherData?.location.country}</Country>
            <City>{weatherData?.location.name}</City>
        </div>
    )
}