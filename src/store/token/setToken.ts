import { encryptData } from "../../utils/encryption/encryption";

export const setToken = (token: string) => {
    localStorage.setItem('token', encryptData(token))
}