import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./styledIconBtn";
import { IconBtnProps } from "./types";

export const IconBtn: React.FC<IconBtnProps> = ({ size, icon, onClickFunc, color }) => {
    return (
        <Button type="button" onClick={onClickFunc}>
            <FontAwesomeIcon color={color} size={size} icon={icon} />
        </Button>
    )
}