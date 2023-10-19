import { createContext, useState } from "react";
import { getAuthenticationToken } from "../../store/localStorage/token/token";
import { AuthorizedContextProviderProps, AuthorizedContextType } from "./types";

const initialAuthorizedContext: AuthorizedContextType = {
    logIn: () => {},
    logOut: () => {},
    isAuthorized: false
}

export const AuthorizedContext = createContext<AuthorizedContextType>(initialAuthorizedContext)

export const AuthorizedContextProvider: React.FC<AuthorizedContextProviderProps>  = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(!!getAuthenticationToken())

    const logIn = () => setIsAuthorized(true)
    const logOut = () => setIsAuthorized(false)

    return (
        <AuthorizedContext.Provider
            value={{
                logIn,
                logOut,
                isAuthorized
            }}>
            {children}
        </AuthorizedContext.Provider>
    )
}