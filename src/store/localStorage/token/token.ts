import { decryptData, encryptData } from "../../../utils/encryption/encryption";

export const setAuthenticationToken = (value: string) => {
    localStorage.setItem('authentication.token', encryptData(value))
}

export const getAuthenticationToken = () => {
    const token = localStorage.getItem('authentication.token')
    if (token) {
        return decryptData(token)
    } else {
        return null
    }
 }

export const deleteToken = () => {
    localStorage.removeItem('authentication.token')
}