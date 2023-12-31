import { useContext } from "react";

import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { DataCardProps } from "../../types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { TitleInner, TitleText } from "./styledTitle";

export const Title: React.FC<DataCardProps> = ({ dataCard }) => {
    const themeContext: ThemeContextType = useContext(ThemeContext)
    
    return (
        <TitleInner>
            <TitleText themestyles={themeContext.themeStyles}>
                {dataCard.title}
            </TitleText>
        </TitleInner>
    )
}