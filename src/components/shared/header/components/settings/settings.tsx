import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { BtnCloseWrapper, Container, Content, Span } from "./styledSettings";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { useContext } from "react";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { MaterialUISwitch } from "./components/swich/swich";

export const Settings = ({ closeModal }: any) => {
    const themeContext: ThemeContextType = useContext(ThemeContext)
    const isChecked = themeContext.currentTheme === 'dark'

    const closeSettingsModal = () => closeModal(false)
    return (
        <Container>
            <BtnCloseWrapper>
                <IconBtn onClickFunc={closeSettingsModal} icon={faXmark} size='lg' />
            </BtnCloseWrapper>


            <Content>

            <div><Span>Light</Span></div>

            <MaterialUISwitch
                checked={isChecked}
                onChange={themeContext.changeTheme}
                theme={themeContext}
            />

            <div><Span>Dark</Span></div>
            </Content>
        </Container>
    )
}