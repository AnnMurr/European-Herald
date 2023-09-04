import { IconBtn } from "../../../iconBtn/iconBtn";
import { Button } from "../../../button/styledButton";
import { BtnCloseWrapper, BtnWrapper, Container } from "./styledAuthOptions";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationOptionsProps } from "../../types";

export const AuthenticationOptions = ({closeModal}: AuthenticationOptionsProps) => {
    const closeAuthOptions = (event: React.MouseEvent<HTMLButtonElement>) => closeModal(false) 

    return (
        <Container>
            <BtnCloseWrapper >
                <IconBtn onClickFunc={closeAuthOptions} icon={faXmark} size='lg' />
            </BtnCloseWrapper>
            <BtnWrapper>
                <Button>Sign in</Button>
                <Button>Sign up</Button>
            </BtnWrapper>
        </Container>
    )
}