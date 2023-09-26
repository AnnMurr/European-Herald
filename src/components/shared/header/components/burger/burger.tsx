import { BurgerInner } from "./styledBurger";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { useContext } from "react";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { BurgerProps } from "../../types";

export const Burger: React.FC<BurgerProps> = ({setIsSubBarActive, burgerBtnRef}) => {
    const toggleSubBar = () => setIsSubBarActive((prev: boolean) => !prev)
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    return (
        <BurgerInner ref={burgerBtnRef} className="burger-menu">
            <IconBtn color={themeContext.themeStyles.color} onClickFunc={toggleSubBar} icon={faBars} size={'lg'} />
        </BurgerInner>
    )
}