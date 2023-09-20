import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Container, IconBtnInner, Input, Label } from "./styledSearch";
import { useState } from "react";

export const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const resetInputValue = () => setSearchValue('')

    return (
        <Container>
            <Label>
                <Input value={searchValue} onChange={handleChange} type="search" />
                <IconBtnInner to={'/search'} state={searchValue}>
                    <IconBtn onClickFunc={resetInputValue} icon={faMagnifyingGlass} size={'sm'} />
                </IconBtnInner>
            </Label>
        </Container>
    )
}