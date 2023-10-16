import { useContext } from "react";
import { DataCardProps } from "../../types";
import { ImageInner, Img } from "./styledImage";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

export const Image: React.FC<DataCardProps> = ({ dataCard }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <ImageInner>
            <Img themestyles={themeContext.themeStyles} src={dataCard.image} alt={dataCard.source.title} />
        </ImageInner>
    )
}