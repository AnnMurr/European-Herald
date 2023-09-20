import { useLocation } from "react-router-dom";
import { Container, Wrapper } from "./styledSearchPage";
import { useState } from "react";
import { SearchInput } from "./components/input/input";
import { NewsBlock } from "./components/newsBlock/newsBlock";
import { CardType } from "../../../redux/reducers/types";

export const SearchPage = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const { state } = useLocation()
    const [foundСards, setFoundСards] = useState<Array<CardType>>([])

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