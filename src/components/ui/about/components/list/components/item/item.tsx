import { useContext } from "react";
import { ItemContainer, Span } from "./styledItem";
import { ThemeContextType } from "../../../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../../../contexts/themeContext/themeContext";

interface ItemProps {
    spanText: string,
    text: string
}

export const Item: React.FC<ItemProps> = ({ spanText, text }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    return (
        <ItemContainer themestyles={themeContext.themeStyles}>
            <Span>{spanText}</Span>
            {text}
        </ItemContainer>
    )
}