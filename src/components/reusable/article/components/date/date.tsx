import { format, parseISO } from "date-fns";
import { Inner, Span } from "./styledDate";
import { DataCardProps } from "../../types";

export const Date = ({dataCard}: DataCardProps) => {
    const dataCardDateTime = parseISO(dataCard.dateTime)
    const formattedDate = format(dataCardDateTime, 'dd.MM.yyyy - h:mm a')

    return (
        <Inner>
            <Span>{formattedDate}</Span>
        </Inner>
    )
}