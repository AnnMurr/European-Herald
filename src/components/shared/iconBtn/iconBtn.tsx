import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./styledIconBtn";
import { IconBtnProps } from "./types";

export const IconBtn = ({ size, icon, onClickFunc }: IconBtnProps) => {
    return (
        <Button onClick={onClickFunc}>
            <FontAwesomeIcon size={size} icon={icon} />
        </Button>
    )
}