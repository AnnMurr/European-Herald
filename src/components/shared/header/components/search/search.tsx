import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { useAppDispatch } from "../../../../../redux/store/store";
import { getSearchValueOfHeaderInput } from "../../../../../redux/reducers/cardsReducer/cardsReducer";

import { Container, IconBtnInner, Input, Label } from "./styledSearch";

export const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)

    const resetInputValue = () => setSearchValue('')

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            dispatch(getSearchValueOfHeaderInput(searchValue))
            navigate('/search')
            resetInputValue()
        }
    }

    return (
        <Container>
            <Label>
                <Input onKeyDown={handleKeyPress} themestyles={themeContext.themeStyles} value={searchValue} onChange={handleChange} type="search" />
                <IconBtnInner to={'/search'} state={searchValue}>
                    <IconBtn classname={'SearchIconBtn'} onClickFunc={resetInputValue} icon={faMagnifyingGlass} size={'sm'} />
                </IconBtnInner>
            </Label>
        </Container>
    )
}