import { format, parseISO } from "date-fns";
import { NewsCardProps } from "../../types";
import { DateInner, Span } from "./styledDate";

export const CardDate: React.FC<NewsCardProps> = ({ cardClass, dataCard, type }) => {
    const dataCardDateTime = parseISO(dataCard.dateTime)
    const formattedDate = format(dataCardDateTime, 'dd.MM - h:mm a')

    return (
        <>
            {cardClass === 'card' ?
                null :
                type === 'BigCard' ?
                    <DateInner>
                        <Span>{formattedDate}</Span>
                    </DateInner>
                    : null}
        </>
    )
}