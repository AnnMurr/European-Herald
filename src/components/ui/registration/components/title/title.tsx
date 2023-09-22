import { useContext } from "react";
import { TitleText, Wrapper } from "./styledTitle";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

export const Title = () => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    return (
        <Wrapper>
            <TitleText themestyles={themeContext.themeStyles}>Sign Up</TitleText>
        </Wrapper>
    )
}