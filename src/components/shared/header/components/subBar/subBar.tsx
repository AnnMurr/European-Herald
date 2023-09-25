import { Link } from "./components/link/link";
import { v4 as uuidv4 } from 'uuid';
import { Nav, List, BtnCloseWrapper } from "./styledSubBar";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { useContext } from "react";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const SubBar = ({ setIsSubBarActive }: any) => {
    const links = ['Home', 'Sports', 'Health', 'Arts', 'Games', 'Business', 'Science', 'Shopping', 'Society', 'Computers']
    const themeContext: ThemeContextType = useContext(ThemeContext)
    const closeSubBar = () => setIsSubBarActive(false)

    return (
        <Nav themestyles={themeContext.themeStyles} >
            <BtnCloseWrapper>
                <IconBtn color={themeContext.themeStyles.color} onClickFunc={closeSubBar} icon={faXmark} size={'lg'} />
            </BtnCloseWrapper>
            <List>
                {links.map((item) => <Link key={uuidv4()} linkName={item} />)}
            </List>
        </Nav>
    )
}