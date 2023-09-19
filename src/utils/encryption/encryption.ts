import * as CryptoJS from 'crypto-js';

const secretKey = '12313252434';

export const encryptData = (data: string) => {
return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString()
}

export const decryptData = (data: string) => {
   const bytes = CryptoJS.AES.decrypt(data, secretKey)
   return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
}