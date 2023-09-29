import { useContext } from "react";
import { TitleText } from "./styledTitle";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

export const Title = () => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    return (
        <div>
            <TitleText themestyles={themeContext.themeStyles}>Bookmarks</TitleText>
        </div>
    )
}