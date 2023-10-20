export interface SaveBtnProps {
    inputValue: string,
    closeModal: (value: boolean) => void,
    name: string,
    setError: (value: boolean) => void
}
export interface EditModalProps {
    closeModal: (value: boolean) => void,
    data: string | undefined,
    name: string
}
export interface EditInputProps {
    inputValue: string,
    setInputValue: (value: string) => void,
    name: string,
    error: boolean
}