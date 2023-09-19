import { CardType } from "../../../redux/reducers/types";

export interface TextProps {
    text: string
}

export interface CardsProps {
    foundСards: Array<CardType>
}

export interface NewsBlockProps {
    foundСards: Array<CardType>,
    searchValue: string
}

export interface SearchInputProps {
    setFoundСards: (value: CardType[]) => void, 
    searchValueOfHeaderInput: string, 
    searchValue: string, 
    setSearchValue: (value: string) => void
}