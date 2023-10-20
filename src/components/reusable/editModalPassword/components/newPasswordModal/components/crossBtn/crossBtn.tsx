import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconBtn } from "../../../../../iconBtn/iconBtn";
import { CrossBtnProps } from "../../types";
import { CrossBtnContainer } from "./styledCrossBtn";

export const CrossBtn: React.FC<CrossBtnProps> = ({ closeModal }) => {
    return (
        <CrossBtnContainer >
            <IconBtn icon={faXmark} size={'lg'} onClickFunc={() => closeModal(false)} />
        </CrossBtnContainer>
    )
}