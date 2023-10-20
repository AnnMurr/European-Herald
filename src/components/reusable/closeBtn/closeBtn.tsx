import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { IconBtn } from "../iconBtn/iconBtn"
import { Container } from "./styledCloseBtn"

export interface CloseBtnProps {
    closeModal: (value: boolean) => void,
    currentColor: string
}

export const CloseBtn: React.FC<CloseBtnProps> = ({ closeModal, currentColor }) => {
    return (
        <Container >
            <IconBtn color={currentColor} icon={faXmark} size={'lg'} onClickFunc={() => closeModal(false)} />
        </Container>
    )
}