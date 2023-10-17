import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { LogoContainer, LogoText } from "./styledLogo";

export const Logo = () => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <LogoContainer>
            <Link to={'/European-Herald/dist/'}>
                <LogoText themestyles={themeContext.themeStyles}>European Herald</LogoText>
            </Link>
        </LogoContainer>
    )
}