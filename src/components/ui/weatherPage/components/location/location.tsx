import { useContext } from "react";

import { WeatherDataProps } from "../../types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";

import { City, Country } from "./styledLocation";

export const Location: React.FC<WeatherDataProps> = ({ weatherData }) => {
    const themeContext: ThemeContextType = useContext(ThemeContext)
    
    return (
        <div>
            <Country themestyles={themeContext.themeStyles}>{weatherData?.location.country}</Country>
            <City themestyles={themeContext.themeStyles}>{weatherData?.location.name}</City>
        </div>
    )
}