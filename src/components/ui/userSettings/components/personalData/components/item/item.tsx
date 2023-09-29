import { Headline, ItemInner, Span } from "./styledItem";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { IconBtn } from "../../../../../../reusable/iconBtn/iconBtn";
import React from "react";

interface ItemProps {
    name: string,
    data: string | undefined
}

export const Item: React.FC<ItemProps> = ({ name, data }) => {
    return (
        <ItemInner>
            <div>
                <Headline>{name}</Headline>
                <Span>{data}</Span>
            </div>
            <div>
                <IconBtn icon={faPenToSquare} size={"lg"} />
            </div>
        </ItemInner>
    )
}