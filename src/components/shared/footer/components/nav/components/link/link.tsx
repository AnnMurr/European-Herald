import { useContext } from "react";

import { ThemeContextType } from "../../../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../../../contexts/themeContext/themeContext";

import { StyledLink } from "./styledLink";

interface LinkProps {
    link: string,
    text: string
}

export const Link: React.FC<LinkProps> = ({ link, text }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <li>
            <StyledLink themestyles={themeContext.themeStyles} to={link}>{text}</StyledLink>
        </li>
    )
}