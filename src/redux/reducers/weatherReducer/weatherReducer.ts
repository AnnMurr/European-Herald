import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./types";
import axios from "axios";

const initialState: InitialState = {
    weatherData: null,
    forecastData: null,
    loading: false,
    error: null
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState: initialState,
    reducers: {
        getWeather: (state, action) => {
            state.weatherData = action.payload
        },

        geForecasttWeather: (state, action) => {
            state.forecastData = action.payload
        },
    },
    extraReducers: (builder) => 
    builder
    .addCase(getWetherData.pending, (state) => {
        state.loading = true
    })
    .addCase(getWetherData.fulfilled, (state) => {
        state.loading = false
    })
    .addCase(getWetherData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
    })
})

export const getWetherData = createAsyncThunk(
    "data/weatherData",
    async (_, { dispatch, rejectWithValue }) => {
        try {
            if ("geolocation" in navigator) {
                const position: GeolocationPosition = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject)
                })
                const { latitude, longitude } = position.coords
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=16fba77cc5f442648bd165016231710&q=${latitude},${longitude}&aqi=no&lang=en`)
                dispatch(getWeather(response.data))
            }
            
        } catch (error) {
            return error instanceof Error && rejectWithValue(error.message)
        }
    }
)

export const { getWeather, geForecasttWeather } = weatherSlice.actions

export const weatherReducer = weatherSlice.reducer