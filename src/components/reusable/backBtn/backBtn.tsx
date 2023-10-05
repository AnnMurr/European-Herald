import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { IconBtn } from "../iconBtn/iconBtn";

export const GoBackBtn = () => {
    const navigate = useNavigate()

    return (
        <div>
            <IconBtn onClickFunc={() => navigate(-1)} size="xl" icon={faArrowLeft} />
        </div>
    )
}