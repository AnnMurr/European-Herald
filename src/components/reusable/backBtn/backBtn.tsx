import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { IconBtn } from "../iconBtn/iconBtn";
import { useContext } from "react";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";

export const GoBackBtn = () => {
    const navigate = useNavigate()
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <div>
            <IconBtn color={themeContext.themeStyles.color} onClickFunc={() => navigate(-1)} size="xl" icon={faArrowLeft} />
        </div>
    )
}