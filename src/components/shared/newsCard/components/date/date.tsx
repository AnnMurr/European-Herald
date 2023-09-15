import { format, parseISO } from "date-fns";
import { DateInner, Span } from "./styledDate";
import { NewsCardProps } from "../../types";

export const CardDate = ({ dataCard, type }: NewsCardProps) => {
    const dataCardDateTime = parseISO(dataCard.dateTime)
    const formattedDate = format(dataCardDateTime, 'dd.MM - h:mm a')
    
    return (
        <>
            {type === 'BigCard' ?
                <DateInner>
                    <Span>{formattedDate}</Span>
                </DateInner>
                : null}
        </>
    )
}