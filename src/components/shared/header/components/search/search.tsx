import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { useAppDispatch } from "../../../../../redux/store/store";
import { getSearchValueOfHeaderInput } from "../../../../../redux/reducers/cardsReducer/cardsReducer";

import { Container, IconBtnInner, Input, Label, IconBtnInnerMobile } from "./styledSearch";

export const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)

    const resetInputValue = () => setSearchValue('')

    const getSerch =() => {
        dispatch(getSearchValueOfHeaderInput(searchValue))
        navigate('/search')
        resetInputValue()
    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            getSerch()
        }
    }

    return (
        <Container>
            <Label>
                <Input onKeyDown={handleKeyPress} themestyles={themeContext.themeStyles} value={searchValue} onChange={handleChange} type="search" />
                <IconBtnInner to={'/search'} state={searchValue}>
                    <IconBtn color={'#000'} onClickFunc={getSerch} icon={faMagnifyingGlass} size={'sm'} />
                </IconBtnInner>
                <IconBtnInnerMobile to={'/search'} state={searchValue}>
                    <IconBtn color={themeContext.themeStyles.color} onClickFunc={getSerch} icon={faMagnifyingGlass} size={'sm'} />
                </IconBtnInnerMobile>
            </Label>
        </Container>
    )
}