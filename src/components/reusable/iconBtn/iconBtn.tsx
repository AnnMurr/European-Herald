import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./styledIconBtn";
import { IconBtnProps } from "./types";

export const IconBtn: React.FC<IconBtnProps> = ({ size, icon, onClickFunc, color, classname }) => {
    return (
        <Button type="button" onClick={onClickFunc}>
            <FontAwesomeIcon className={`${classname}`} color={color} size={size} icon={icon} />
        </Button>
    )
}