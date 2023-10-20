import React from "react";

import { EditInputProps } from "../../types";
import { TextField } from "@mui/material";

import { Inner, Label } from "./styledEditInput";

export const EditInput: React.FC<EditInputProps> = ({ inputValue, setInputValue, name, error }) => {
    const today = new Date()
    const maxDate = new Date(today)
    maxDate.setFullYear(today.getFullYear() - 12)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)

    return (
        <Inner>
            <Label>{name}</Label>
            <TextField
                onChange={handleChange}
                type={name === 'Birthday' ? 'date' : 'text'}
                value={inputValue}
                size="small"
                InputProps={{
                    inputProps: {
                        min: name === 'Birthday' ? '1900-01-01' : '',
                        max: name === 'Birthday' ? maxDate.toISOString().split('T')[0] : '',
                        maxLength: 30,
                    },
                }}
                sx={{
                    width: '100%',
                }}
                error={error}/>
        </Inner>
    )
}