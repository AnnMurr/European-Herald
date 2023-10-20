export interface NewPasswordModalProps {
    closeModal: (value: boolean) => void,
}
export interface EditInputProps {
    setIsCorrectInputValue: (value: boolean) => void,
    setInputValue: (value: string) => void
}
export interface SaveBtnProps {
    isCorrectInputValue: boolean,
    inputValue: string,
    closeModal: (value: boolean) => void
}

export type InputPasswordType = 'password' | 'text'

export type TogglePasswordType = ( type: string, setType: React.Dispatch<React.SetStateAction<InputPasswordType>>) => void