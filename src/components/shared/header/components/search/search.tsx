import { IconBtn } from "../../../../reusable/iconBtn/iconBtn"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { IconBtnInner, Input, Label } from "./styledSearch"

export const Search = () => {
    const toggleSearchVisible = () => console.log('search')
    return (
        <div>
            <Label>
                <Input type="search" />
                <IconBtnInner>
                    <IconBtn icon={faMagnifyingGlass} size={'sm'} onClickFunc={toggleSearchVisible} />
                </IconBtnInner>
            </Label>
        </div>
    )
}