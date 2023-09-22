import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { BtnCloseWrapper, Container } from "./styledAuthOptions";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationOptionsProps } from "../../types";
import { useContext, useEffect, useRef } from "react";
import { AccessControlBtns } from "./components/accessControlBtns/accessControlBtns";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

export const AuthenticationOptions: React.FC<AuthenticationOptionsProps> = ({ closeModal, userIconBtnRef }) => {
    const closeAuthOptions = () => closeModal(false)
    const auntRef = useRef<HTMLDivElement>(null)
    const themeContext = useContext<ThemeContextType>(ThemeContext)

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
        <Container themestyles={themeContext.themeStyles} theme={themeContext.currentTheme} ref={auntRef}>
            <BtnCloseWrapper >
                <IconBtn color={themeContext.themeStyles.color} onClickFunc={closeAuthOptions} icon={faXmark} size='lg' />
            </BtnCloseWrapper>
            <AccessControlBtns closeModal={closeModal} />
        </Container>
    )
}