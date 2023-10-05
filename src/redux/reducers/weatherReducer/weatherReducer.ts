import { createSlice } from "@reduxjs/toolkit";
import { WeatherDataType, WeatherForecastDataType } from "./types";

interface InitialState {
    weatherData: WeatherDataType | null
    forecastData: Array<WeatherForecastDataType> | null
}

const initialState: InitialState = {
    weatherData: null,
    forecastData: null,
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
    }
})

export const { getWeather, geForecasttWeather } = weatherSlice.actions

export const weatherReducer = weatherSlice.reducer