import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { deleteUserAccount } from "../../../../../../../../../redux/reducers/usersReducer/usersReducer";
import { useAppDispatch, useAppSelector } from "../../../../../../../../../redux/store/store";
import { AuthorizedContextType } from "../../../../../../../../../contexts/authorizedContext/types";
import { AuthorizedContext } from "../../../../../../../../../contexts/authorizedContext/authorizedContext";
import { deleteToken } from "../../../../../../../../../store/localStorage/token/token";
import { Button } from "../../../../../../../../reusable/button/button";
import { DeleteBtnProps } from "../../types";

export const DeleteBtn: React.FC<DeleteBtnProps> = ({ setError, closeModal, inputValue }) => {
    const userPassword = useAppSelector(state => state.user.userData?.password)
    const authorizedContext = useContext<AuthorizedContextType>(AuthorizedContext)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const deleteAccount = () => {
        if (userPassword === inputValue) {
            dispatch(deleteUserAccount())
            setTimeout(() => {
                authorizedContext.logOut()
                deleteToken()
                navigate('/')
                closeModal(false)
            }, 1000)
        } else {
            setError(true)
        }
    }

    return (
        <Button
            func={deleteAccount}
            style={{ textTransform: 'initial' }}
            backgroundColor={'error'}
            text={'Delete'}
            type={'button'} />
    )
}