import { createContext, useState } from "react";
import { getToken } from "../../store/localStorage/token/token";
export interface AuthorizedContextType {
    logIn: () => void,
    logOut: () => void,
    isAuthorized: boolean,
}
export interface AuthorizedContextProviderProps {
    children: React.ReactNode
}

const initialAuthorizedContext: AuthorizedContextType = {
    logIn: () => {},
    logOut: () => {},
    isAuthorized: false
}

export const AuthorizedContext = createContext<AuthorizedContextType>(initialAuthorizedContext)

export const AuthorizedContextProvider: React.FC<AuthorizedContextProviderProps>  = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(!!getToken('token'))

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