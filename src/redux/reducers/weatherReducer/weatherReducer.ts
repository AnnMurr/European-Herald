import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    weatherData: WeatherDataType | null
}

export interface WeatherDataType {
    current: {
        cloud: number,
        condition: {
            text: string,
            icon: string,
            code: number
        }
        feelslike_c: number,
        feelslike_f: number,
        gust_kph: number,
        gust_mph: number,
        humidity: number,
        is_day: number,
        last_updated: string
        last_updated_epoch: number,
        precip_in: number,
        precip_mm: number,
        pressure_in: number,
        pressure_mb: number,
        temp_c: number,
        temp_f: number,
        uv: number,
        vis_km: number,
        vis_miles: number,
        wind_degree: number,
        wind_dir: string,
        wind_kph: number,
        wind_mph: number
    }
    location: {
        country: string
        lat: number,
        localtime: string,
        localtime_epoch: number,
        lon: number,
        name: string,
        region: string,
        tz_id: string,
    }
}


const initialState: InitialState = {
    weatherData: null
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState: initialState,
    reducers: {
        getWeather: (state, action) => {
            state.weatherData = action.payload
        },
    }
})

export const { getWeather } = weatherSlice.actions

export const weatherReducer = weatherSlice.reducer