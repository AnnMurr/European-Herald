import { useState } from "react";
import { useLocation } from "react-router-dom";

import { SearchInput } from "./components/input/input";
import { NewsBlock } from "./components/newsBlock/newsBlock";
import { CardType } from "../../../redux/reducers/cardsReducer/types";

import { Container, Wrapper } from "./styledSearchPage";

export const SearchPage = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [foundСards, setFoundСards] = useState<Array<CardType>>([])
    const { state } = useLocation()

    return (
        <Container>
            <Wrapper>
                <SearchInput
                    setFoundСards={setFoundСards}
                    searchValueOfHeaderInput={state}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue} />
                <NewsBlock foundСards={foundСards} searchValue={searchValue} />
            </Wrapper>
        </Container>
    )
}