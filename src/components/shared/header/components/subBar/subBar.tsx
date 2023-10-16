import { useContext, useEffect, useRef } from "react";

import { Link } from "./components/link/link";
import { v4 as uuidv4 } from 'uuid';
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { SubBarProps } from "../../types";

import { Nav, List, BtnCloseWrapper } from "./styledSubBar";

export const SubBar: React.FC<SubBarProps> = ({ setIsSubBarActive, burgerBtnRef }) => {
    const links = ['Home', 'Sports', 'Health', 'Arts', 'Games', 'Business', 'Science', 'Shopping', 'Society', 'Computers']
    const themeContext: ThemeContextType = useContext(ThemeContext)
    const subBarRef = useRef<HTMLDivElement>(null)

    const closeSubBar = () => setIsSubBarActive(false)
   
    const closeModalOutsideClick = (event: MouseEvent) => {
        if (!subBarRef.current?.contains(event.target as Node)
            && !burgerBtnRef.current?.contains(event.target as Node)) {
            closeSubBar()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeModalOutsideClick)

        return () => document.removeEventListener("mousedown", closeModalOutsideClick)
    }, [])

    return (
        <Nav ref={subBarRef} themestyles={themeContext.themeStyles} >
            <BtnCloseWrapper>
                <IconBtn color={themeContext.themeStyles.color} onClickFunc={closeSubBar} icon={faXmark} size={'lg'} />
            </BtnCloseWrapper>
            <List>
                {links.map((item) => <Link closeSubBar={closeSubBar} key={uuidv4()} linkName={item} />)}
            </List>
        </Nav>
    )
}