import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Item, Link } from "./styledIcon";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
interface IconProps {
    icon: IconDefinition
}

export const Icon: React.FC<IconProps> = ({ icon }) => {
    return (
        <Item>
            <Link className={icon.iconName} href="#">
                <FontAwesomeIcon icon={icon} size="xl" />
            </Link>
        </Item>
    )
}