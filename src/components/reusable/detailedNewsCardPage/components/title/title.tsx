import { DataCardProps } from "../../types";
import { TitleInner, TitleText } from "./styledTitle";

export const Title = ({ dataCard }: DataCardProps) => {
    return (
        <TitleInner>
            <TitleText>
                {dataCard.title}
            </TitleText>
        </TitleInner>
    )
}