import { CardType } from "../cardsReducer/types";
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

export interface InitialState {
    userData: null | UserDataType,
}