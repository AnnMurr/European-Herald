import { configureStore } from "@reduxjs/toolkit";
import { cardsDataReducer } from "../reducers/cardsReducer";

export const store = configureStore({
    reducer: cardsDataReducer
})

export type AppDispatch = typeof store.dispatch;