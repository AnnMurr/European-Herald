import { format, parseISO } from "date-fns";
import { Inner, Span } from "./styledDate";
import { DataCardProps } from "../../types";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { useContext } from "react";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

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