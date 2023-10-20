export interface EditModalProps {
    closeModal: (value: boolean) => void,
    setIsNewPasswordModal: (value: boolean) => void,
    data: string | undefined
}

export interface EditInputProps {
    setInputValue: (value: string) => void,
    error: boolean
}

export interface CrossBtnProps {
    closeModal: (value: boolean) => void
}

export interface ConfirmBtnProps {
    passwordСheck: () => void
}

export type inputPasswordType = 'password' | 'text'