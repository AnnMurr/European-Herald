import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { UserIconBtnProps } from "../../types";

export const UserIconBtn: React.FC<UserIconBtnProps> = ({ setIsAuthOptionsActive, userIconBtnRef }) => {
    const toggleAuthOptions = () => setIsAuthOptionsActive((prev: boolean) => !prev)

    return (
        <div ref={userIconBtnRef}>
            <IconBtn onClickFunc={toggleAuthOptions} icon={faCircleUser} size='lg' />
        </div>
    )
}