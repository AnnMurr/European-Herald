import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Item, Link } from "./styledIcon";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { ThemeContextType } from "../../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../../contexts/themeContext/themeContext";
interface IconProps {
    icon: IconDefinition
}

export const Icon: React.FC<IconProps> = ({ icon }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <Item>
            <Link themestyles={themeContext.themeStyles} className={icon.iconName} href="#">
                <FontAwesomeIcon icon={icon} size="xl" />
            </Link>
        </Item>
    )
}