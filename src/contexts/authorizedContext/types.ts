export interface AuthorizedContextType {
    logIn: () => void,
    logOut: () => void,
    isAuthorized: boolean,
}

export interface AuthorizedContextProviderProps {
    children: React.ReactNode
}

export interface CheckAuthorizationProps {
    children: React.ReactNode
}