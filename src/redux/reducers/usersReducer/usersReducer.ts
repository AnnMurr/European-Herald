import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../../../api/axiosConfig";
import { showToastMessage } from "../../../utils/alerts/alert";
import { CardType } from "../types";
import { setToken } from "../../../store/token/setToken";
import { v4 as uuidv4 } from "uuid";
import { getToken } from "../../../store/token/getToken";
import { decryptData } from "../../../utils/encryption/encryption";

interface InitialState {
    userData: null | UserDataType
}

const initialState: InitialState = {
    userData: null
}

export interface UserDataType {
    name: string,
    lastName: string,
    email: string,
    birthday: string,
    password: string,
    lastPassword: string,
    bookmarks: Array<CardType>,
    token: string
}
export interface UserDataFromRegistrationForm {
    name: string,
    lastName: string,
    email: string,
    birthday: string,
    password: string,
    lastPassword: string,
    bookmarks: Array<CardType>
}

export const createUser = createAsyncThunk<void, UserDataFromRegistrationForm>(
    "data/createUser",
    async (userData, { dispatch, rejectWithValue }) => {
        try {
            const token = `Bearer ${uuidv4()}`
            const request = await usersApi.post('users', {
                name: userData.name,
                lastName: userData.lastName,
                email: userData.email,
                birthday: userData.birthday,
                password: userData.password,
                token: token,
                bookmarks: []
            })
            if (request.status === 201) {
                showToastMessage({ type: 'success', text: 'Registration completed successfully' })
                setToken(token.split(' ')[1])
                return request.data
            } else {
                showToastMessage({ type: 'error', text: 'Error creating user' })
                throw new Error('Error creating user')
            }
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const getUserByToken = createAsyncThunk(
    "data/fetchUser",
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const response = await usersApi.get('users')
            const token = `Bearer ${decryptData(getToken()!)}`
            const data = response.data.filter((element: UserDataType) => element.token === token)
            if (data) {
                dispatch(setUserData(data[0]))
            } else {
                throw new Error('User not found')
            }

        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        }
    },

})

export const { setUserData } = usersSlice.actions

export const usersDataReducer = usersSlice.reducer