import { encryptData } from "../../../utils/encryption/encryption"

export const getToken = () => {
    return localStorage.getItem('token')
 }

export const setToken = (token: string) => {
    localStorage.setItem('token', encryptData(token))
}

export const deleteToken = () => {
    localStorage.removeItem('token')
}