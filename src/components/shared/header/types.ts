import { Dispatch, SetStateAction } from "react";

export interface AuthenticationOptionsProps {
    closeModal: (value: boolean) => void,
    userIconBtnRef:  React.RefObject<HTMLDivElement>
}

export interface UserIconBtnProps {
    setIsAuthOptionsActive : Dispatch<SetStateAction<boolean>>
    userIconBtnRef: React.RefObject<HTMLDivElement>
}
export interface AccessControlBtnsProps {
    closeModal: (value: boolean) => void,
}
export interface LinkProps {
    linkName: string
}