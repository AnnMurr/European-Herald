import { UserDataType } from "../../../../../../../redux/reducers/usersReducer/types";
import { changeUserData } from "../../../../../../../redux/reducers/usersReducer/usersReducer";
import { useAppDispatch, useAppSelector } from "../../../../../../../redux/store/store";
import { Button } from "../../../../../button/button";
import { SaveBtnProps } from "../../types";

import { Inner } from "./styledSaveBtn";

export const SaveBtn: React.FC<SaveBtnProps> = ({ isCorrectInputValue, inputValue, closeModal }) => {
    const userData = useAppSelector(state => state.user.userData)
    const dispatch = useAppDispatch()

    const changeData = () => {
        const newData: UserDataType = userData ? { ...userData, password: inputValue } : {} as UserDataType
        if (isCorrectInputValue) {
            closeModal(false)
            dispatch(changeUserData(newData))
        }
    }

    return (
        <Inner>
            <Button style={{textTransform: 'initial'}} func={changeData} type="button" text="save" />
        </Inner>
    )
}