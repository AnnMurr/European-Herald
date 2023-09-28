import { configureStore } from "@reduxjs/toolkit";
import { cardsDataReducer } from "../reducers/cardsReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        newsCards: cardsDataReducer
    }
})

export type StoreType = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch 