import { useContext } from "react";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

interface SettingsBtnProps {
    setIsSettingsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const SettingsBtn: React.FC<SettingsBtnProps> = ({ setIsSettingsActive }) => {
    const toggleSettingsModal = () => setIsSettingsActive((prev: boolean) => !prev)
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <div>
            <IconBtn color={themeContext.themeStyles.color} onClickFunc={toggleSettingsModal} icon={faEllipsisVertical} size='lg' />
        </div>
    )
}