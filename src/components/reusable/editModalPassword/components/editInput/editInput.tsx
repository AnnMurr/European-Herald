import React, { useState } from "react";

import { TextField } from "@mui/material";
import { BtnShowPassword } from "../../../showPasswordBtn/showPasswordBtn";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { EditInputProps, inputPasswordType } from "../../types";

import { Inner, Label } from "./styledEditInput";

export const EditInput: React.FC<EditInputProps> = ({ setInputValue, error }) => {
    const [typeOfPassword, setTypeOfPassword] = useState<inputPasswordType>("password")

    const togglePasswordType = () => typeOfPassword === "password" ?
        setTypeOfPassword("text") :
        setTypeOfPassword("password")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)

    return (
        <Inner>
            <Label>Confirm your password
            <TextField
                onChange={handleChange}
                type={typeOfPassword}
                size="small"
                InputProps={{
                    inputProps: {
                        maxLength: 30,
                    },
                }}
                sx={{
                    width: '100%',
                    marginTop: "5px"
                }}
                error={error} />
                </Label>
            <BtnShowPassword
                icon={typeOfPassword === "password" ? faEye : faEyeSlash}
                func={togglePasswordType} />
        </Inner>
    )
}