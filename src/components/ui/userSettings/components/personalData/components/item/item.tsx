import React, { useContext, useState } from "react";

import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { IconBtn } from "../../../../../../reusable/iconBtn/iconBtn";
import { ThemeContextType } from "../../../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../../../contexts/themeContext/themeContext";
import { EditModal } from "./components/editModal/editModal";

import { Headline, ItemInner, Span } from "./styledItem";

interface ItemProps {
    name: string,
    data: string | undefined
}

export const Item: React.FC<ItemProps> = ({ name, data }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    const [isEditModal, setIsEditModal] = useState<boolean>(false)
    
    return (
        <ItemInner>
            <div>
                <Headline themestyles={themeContext.themeStyles}>{name}</Headline>
                <Span themestyles={themeContext.themeStyles}>{data}</Span>
            </div>
            <div>
                <IconBtn onClickFunc={() => setIsEditModal(true)} color={themeContext.themeStyles.color} icon={faPenToSquare} size={"lg"} />
            </div>
            {isEditModal ? <EditModal closeModal={setIsEditModal} name={name} data={data} /> : null}
        </ItemInner>
    )
}