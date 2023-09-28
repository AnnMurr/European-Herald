import { useContext } from "react";
import { Button } from "../../../../../../../../reusable/button/button";
import { Wrapper } from "./styledSignOutBtn";
import { AuthorizedContext, AuthorizedContextType } from "../../../../../../../../../contexts/authorizedContext/authorizedContext";

export const SignOutBtn = () => {
    const authorizedContext = useContext<AuthorizedContextType>(AuthorizedContext)
    
    return (
        <Wrapper>
             <Button
                style={{
                    width: '100%'
                }}
                func={() => authorizedContext.logOut()}
                text={'Sign out'}
                type={'button'} />
        </Wrapper>
    )
}