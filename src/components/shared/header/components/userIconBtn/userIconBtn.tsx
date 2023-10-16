import { useContext } from "react";

import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { UserIconBtnProps } from "../../types";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

export const UserIconBtn: React.FC<UserIconBtnProps> = ({ setIsAuthOptionsActive, userIconBtnRef }) => {
    const toggleAuthOptions = () => setIsAuthOptionsActive((prev: boolean) => !prev)
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <div ref={userIconBtnRef}>
            <IconBtn color={themeContext.themeStyles.color} onClickFunc={toggleAuthOptions} icon={faCircleUser} size='lg' />
        </div>
    )
}