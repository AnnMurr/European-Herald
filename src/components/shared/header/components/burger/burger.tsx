import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BurgerInner } from "./styledBurger";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Burger = () => {
    return (
        <BurgerInner className="burger-menu">
            <FontAwesomeIcon icon={faBars} />
        </BurgerInner>
    )
}