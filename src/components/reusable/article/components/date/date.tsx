import { useContext } from "react";

import { format, parseISO } from "date-fns";
import { DataCardProps } from "../../types";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { Inner, Span } from "./styledDate";

export const Date = ({dataCard}: DataCardProps) => {
    const dataCardDateTime = parseISO(dataCard.dateTime)
    const formattedDate = format(dataCardDateTime, 'dd.MM.yyyy - h:mm a')
    const themeContext: ThemeContextType = useContext(ThemeContext)

    return (
        <Inner>
            <Span themestyles={themeContext.themeStyles}>{formattedDate}</Span>
        </Inner>
    )
}