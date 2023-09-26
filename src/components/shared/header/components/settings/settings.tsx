import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { BtnCloseWrapper, Container } from "./styledSettings";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { Content } from "./components/content/content";
import { SettingsProps } from "../../types";

export const Settings: React.FC<SettingsProps> = ({ closeModal, settingsIconBtnRef }) => {
    const themeContext: ThemeContextType = useContext(ThemeContext)
    const closeSettingsModal = () => closeModal(false)
    const settingsRef = useRef<HTMLDivElement>(null)
    const switchRef = useRef<HTMLButtonElement>(null)

    const closeModalOutsideClick = (e: MouseEvent) => {
        const event = e.target as Node

        if (!settingsRef.current?.contains(event)
            && !settingsIconBtnRef.current?.contains(event)
            && !switchRef.current?.contains(event)) {
            closeModal(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeModalOutsideClick)

        return () => document.removeEventListener("mousedown", closeModalOutsideClick)
    }, [])

    return (
        <Container theme={themeContext.currentTheme} themestyles={themeContext.themeStyles} ref={settingsRef}>
            <BtnCloseWrapper>
                <IconBtn color={themeContext.themeStyles.color} onClickFunc={closeSettingsModal} icon={faXmark} size='lg' />
            </BtnCloseWrapper>
            <Content switchRef={switchRef} />
        </Container>
    )
}