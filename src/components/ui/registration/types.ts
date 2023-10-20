export type InputPasswordType = 'password' | 'text'

export type TogglePasswordType = ( type: string, setType: React.Dispatch<React.SetStateAction<InputPasswordType>>) => void