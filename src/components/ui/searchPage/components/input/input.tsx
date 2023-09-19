import { useEffect } from "react";
import { useAppSelector } from "../../../../../redux/store/store";
import { Input, Label } from "./styledInput";
import { Button as MuiButton } from "@mui/material";
import { SearchInputProps } from "../../types";
import { decryptData, encryptData } from "../../../../../utils/encryption/encryption";


export const SearchInput: React.FC<SearchInputProps> =
    ({ setFoundСards, searchValueOfHeaderInput, searchValue, setSearchValue }) => {

        const dataFromRedux = useAppSelector((state) => state)

        const cards = [...dataFromRedux.cards,
        ...dataFromRedux.categoryArts,
        ...dataFromRedux.categoryBusiness,
        ...dataFromRedux.categoryHealth,
        ...dataFromRedux.categorySports]

        const searchNews = (value = searchValue) => {
            let filteredArray = cards.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
            setFoundСards(filteredArray)
            const encryptedData = encryptData(searchValue)
            sessionStorage.setItem('searchVal', encryptedData)
        }

        useEffect(() => {
            searchValueOfHeaderInput && setSearchValue(searchValueOfHeaderInput)
        }, [searchValueOfHeaderInput])

        useEffect(() => {
            searchValue === searchValueOfHeaderInput && searchNews()

        }, [searchValue])

        useEffect(() => {
            const encryptedData = sessionStorage.getItem('searchVal')
            const decryptedData = encryptedData && decryptData(encryptedData)
            decryptedData && setSearchValue(decryptedData)
            decryptedData && searchNews(decryptedData)
        }, [])

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.target.value)
        }

        return (
            <div>
                <Label>
                    <Input
                        maxLength={100}
                        onChange={handleChange}
                        type="search"
                        value={searchValue} />
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