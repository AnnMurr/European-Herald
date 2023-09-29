import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Container, IconBtnInner, Input, Label } from "./styledSearch";
import { useContext, useState } from "react";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { useNavigate } from "react-router-dom";

export const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    const navigate = useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)

    const resetInputValue = () => setSearchValue('')

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            navigate('/search', { state: searchValue })
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