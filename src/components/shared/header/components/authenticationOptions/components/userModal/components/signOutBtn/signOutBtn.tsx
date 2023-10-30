import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../../../../../../../../reusable/button/button";
import { AuthorizedContext } from "../../../../../../../../../contexts/authorizedContext/authorizedContext";
import { AuthorizedContextType } from "../../../../../../../../../contexts/authorizedContext/types";
import { deleteToken } from "../../../../../../../../../store/localStorage/token/token";
import { useAppDispatch } from "../../../../../../../../../redux/store/store";
import { deleteUserData } from "../../../../../../../../../redux/reducers/usersReducer/usersReducer";

import { Wrapper } from "./styledSignOutBtn";

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
                    width: '100%',
                    textTransform: 'initial'
                }}
                func={userLogOut}
                text={'Sign out'}
                type={'button'} />
        </Wrapper>
    )
}