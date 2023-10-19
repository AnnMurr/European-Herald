import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthorizedContext } from "./authorizedContext";
import { AuthorizedContextType, CheckAuthorizationProps } from "./types";

export const CheckAuthorization: React.FC<CheckAuthorizationProps> = ({ children }) => {
    const { isAuthorized } = useContext<AuthorizedContextType>(AuthorizedContext)

    return isAuthorized ? <Navigate to='*' /> : <>{children}</>
}
export const CheckNotAuthorized: React.FC<CheckAuthorizationProps> = ({ children }) => {
    const { isAuthorized } = useContext<AuthorizedContextType>(AuthorizedContext)

    return !isAuthorized ? <Navigate to='*' /> : <>{children}</>
}