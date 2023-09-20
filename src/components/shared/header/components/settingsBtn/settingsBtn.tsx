import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export const SettingsBtn = ({setIsSettingsActive}: any) => {
    const toggleSettingsModal = () => setIsSettingsActive((prev: boolean) => !prev)
    return (
        <div>
            <IconBtn onClickFunc={toggleSettingsModal} icon={faEllipsisVertical} size='lg' />
        </div>
    )
}