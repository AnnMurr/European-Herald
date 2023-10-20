import { useContext, useEffect, useRef } from "react";

import { AuthenticationOptionsProps } from "../../types";
import { AccessControlBtns } from "./components/accessControlBtns/accessControlBtns";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { AuthorizedContext } from "../../../../../contexts/authorizedContext/authorizedContext";
import { AuthorizedContextType } from "../../../../../contexts/authorizedContext/types";
import { UserModal } from "./components/userModal/userModal";

import { Container } from "./styledAuthOptions";
import { CloseBtn } from "../../../../reusable/closeBtn/closeBtn";

export const AuthenticationOptions: React.FC<AuthenticationOptionsProps> = ({ closeModal, userIconBtnRef }) => {
    const closeAuthOptions = () => closeModal(false)
    const auntRef = useRef<HTMLDivElement>(null)
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    const authorizedContext = useContext<AuthorizedContextType>(AuthorizedContext)

    const closeModalOutsideClick = (e: MouseEvent) => {
        const event = e.target as Node

        if (!auntRef.current?.contains(event) && !userIconBtnRef.current?.contains(event)) {
            closeModal(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeModalOutsideClick)

        return () => document.removeEventListener('mousedown', closeModalOutsideClick)
    }, [])

    return (
        <Container themestyles={themeContext.themeStyles} theme={themeContext.currentTheme} ref={auntRef}>
            <CloseBtn closeModal={closeAuthOptions} currentColor={themeContext.themeStyles.color} />
            {!authorizedContext.isAuthorized ? <AccessControlBtns closeModal={closeModal} /> : <UserModal closeModal={closeAuthOptions} />}
        </Container>
    )
}