import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./styledIconBtn";
import { IconBtnProps } from "./types";

export const IconBtn: React.FC<IconBtnProps> = ({ size, icon, onClickFunc }) => {
    return (
        <Button type="button" onClick={onClickFunc}>
            <FontAwesomeIcon size={size} icon={icon} />
        </Button>
    )
}