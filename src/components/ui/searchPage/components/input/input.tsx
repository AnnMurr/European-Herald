import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store/store";
import { Input, Label } from "./styledInput";
import { Button as MuiButton } from "@mui/material";
import { SearchInputProps } from "../../types";
import { decryptData, encryptData } from "../../../../../utils/encryption/encryption";
import { getFoundCards, getSearchValueOfHeaderInput } from "../../../../../redux/reducers/cardsReducer/cardsReducer";

export const SearchInput: React.FC<SearchInputProps> =
    ({ setFoundСards, setSearchValue }) => {
        const { searchValueOfHeaderInput } = useAppSelector((state) => state.newsCards)
        const [inputValue, setInputValue] = useState<string>('')
        const dispatch = useAppDispatch()
        const dataFromRedux = useAppSelector((state) => state.newsCards)
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
                .filter((it, index, array) => array.findIndex(el => it.uri === el.uri) === index)
                dispatch(getFoundCards(filteredArray))
                setFoundСards(filteredArray)
            const encryptedData = encryptData(value)
            sessionStorage.setItem('searchVal', encryptedData)
        }

        useEffect(() => {
            searchValueOfHeaderInput && setInputValue(searchValueOfHeaderInput)
        }, [searchValueOfHeaderInput])

        useEffect(() => {
            inputValue === searchValueOfHeaderInput && searchNews()
            setTimeout(() => dispatch(getSearchValueOfHeaderInput(null)), 200)
        }, [inputValue])

        useEffect(() => {

        }, [inputValue])

        useEffect(() => {
            if (!searchValueOfHeaderInput) {
                const encryptedData = sessionStorage.getItem('searchVal')
                const decryptedData = encryptedData && decryptData(encryptedData)
                decryptedData && setInputValue(decryptedData)
                decryptedData && searchNews(decryptedData)
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
                            height: '-webkit-fill-available'
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