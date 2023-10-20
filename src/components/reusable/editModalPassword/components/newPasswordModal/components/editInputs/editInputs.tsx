import React, { useEffect, useState } from "react";
import { FormHelperText, TextField } from "@mui/material";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { BtnShowPassword } from "../../../../../showPasswordBtn/showPasswordBtn";
import { passwordPattern } from "../../../../../../../consts/consts";
import { EditInputProps, TogglePasswordType, InputPasswordType } from "../../types";

import { Inner, Label } from "./styledEditInputs";

export const EditInputs: React.FC<EditInputProps> = ({ setIsCorrectInputValue, setInputValue }) => {
    const [typeOfPassword, setTypeOfPassword] = useState<InputPasswordType>("password")
    const [typeOfRepeatPassword, setTypeOfRepeatPassword] = useState<InputPasswordType>("password")
    const [passwordValue, setPasswordValue] = useState<string>("")
    const [passwordRepeatValue, setPasswordRepeatValue] = useState<string>("")
    const [passwordValueError, setPasswordValueError] = useState<boolean>(false)
    const [passwordRepeatValueError, setPasswordRepeatValueError] = useState<boolean>(false)

    const togglePasswordType: TogglePasswordType = (type, setType) => {
        type === "password" ? setType("text") : setType("password")
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(event.target.value)
    const handleChangeRepeatPAssword = (event: React.ChangeEvent<HTMLInputElement>) => setPasswordRepeatValue(event.target.value)
    const checkCorrectPasswordValue = () => (!passwordValue.match(passwordPattern)) ? setPasswordValueError(true) : setPasswordValueError(false)

    const checkCorrectRepeatPasswordValue = () => {
        if (passwordValue !== passwordRepeatValue) {
            setPasswordRepeatValueError(true)
        } else {
            setPasswordRepeatValueError(false)
            setIsCorrectInputValue(true)
            setInputValue(passwordValue)
        }
    }

    useEffect(() => {
        checkCorrectRepeatPasswordValue()
    }, [passwordValue, passwordRepeatValueError])

    return (
        <Inner>
            <Label>Enter a new password
                <TextField
                    onChange={handleChangePassword}
                    onBlur={checkCorrectPasswordValue}
                    type={typeOfPassword}
                    size="small"
                    value={passwordValue}
                    InputProps={{
                        inputProps: {
                            maxLength: 30,
                        },
                    }}
                    sx={{
                        width: '100%',
                        marginTop: "5px"
                    }}
                    error={passwordValueError} />
            </Label>
            <BtnShowPassword
                icon={typeOfPassword === "password" ? faEye : faEyeSlash}
                func={() => togglePasswordType(typeOfPassword, setTypeOfPassword)} />
            <FormHelperText
                sx={{
                    color: "#d32f2f",
                    margin: "0",
                    fontSize: "11px",
                }} >
                {passwordValueError ? "Password must contain at least one digit, one special character '!@#$%^&*', one lowercase letter, one uppercase letter, and should not contain any spaces." : null}
            </FormHelperText>
            <Label>Repeat password
                <TextField
                    onChange={handleChangeRepeatPAssword}
                    onBlur={checkCorrectRepeatPasswordValue}
                    type={typeOfRepeatPassword}
                    size="small"
                    value={passwordRepeatValue}
                    InputProps={{
                        inputProps: {
                            maxLength: 30,
                        },
                    }}
                    sx={{
                        width: '100%',
                        marginTop: "5px"
                    }}
                    error={passwordRepeatValueError} />
            </Label>
            <BtnShowPassword
                icon={typeOfRepeatPassword === "password" ? faEye : faEyeSlash}
                func={() => togglePasswordType(typeOfRepeatPassword, setTypeOfRepeatPassword)} />
            <FormHelperText
                sx={{
                    color: "#d32f2f",
                    margin: "0",
                    fontSize: "11px",
                }}>
                {passwordRepeatValueError ? "Passwords must match" : null}
            </FormHelperText>
        </Inner>
    )
}