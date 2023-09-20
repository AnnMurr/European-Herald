import { DataCardProps } from "../../types";
import { TitleInner, TitleText } from "./styledTitle";

export const Title: React.FC<DataCardProps> = ({ dataCard }) => {
    return (
        <TitleInner>
            <TitleText>
                {dataCard.title}
            </TitleText>
        </TitleInner>
    )
}