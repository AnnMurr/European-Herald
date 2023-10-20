import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../../../api/axiosConfig";
import { showToastMessage } from "../../../utils/alerts/alert";
import { v4 as uuidv4 } from "uuid";
import { getAuthenticationToken, setAuthenticationToken } from "../../../store/localStorage/token/token";
import { InitialState, UserDataFromRegistrationForm, UserDataType, UserLogInData } from "./types";

const initialState: InitialState = {
    userData: null,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        deleteUserData: (state) => {
            state.userData = null
        }
    },
})

export const createUser = createAsyncThunk<void, UserDataFromRegistrationForm>(
    "data/createUser",
    async (userData, { dispatch, rejectWithValue }) => {
        try {
            const token = `Bearer ${uuidv4()}`
            const userPostData = {
                name: userData.name,
                lastName: userData.lastName,
                email: userData.email,
                birthday: userData.birthday,
                password: userData.password,
                token: token,
                bookmarks: []
            }
            const request = await usersApi.post('usersData', userPostData)

            if (request.status === 201) {
                showToastMessage({ type: 'success', text: 'Registration completed successfully' })
                dispatch(setUserData(userPostData))
                setAuthenticationToken(token.split(' ')[1])
                return request.data
            } else {
                showToastMessage({ type: 'error', text: 'Error creating user' })
                throw new Error('Error creating user')
            }

        } catch (error) {
            return error instanceof Error && rejectWithValue(error.message)
        }
    }
)

export const getUserByToken = createAsyncThunk(
    "data/getUserByToken",
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const response = await usersApi.get('usersData')
            const token = `Bearer ${getAuthenticationToken()}`
            const data = response.data.filter((element: UserDataType) => element.token === token)

            if (data) {
                dispatch(setUserData(data[0]))
                return data[0]
            } else {
                throw new Error('User not found')
            }

        } catch (error) {
            return error instanceof Error && rejectWithValue(error.message)
        }
    }
)

export const getUserByEmail = createAsyncThunk<boolean, string>(
    "data/getUserByEmail",
    async (email, { dispatch, rejectWithValue }) => {
        try {
            const response = await usersApi.get('usersData')
            return response.data.some((element: UserDataType) => element.email === email)
        } catch (error) {
            return error instanceof Error && rejectWithValue(error.message)
        }
    }
)

export const fetchSignIn = createAsyncThunk<boolean, UserLogInData>(
    "data/fetchSignIn",
    async (userLogInData, { dispatch, rejectWithValue }) => {
        try {
            const response = await usersApi.get('usersData')
            const userData = response.data.filter((element: UserDataType) => element.email === userLogInData.email)

            if (userData[0]) {
                if (userData[0].password === userLogInData.password) {
                    dispatch(setUserData(userData[0]))
                    setAuthenticationToken(userData[0].token.split(' ')[1])
                    showToastMessage({ type: 'success', text: 'You are logged into your account' })
                    return true
                } else {
                    showToastMessage({ type: 'error', text: 'Incorrect credentials' })
                }
            } else {
                showToastMessage({ type: 'error', text: 'Incorrect credentials' })
            }

            return false

        } catch (error) {
            return error instanceof Error && rejectWithValue(error.message)
        }
    }
)

export const changeUserData = createAsyncThunk<void, UserDataType>(
    "data/changeUserData",
    async (changedUserData, { dispatch, rejectWithValue }) => {
        try {
            const user = await dispatch(getUserByToken())
            const response = await usersApi.put(`usersData/${user.payload.id}`, changedUserData)

            response.status === 200 ? dispatch(setUserData(changedUserData)) :
                showToastMessage({ type: 'error', text: 'something is wrong' })

        } catch (error) {
            error instanceof Error && rejectWithValue(error.message)
        }
    }
)

export const deleteUserAccount = createAsyncThunk(
    "data/changeUserData",
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const user = await dispatch(getUserByToken())
            const response = await usersApi.delete(`usersData/${user.payload.id}`)

            response.status === 200 ? showToastMessage({ type: 'success', text: 'Your account has been successfully deleted.' }) :
                showToastMessage({ type: 'error', text: 'something is wrong' })

        } catch (error) {
            error instanceof Error && rejectWithValue(error.message)
        }
    }
)

export const { setUserData, deleteUserData } = usersSlice.actions

export const usersDataReducer = usersSlice.reducer