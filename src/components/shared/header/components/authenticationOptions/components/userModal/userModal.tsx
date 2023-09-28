import { useAppSelector } from "../../../../../../../redux/store/store";
import { UserName } from "./components/userName/userName";
import { LinkBtn } from "./components/links/link";
import { SignOutBtn } from "./components/signOutBtn/signOutBtn";

export const UserModal = () => {
    const userDataFromRedux = useAppSelector((state) => state.user)

    return (
        <>
            <UserName name={userDataFromRedux.userData?.name} />
            <div>
                <LinkBtn linkTo={'/about'} text={'settings'} />
                <LinkBtn linkTo={'/contact'} text={'Bookmarks'} />
            </div>
            <SignOutBtn />
        </>
    )
}