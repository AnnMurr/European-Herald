export type inputPasswordType = 'password' | 'text'

export type TogglePasswordType = ( type: string, setType: React.Dispatch<React.SetStateAction<inputPasswordType>>) => void