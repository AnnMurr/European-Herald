import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { BtnCloseWrapper, Container } from "./styledSettings";

export const Settings = ({closeModal}: any) => {
    const closeSettingsModal = () => closeModal(false)
    return (
        <Container>
            <BtnCloseWrapper>
                <IconBtn onClickFunc={closeSettingsModal} icon={faXmark} size='lg' />
            </BtnCloseWrapper>

            <div>
                <h5>Toggle theme</h5>
            </div>

        </Container>
    )
}