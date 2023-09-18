import { DataCardProps } from "../../types";
import { ImageInner } from "./styledImage";

export const Image = ({ dataCard }: DataCardProps) => {
    return (
        <ImageInner>
            <img src={dataCard.image} alt="image" />
        </ImageInner>
    )
}