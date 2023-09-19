import { useEffect } from "react";
import { useAppSelector } from "../../../../../redux/store/store";
import { Input, Label } from "./styledInput";
import { Button as MuiButton } from "@mui/material";
import { SearchInputProps } from "../../types";

export const SearchInput: React.FC<SearchInputProps> = 
({ setFoundСards, searchValueOfHeaderInput, searchValue, setSearchValue }) => {

    const searchNews = (value = searchValue) => {
        let filteredArray = cards.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
        setFoundСards(filteredArray)
        sessionStorage.setItem('searchVal', searchValue)
    }



    useEffect(() => {
        searchValueOfHeaderInput && setSearchValue(searchValueOfHeaderInput)
    }, [searchValueOfHeaderInput])

    useEffect(() => {
        searchValue === searchValueOfHeaderInput && searchNews()
        
    }, [searchValue])

   

    useEffect(() => {
       const valInLocalStg = sessionStorage.getItem('searchVal')
       valInLocalStg && setSearchValue(valInLocalStg)
       valInLocalStg && searchNews(valInLocalStg)
       console.log(searchValue)
       console.log('small', searchValueOfHeaderInput)
       console.log('valInLocalStg', valInLocalStg)
       
    }, [])

    const dataFromRedux = useAppSelector((state) => state)
    
    const cards = [...dataFromRedux.cards, 
        ...dataFromRedux.categoryArts, 
        ...dataFromRedux.categoryBusiness, 
        ...dataFromRedux.categoryHealth,
        ...dataFromRedux.categorySports]

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