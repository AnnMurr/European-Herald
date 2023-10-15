import { configureStore } from "@reduxjs/toolkit";
import { cardsDataReducer } from "../reducers/cardsReducer/cardsReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { usersDataReducer } from "../reducers/usersReducer/usersReducer";
import { weatherReducer } from "../reducers/weatherReducer/weatherReducer";

export const store = configureStore({
    reducer: {
        newsCards: cardsDataReducer,
        user: usersDataReducer,
        weather: weatherReducer
    }
})

export type StoreType = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch 