import { useContext } from "react";

import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { TitleText } from "./styledTitle";

export const Title = () => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    return (
        <TitleText themestyles={themeContext.themeStyles}>Personal details</TitleText>
    )
}