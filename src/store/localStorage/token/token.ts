import { encryptData } from "../../../utils/encryption/encryption";

type SetTokenType = (key: string, value: string) => void

export const getToken = (key: string) => {
    return localStorage.getItem(key)
 }

export const setToken: SetTokenType = (key, value) => {
    localStorage.setItem(key, encryptData(value))
}

export const deleteToken = () => {
    localStorage.removeItem('token')
}