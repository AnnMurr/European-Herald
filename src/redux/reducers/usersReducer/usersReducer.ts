import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../../../api/axiosConfig";
import { showToastMessage } from "../../../utils/alerts/alert";
import { CardType } from "../types";
import { setToken } from "../../../store/setToken";
import { v4 as uuidv4 } from "uuid";


const initialState = {
    user: null
}

export interface UserDataFromRegistrationForm {
    name: string,
    lastName: string,
    email: string,
    birthday: string,
    password: string ,
    lastPassword: string,
    bookmarks: Array<CardType>
}

export const createUser = createAsyncThunk<void, UserDataFromRegistrationForm>(
    "data/fetchUser",
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

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },

})