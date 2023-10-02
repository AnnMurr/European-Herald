import { IconBtn } from "../../../../../../../../../../reusable/iconBtn/iconBtn";
import { CrossBtnProps } from "../../types";
import { CrossBtnContainer } from "./styledCrossBtn";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const CrossBtn: React.FC<CrossBtnProps> = ({ closeModal }) => {
    return (
        <CrossBtnContainer >
            <IconBtn icon={faXmark} size={'lg'} onClickFunc={() => closeModal(false)} />
        </CrossBtnContainer>
    )
}