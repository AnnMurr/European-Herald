import { useContext } from "react";

import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { TitleText, Wrapper } from "./styledTitle";

export const Title = () => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    return (
        <Wrapper>
            <TitleText themestyles={themeContext.themeStyles}>Sign Up</TitleText>
        </Wrapper>
    )
}