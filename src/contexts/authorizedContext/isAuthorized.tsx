import { useContext } from "react";
import { AuthorizedContext, AuthorizedContextType } from "./authorizedContext";
import { Navigate } from "react-router-dom";
export interface CheckAuthorizationProps {
    children: React.ReactNode
}

export const CheckAuthorization: React.FC<CheckAuthorizationProps> = ({ children }) => {
    const { isAuthorized } = useContext<AuthorizedContextType>(AuthorizedContext)

    return isAuthorized ? <Navigate to='*' /> : <>{children}</>
}
export const CheckNotAuthorized: React.FC<CheckAuthorizationProps> = ({ children }) => {
    const { isAuthorized } = useContext<AuthorizedContextType>(AuthorizedContext)

    return !isAuthorized ? <Navigate to='*' /> : <>{children}</>
}