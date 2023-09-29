import { useContext } from "react";
import { AuthorizedContext, AuthorizedContextType } from "./authorizedContext";
import { Navigate } from "react-router-dom";

export const CheckAuthorization = ({ children }: any) => {
    const { isAuthorized } = useContext<AuthorizedContextType>(AuthorizedContext)

    return isAuthorized ? <Navigate to='*' /> : <>{children}</>
}
export const CheckNotAuthorized = ({ children }: any) => {
    const { isAuthorized } = useContext<AuthorizedContextType>(AuthorizedContext)

    return !isAuthorized ? <Navigate to='*' /> : <>{children}</>
}