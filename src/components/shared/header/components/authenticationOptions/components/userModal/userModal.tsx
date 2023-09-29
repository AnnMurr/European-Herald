import { useAppSelector } from "../../../../../../../redux/store/store";
import { UserName } from "./components/userName/userName";
import { LinkBtn } from "./components/links/link";
import { SignOutBtn } from "./components/signOutBtn/signOutBtn";
interface UserModalProps {
    closeModal: () => void
}

export const UserModal: React.FC<UserModalProps> = ({ closeModal }) => {
    const userDataFromRedux = useAppSelector((state) => state.user)

    return (
        <>
            <UserName name={userDataFromRedux.userData?.name} />
            <div>
                <LinkBtn closeModal={closeModal} linkTo={'/settings'} text={'Settings'} />
                <LinkBtn closeModal={closeModal} linkTo={'/bookmarks'} text={'Bookmarks'} />
            </div>
            <SignOutBtn />
        </>
    )
}