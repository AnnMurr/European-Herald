import { useContext } from "react";
import { Button } from "../../../../../../../../reusable/button/button";
import { Wrapper } from "./styledSignOutBtn";
import { AuthorizedContext, AuthorizedContextType } from "../../../../../../../../../contexts/authorizedContext/authorizedContext";
import { deleteToken } from "../../../../../../../../../store/localStorage/token/token";
import { useAppDispatch } from "../../../../../../../../../redux/store/store";
import { deleteUserData } from "../../../../../../../../../redux/reducers/usersReducer/usersReducer";

export const SignOutBtn = () => {
    const authorizedContext = useContext<AuthorizedContextType>(AuthorizedContext)
    const dispatch = useAppDispatch()

    const userLogOut = () => {
        authorizedContext.logOut()
        deleteToken()
        dispatch(deleteUserData())
    }
    
    return (
        <Wrapper>
             <Button
                style={{
                    width: '100%'
                }}
                func={userLogOut}
                text={'Sign out'}
                type={'button'} />
        </Wrapper>
    )
}