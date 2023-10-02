import React from "react";
import { Inner, Input } from "./styledEditInput";
import { EditInputProps } from "../../types";

export const EditInput: React.FC<EditInputProps> = ({ inputValue, setInputValue, name }) => {
    const today = new Date()
    const maxDate = new Date(today)
    maxDate.setFullYear(today.getFullYear() - 12)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)

    return (
        <Inner>
            <Input
                onChange={handleChange}
                type={name === 'Birthday' ? 'date' : 'text'}
                value={inputValue}
                min={name === 'Birthday' ? "1900-01-01" : ''}
                max={name === 'Birthday' ? maxDate.toISOString().split("T")[0] : ''}
                maxLength={30}
            />
        </Inner>
    )
}