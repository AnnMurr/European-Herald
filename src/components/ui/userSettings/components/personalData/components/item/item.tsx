import { Headline, ItemInner, Span } from "./styledItem";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { IconBtn } from "../../../../../../reusable/iconBtn/iconBtn";
import React, { useContext } from "react";
import { ThemeContextType } from "../../../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../../../contexts/themeContext/themeContext";

interface ItemProps {
    name: string,
    data: string | undefined
}

export const Item: React.FC<ItemProps> = ({ name, data }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    return (
        <ItemInner>
            <div>
                <Headline themestyles={themeContext.themeStyles}>{name}</Headline>
                <Span themestyles={themeContext.themeStyles}>{data}</Span>
            </div>
            <div>
                <IconBtn color={themeContext.themeStyles.color} icon={faPenToSquare} size={"lg"} />
            </div>
        </ItemInner>
    )
}