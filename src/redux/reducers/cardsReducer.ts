import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosConfig } from "../../api/axiosConfig"
import { CardType, InitialStateType } from "./types"

const initialState: InitialStateType = {
    cards: [],
    loading: false,
    error: null
}

export const fetchCards = createAsyncThunk(
    "posts/fetchCards",
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const response = await axiosConfig.post('', {
                query: {
                    $query: {
                        lang: 'eng',
                    },
                    $filter: {
                        forceMaxDataTimeWindow: '31',
                    }
                },
                resultType: 'articles',
                articlesSortBy: 'date',
                apiKey: '921f1a93-d48e-475c-baf8-674230daa07e',
            })
            const articles: Array<CardType> = response.data.articles.results
            dispatch(getCards(articles))
        } catch (error) {
            error instanceof Error && rejectWithValue(error.message)
        }
    }
)

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        getCards: (state, action: PayloadAction<Array<CardType>>) => {
            state.cards = action.payload
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchCards.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string | null;
            })
})

export const cardsDataReducer = cardsSlice.reducer

export const { getCards } = cardsSlice.actions