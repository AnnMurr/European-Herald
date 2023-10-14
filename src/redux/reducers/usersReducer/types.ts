import { CardType } from "../types";

export interface UserDataType {
    name: string,
    lastName: string,
    email: string,
    birthday: string,
    password: string,
    bookmarks: Array<CardType>,
    token: string
}
export interface UserDataFromRegistrationForm {
    name: string,
    lastName: string,
    email: string,
    birthday: string,
    password: string,
    repeatPassword: string,
    bookmarks: Array<CardType>
}

export interface UserLogInData {
    email: string,
    password: string
}