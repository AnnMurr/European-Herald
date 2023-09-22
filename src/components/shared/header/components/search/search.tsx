import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Container, IconBtnInner, Input, Label } from "./styledSearch";
import { useContext, useState } from "react";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

export const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const resetInputValue = () => setSearchValue('')

    return (
        <Container>
            <Label>
                <Input  themestyles={themeContext.themeStyles} value={searchValue} onChange={handleChange} type="search" />
                <IconBtnInner to={'/search'} state={searchValue}>
                    <IconBtn onClickFunc={resetInputValue} icon={faMagnifyingGlass} size={'sm'} />
                </IconBtnInner>
            </Label>
        </Container>
    )
}