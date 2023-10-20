import React, { useState } from "react";

import { TextField } from "@mui/material";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { BtnShowPassword } from "../../../../../../../../reusable/showPasswordBtn/showPasswordBtn";
import { InputProps, InputPasswordType } from "../../types";

import { Inner, Label } from "./styledInput";


export const Input: React.FC<InputProps> = ({ setInputValue, error }) => {
    const [typeOfPassword, setTypeOfPassword] = useState<InputPasswordType>("password")

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