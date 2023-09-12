import { NewsCardProps } from "../../types";
import { TitleInner, TitleText } from "./styledTitle";

export const Title: React.FC<NewsCardProps> = ({ cardClass, dataCard, type }) => {
    return (
        <TitleInner cardtype={type}>
            <TitleText cardclass={cardClass} cardtype={type}>{dataCard.title}</TitleText>
        </TitleInner>
    )
}