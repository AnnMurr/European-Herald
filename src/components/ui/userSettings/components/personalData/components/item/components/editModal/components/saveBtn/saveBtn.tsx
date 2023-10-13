import { useAppDispatch, useAppSelector } from "../../../../../../../../../../../redux/store/store";
import { Button } from "../../../../../../../../../../reusable/button/button";
import { Inner } from "./styledSaveBtn";
import { changeUserData } from "../../../../../../../../../../../redux/reducers/usersReducer/usersReducer";
import { SaveBtnProps } from "../../types";
import { UserDataType } from "../../../../../../../../../../../redux/reducers/usersReducer/types";

export const SaveBtn: React.FC<SaveBtnProps> = ({ inputValue, closeModal, name }) => {
    const dispatch = useAppDispatch()
    const userData: UserDataType | null = useAppSelector(state => state.user.userData)

    const newData: UserDataType = userData ?  
            name === 'Name' ?
            { ...userData, name: inputValue  as string} :
            name === 'Last name' ?
            { ...userData, lastName: inputValue  as string } :
            name === 'Email' ?
            { ...userData, email: inputValue  as string } :
            name === 'Birthday' ?
            { ...userData, birthday: inputValue  as string } : 
            userData
:   {} as UserDataType

    const changeData = () => {
        newData && dispatch(changeUserData(newData))
        closeModal(false)
    }

    return (
        <Inner>
            <Button func={changeData} type="button" text="save" />
        </Inner>
    )
}