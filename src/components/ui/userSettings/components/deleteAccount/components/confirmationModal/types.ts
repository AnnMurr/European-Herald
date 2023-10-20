export interface ConfirmationModalProps {
    closeModal: (value: boolean) => void
}

export interface CrossBtnProps {
    closeModal: (value: boolean) => void
}

export interface DeleteBtnProps {
    setError: (value: boolean) => void,
    closeModal: (value: boolean) => void,
    inputValue: string
}

export interface InputProps {
    setInputValue: (value: string) => void, 
    error: boolean
}

export type InputPasswordType = 'password' | 'text'