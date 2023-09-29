import { useContext } from "react";
import { StyledLink, Wrap } from "./styledLink";
import { ThemeContextType } from "../../../../../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../../../../../contexts/themeContext/themeContext";

interface LinkBtnProps {
    linkTo: string,
    text: string,
    closeModal: () => void
}

export const LinkBtn: React.FC<LinkBtnProps> = ({ linkTo, text, closeModal }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    return (
        <Wrap theme={themeContext.currentTheme} themestyles={themeContext.themeStyles}>
            <StyledLink themestyles={themeContext.themeStyles} onClick={closeModal} to={linkTo}>{text}</StyledLink>
        </Wrap>
    )
} 