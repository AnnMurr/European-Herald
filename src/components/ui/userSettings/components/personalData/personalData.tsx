import { useAppSelector } from "../../../../../redux/store/store";
import { Item } from "./components/item/item";
import { List } from "./styledPersonalData";

export const Form = () => {
    const userDataFromRedux = useAppSelector((state) => state.user)

    return (
        <List>
            <Item name={'Name'} data={userDataFromRedux.userData?.name} />
            <Item name={'Last name'} data={userDataFromRedux.userData?.lastName} />
            <Item name={'Email'} data={userDataFromRedux.userData?.email} />
            {userDataFromRedux.userData?.birthday.length ?? 0 ?
                <Item name={'Birthday'} data={userDataFromRedux.userData?.birthday} /> :
                null}
            <Item name={'Password'} data={userDataFromRedux.userData?.email} />
        </List>
    )
}