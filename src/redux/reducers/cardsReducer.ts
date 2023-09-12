import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosConfig } from "../../api/axiosConfig"
import { CardType, InitialStateType } from "./types"

const initialState: InitialStateType = {
    cards: [],
    filteredCards: [],
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
            const articles: Array<CardType> = response.data.articles.results.filter((article: CardType) => article.image !== null)
            dispatch(getCards(articles))
        } catch (error) {
            error instanceof Error && rejectWithValue(error.message)
        }
    }
)

export const fetchCategoryNews = createAsyncThunk<void, string>(
    "posts/fetchCategoryNews",
    async (category, { dispatch, rejectWithValue }) => {
        try {
            const response = await axiosConfig.post('', {
                query: {
                    $query: {
                        lang: 'eng',
                        categoryUri: `dmoz/${category}`,
                    },
                    $filter: {
                        forceMaxDataTimeWindow: '31',
                    },
                },
                resultType: 'articles',
                articlesSortBy: 'date',
                apiKey: '921f1a93-d48e-475c-baf8-674230daa07e',
                articlesCount: 30,
            })
            const data: Array<CardType> = response.data.articles.results.filter((article: CardType) => article.image !== null)
            dispatch(getFilteredCards(data))
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
            const cards = action.payload.filter((card, index, array) => {
                return array.findIndex((item) => item.title === card.title) === index;
            })
            state.cards = cards
        },
        getFilteredCards: (state, action: PayloadAction<Array<CardType>>) => {
            const filteredCards = action.payload.filter((card, index, array) => {
                return array.findIndex((item) => item.title === card.title) === index;
            })
            state.filteredCards = filteredCards
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchCards.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCards.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string | null;
            })

            .addCase(fetchCategoryNews.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCategoryNews.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(fetchCategoryNews.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string | null;
            })
})

export const cardsDataReducer = cardsSlice.reducer

export const { getCards, getFilteredCards } = cardsSlice.actions