import { useContext } from "react";

import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { TitleInner, TitleText } from "./styledTitle";

interface TitleProps {
    text: string
}

export const Title: React.FC<TitleProps> = ({text}) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <TitleInner>
            <TitleText themestyles={themeContext.themeStyles}>{text}</TitleText>
        </TitleInner>
    )
}