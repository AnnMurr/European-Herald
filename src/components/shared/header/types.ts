import { Dispatch, SetStateAction } from "react";
import { Theme } from "../../../contexts/themeContext/types";

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
    linkName: string,
    closeSubBar?: () => void
}

export interface SubBarProps {
    setIsSubBarActive: (value: boolean) => void, 
    burgerBtnRef: React.RefObject<HTMLDivElement>
}

export interface SettingsBtnProps {
    setIsSettingsActive: React.Dispatch<React.SetStateAction<boolean>>,
    settingsIconBtnRef: React.RefObject<HTMLDivElement>
}

export interface SettingsProps {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>,
    settingsIconBtnRef: React.RefObject<HTMLDivElement>
}

export interface ContentProps {
    switchRef: React.RefObject<HTMLButtonElement>
}

export interface TextProps {
    text: string,
    themeStyles: Theme,
}

export interface BurgerProps {
    setIsSubBarActive: Dispatch<SetStateAction<boolean>>,
    burgerBtnRef: React.RefObject<HTMLDivElement>
}
