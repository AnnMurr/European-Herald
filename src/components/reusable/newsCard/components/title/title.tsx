import { NewsCardProps } from "../../types";
import { TitleInner, TitleText } from "./styledTitle";

export const Title: React.FC<NewsCardProps> = ({ cardClass, dataCard, type }) => {
    return (
        <TitleInner cardclass={cardClass} cardtype={type}>
            <TitleText cardclass={cardClass} cardtype={type}>{`${dataCard.title.substring(0, 90)}...`}</TitleText>
        </TitleInner>
    )
}