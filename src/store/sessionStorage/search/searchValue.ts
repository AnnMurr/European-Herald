import { decryptData, encryptData } from "../../../utils/encryption/encryption";

export const setSearchValueFromStore  = (value: string) => {
    sessionStorage.setItem('search.timestamp', encryptData(value))
}

export const getSearchValueToStore = () => { 
    const searchValue = sessionStorage.getItem('search.timestamp')
    if (searchValue) {
        return decryptData(searchValue)
    } else {
        return null
    }
}