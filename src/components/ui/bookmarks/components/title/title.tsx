import { useContext } from "react";

import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { TitleText } from "./styledTitle";

export const Title = () => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    return (
        <div>
            <TitleText themestyles={themeContext.themeStyles}>Bookmarks</TitleText>
        </div>
    )
}