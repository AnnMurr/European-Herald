import { useContext } from "react";

import { NewsCardProps } from "../../types";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { TitleInner, TitleText } from "./styledTitle";

export const Title: React.FC<NewsCardProps> = ({ cardClass, dataCard, type }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <TitleInner cardclass={cardClass} cardtype={type}>
            <TitleText themestyles={themeContext.themeStyles} cardclass={cardClass} cardtype={type}>{`${dataCard.title.substring(0, 90)}...`}</TitleText>
        </TitleInner>
    )
}