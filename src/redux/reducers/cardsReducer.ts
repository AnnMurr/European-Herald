import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosConfig } from "../../api/axiosConfig";
import { CardType, InitialStateType } from "./types";

const initialState: InitialStateType = {
    cards: [],
    filteredCards: [],
    categorySports: [],
    categoryHealth: [],
    categoryArts: [],
    categoryBusiness: [],
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
                apiKey: '79ab8a14-5a3f-482f-898e-bf774033caad',
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
                apiKey: '79ab8a14-5a3f-482f-898e-bf774033caad',
                articlesCount: 50,
            })
            const articles: Array<CardType> = response.data.articles.results.filter((article: CardType) => article.image !== null)
            dispatch(getFilteredCards(articles))
        } catch (error) {
            error instanceof Error && rejectWithValue(error.message)
        }
    }
)

export const fetchCategoryNewsBlocks = createAsyncThunk<void, string>(
    "posts/fetchCategoryNewsBlocks",
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
                apiKey: '79ab8a14-5a3f-482f-898e-bf774033caad',
                articlesCount: 50,
            })
            const articles: Array<CardType> = response.data.articles.results.filter((article: CardType) => article.image !== null)
            const payload = { cards: articles, category: category }
            dispatch(getFilteredCategoryForBlocks(payload))
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
            const filteredCards = action.payload.filter((card, index, array) => {
                return array.findIndex((item) => item.title === card.title) === index
            })
            state.cards = filteredCards
        },
        getFilteredCards: (state, action: PayloadAction<Array<CardType>>) => {
            const filteredCards = action.payload.filter((card, index, array) => {
                return array.findIndex((item) => item.title === card.title) === index
            })
            state.filteredCards = filteredCards
        },
        getFilteredCategoryForBlocks: (state, action: PayloadAction<{ cards: Array<CardType>, category: string }>) => {
            const filteredCards = action.payload.cards.filter((card, index, array) => {
                return array.findIndex((item) => item.title === card.title) === index
            })

            switch (action.payload.category) {
                case 'Sports':
                    state.categorySports = filteredCards.splice(0,4)
                    break
                case 'Health':
                    state.categoryHealth = filteredCards.splice(4,4)
                    break
                case 'Arts':
                    state.categoryArts = filteredCards.splice(8,4)
                    break
                case 'Business':
                    state.categoryBusiness = filteredCards.splice(12,4)
                    break
            }
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

            .addCase(fetchCategoryNewsBlocks.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCategoryNewsBlocks.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(fetchCategoryNewsBlocks.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string | null;
            })
})

export const cardsDataReducer = cardsSlice.reducer

export const { getCards, getFilteredCards, getFilteredCategoryForBlocks } = cardsSlice.actions