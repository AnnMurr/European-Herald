import { useContext } from "react";
import { Button } from "../../../../../../../../reusable/button/button";
import { Wrapper } from "./styledSignOutBtn";
import { AuthorizedContext, AuthorizedContextType } from "../../../../../../../../../contexts/authorizedContext/authorizedContext";
import { deleteToken } from "../../../../../../../../../store/localStorage/token/token";
import { useAppDispatch } from "../../../../../../../../../redux/store/store";
import { deleteUserData } from "../../../../../../../../../redux/reducers/usersReducer/usersReducer";
import { useLocation, useNavigate } from "react-router-dom";

export const SignOutBtn = () => {
    const authorizedContext = useContext<AuthorizedContextType>(AuthorizedContext)
    const dispatch = useAppDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const userLogOut = () => {
        (location.pathname === '/bookmarks' || location.pathname === '/settings') && navigate('/')
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