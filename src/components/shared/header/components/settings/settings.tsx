import { useContext, useEffect, useRef } from "react";

import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { Content } from "./components/content/content";
import { SettingsProps } from "../../types";

import { Container } from "./styledSettings";
import { CloseBtn } from "../../../../reusable/closeBtn/closeBtn";

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
            <CloseBtn closeModal={closeSettingsModal} currentColor={themeContext.themeStyles.color} />
            <Content switchRef={switchRef} />
        </Container>
    )
}