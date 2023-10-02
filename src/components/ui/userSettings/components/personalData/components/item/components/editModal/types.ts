export interface SaveBtnProps {
    inputValue: string,
    closeModal: (value: boolean) => void,
    name: string,
}

export interface EditModalProps {
    closeModal: (value: boolean) => void,
    data: string | undefined,
    name: string
}

export interface EditInputProps {
    inputValue: string,
    setInputValue: (value: string) => void,
    name: string
}

export interface CrossBtnProps {
    closeModal: (value: boolean) => void
}