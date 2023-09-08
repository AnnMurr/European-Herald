import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { BtnCloseWrapper, Container } from "./styledAuthOptions";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationOptionsProps } from "../../types";
import { useEffect, useRef } from "react";
import { AccessControlBtns } from "./components/accessControlBtns/accessControlBtns";

export const AuthenticationOptions = ({ closeModal, userIconBtnRef }: AuthenticationOptionsProps) => {
    const closeAuthOptions = () => closeModal(false)
    const auntRef = useRef<HTMLDivElement>(null)

    const closeModalOutsideClick = (e: MouseEvent) => {
        const event = e.target as Node

        if (auntRef.current instanceof HTMLElement &&
            !auntRef.current.contains(event) &&
            userIconBtnRef.current instanceof HTMLElement &&
            !userIconBtnRef.current.contains(event)) {
            closeModal(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeModalOutsideClick)

        return () => document.removeEventListener('mousedown', closeModalOutsideClick)
    }, [])

    return (
        <Container ref={auntRef}>
            <BtnCloseWrapper >
                <IconBtn onClickFunc={closeAuthOptions} icon={faXmark} size='lg' />
            </BtnCloseWrapper>
            <AccessControlBtns closeModal={closeModal} />
        </Container>
    )
}