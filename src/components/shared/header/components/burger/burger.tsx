import { BurgerInner } from "./styledBurger";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { Dispatch, SetStateAction, useContext } from "react";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

interface BurgerProps {
    setIsSubBarActive: Dispatch<SetStateAction<boolean>>
}

export const Burger: React.FC<BurgerProps> = ({setIsSubBarActive}) => {
    const toggleSubBar = () => setIsSubBarActive((prev: boolean) => !prev)
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    return (
        <BurgerInner className="burger-menu">
            <IconBtn color={themeContext.themeStyles.color} onClickFunc={toggleSubBar} icon={faBars} size={'lg'} />
        </BurgerInner>
    )
}