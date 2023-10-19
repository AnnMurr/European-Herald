import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../../redux/store/store";
import { Button as MuiButton } from "@mui/material";
import { SearchInputProps } from "../../types";
import { getFoundCards, getSearchValueOfHeaderInput } from "../../../../../redux/reducers/cardsReducer/cardsReducer";
import { getSearchValueToStore, setSearchValueFromStore } from "../../../../../store/sessionStorage/search/searchValue";

import { Input, Label } from "./styledInput";

export const SearchInput: React.FC<SearchInputProps> =
    ({ setFoundСards, setSearchValue }) => {
        const { searchValueOfHeaderInput } = useAppSelector((state) => state.newsCards)
        const dataFromRedux = useAppSelector((state) => state.newsCards)
        const [inputValue, setInputValue] = useState<string>('')
        const dispatch = useAppDispatch()
        const cards = [...dataFromRedux.cards,
        ...dataFromRedux.categoryArts,
        ...dataFromRedux.categoryBusiness,
        ...dataFromRedux.categoryHealth,
        ...dataFromRedux.categorySports]

        const handleKeyPress = (event: React.KeyboardEvent) => event.key === 'Enter' && searchNews()

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)

        const searchNews = (value = inputValue) => {
            setSearchValue(inputValue)
            
            const filteredArray = cards.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
                .filter((element, index, array) => array.findIndex(el => element.uri === el.uri) === index)
                .filter((element, index, array) => array.findIndex(el => element.title === el.title) === index)
                
            dispatch(getFoundCards(filteredArray))
            setFoundСards(filteredArray)
            setSearchValueFromStore(value)
        }

        useEffect(() => {
            searchValueOfHeaderInput && setInputValue(searchValueOfHeaderInput)
        }, [searchValueOfHeaderInput])

        useEffect(() => {
            inputValue === searchValueOfHeaderInput && searchNews()
            setTimeout(() => dispatch(getSearchValueOfHeaderInput(null)), 200)
        }, [inputValue])

        useEffect(() => {
            if (!searchValueOfHeaderInput) {
                const searchValueFromStore = getSearchValueToStore()
                searchValueFromStore && setInputValue(searchValueFromStore)
                searchValueFromStore && searchNews(searchValueFromStore)
            }
        }, [])

        return (
            <div>
                <Label>
                    <Input
                        maxLength={100}
                        onChange={handleChange}
                        type="search"
                        onKeyDown={handleKeyPress}
                        value={inputValue} />
                    <MuiButton
                        sx={{
                            position: 'absolute',
                            right: '0',
                            height: '45px',
                        }}
                        onClick={() => searchNews()}
                        variant="contained"
                        href="#contained-buttons">
                        Search
                    </MuiButton>
                </Label>
            </div>
        )
    }