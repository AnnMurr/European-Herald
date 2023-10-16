import { useAppDispatch, useAppSelector } from "../../../../../../../../../../../redux/store/store";
import { Button } from "../../../../../../../../../../reusable/button/button";
import { changeUserData } from "../../../../../../../../../../../redux/reducers/usersReducer/usersReducer";
import { SaveBtnProps } from "../../types";
import { UserDataType } from "../../../../../../../../../../../redux/reducers/usersReducer/types";
import { emailPattern } from "../../../../../../../../../../../consts/patterns/patterns";
import { Inner } from "./styledSaveBtn";

export const SaveBtn: React.FC<SaveBtnProps> = ({ inputValue, closeModal, name, setError }) => {
    const dispatch = useAppDispatch()
    const userData: UserDataType | null = useAppSelector(state => state.user.userData)

    const newData: UserDataType = userData ?
        name === 'Name' ?
            { ...userData, name: inputValue as string } :
            name === 'Last name' ?
                { ...userData, lastName: inputValue as string } :
                name === 'Email' ?
                    { ...userData, email: inputValue as string } :
                    name === 'Birthday' ?
                        { ...userData, birthday: inputValue as string } :
                        userData
        : {} as UserDataType

    const changeData = () => {
        if (name === 'Email') {
            if (!inputValue.match(emailPattern)) {
                setError(true)
                return
            }
        } else if(name === 'Last name') {
            if(inputValue.length < 2) {
                setError(true)
                return
            }
        } else if(name === 'Name') {
            if(inputValue.length < 2) {
                setError(true)
                return
            }
        }

        newData && dispatch(changeUserData(newData))
        closeModal(false)


    }

    return (
        <Inner>
            <Button func={changeData} type="button" text="save" />
        </Inner>
    )
}