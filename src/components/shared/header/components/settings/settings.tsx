import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { BtnCloseWrapper, Container } from "./styledSettings";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { useContext } from "react";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { Content } from "./components/content/content";

export const Settings = ({ closeModal }: any) => {
    const themeContext: ThemeContextType = useContext(ThemeContext)
    const closeSettingsModal = () => closeModal(false)
    
    return (
        <Container theme={themeContext.currentTheme} themestyles={themeContext.themeStyles}>
            <BtnCloseWrapper>
                <IconBtn color={themeContext.themeStyles.color} onClickFunc={closeSettingsModal} icon={faXmark} size='lg' />
            </BtnCloseWrapper>
            <Content />
        </Container>
    )
}