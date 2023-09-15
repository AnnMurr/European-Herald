import { IconBtn } from "../../../../reusable/iconBtn/iconBtn"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { IconBtnInner, Input, Label, Underline, Span } from "./styledSearch"
import { useState } from 'react';
import { Button } from "../../../../reusable/button/styledButton";

export const Search = () => {
    const [searchVisible, setSearchVisible] = useState<boolean>(false)

    const toggleSearchVisible = () => setSearchVisible((prev) => !prev)
    return (
        <div>
            <Label>
                <div>
                    <Button type="button" className="btn search__btn" onClick={toggleSearchVisible}>
                        <Span>Search</Span>
                        <Underline className="underline" />
                    </Button>
                </div>
                {searchVisible ?
                    <>
                        <Input type="search" />
                        <IconBtnInner>
                            <IconBtn icon={faMagnifyingGlass} size={'sm'} onClickFunc={toggleSearchVisible} />
                        </IconBtnInner>
                    </>
                    : null}
            </Label>
        </div>
    )
}