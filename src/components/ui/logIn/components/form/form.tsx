import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { TextField, FormControl, FormHelperText } from "@mui/material";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { inputPasswordType } from "../../types";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { Button } from "../../../../reusable/button/button";
import { useAppDispatch } from "../../../../../redux/store/store";
import { fetchSignIn } from "../../../../../redux/reducers/usersReducer/usersReducer";
import { AuthorizedContext, AuthorizedContextType } from "../../../../../contexts/authorizedContext/authorizedContext";
import { UserDataType } from "../../../../../redux/reducers/usersReducer/types";
import { emailPattern } from "../../../../../consts/patterns/patterns";

import { BtnShowPassword, Label } from "./styledForm";

export const Form = () => {
  const [typeOfPassword, setTypeOfPassword] = useState<inputPasswordType>("password")
  const themeContext = useContext<ThemeContextType>(ThemeContext)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const authorizedContext = useContext<AuthorizedContextType>(AuthorizedContext)

  const togglePasswordType = () =>
    typeOfPassword === "password"
      ? setTypeOfPassword("text")
      : setTypeOfPassword("password")

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UserDataType>({
    mode: "onChange",
  })

  const logInCheck = async (data: UserDataType) => {
    const isCorrectData = await dispatch(fetchSignIn(data))

    if (isCorrectData.payload) {
      reset()
      navigate('/')
      authorizedContext.logIn()
    }
  }

  const onSubmit: SubmitHandler<UserDataType> = (data) => {
    logInCheck(data)
  }

  return (
    <FormControl
      onSubmit={handleSubmit(onSubmit)}
      action="/submit"
      method="post"
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Label themestyles={themeContext.themeStyles}>
        Email
        <TextField
          {...register("email", {
            required: true,
            pattern: {
              value: emailPattern,
              message: "Incorrectly entered e-mail",
            },
            maxLength: {
              value: 40,
              message: "Maximum length is 30 characters.",
            },
          })}
          id="outlined-size-small"
          size="small"
          type="text"
          placeholder="Your email"
          sx={{
            margin: "5px 0",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
          error={!!errors.email}
        />
        <FormHelperText
          sx={{
            color: "#d32f2f",
            margin: "0",
            fontSize: "11px",
          }}
          error={!!errors.email}
        >
          {errors.email?.message as string}
        </FormHelperText>
      </Label>
      <Label themestyles={themeContext.themeStyles}>
        Password
        <TextField
          {...register("password")}
          id="outlined-size-small"
          size="small"
          type={typeOfPassword}
          placeholder="Your password"
          sx={{
            margin: "5px 0",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
        />
        <BtnShowPassword>
          <IconBtn
            size={"sm"}
            icon={typeOfPassword === "password" ? faEye : faEyeSlash}
            onClickFunc={togglePasswordType}
          />
        </BtnShowPassword>
      </Label>
      <Button type={'submit'} text={'Sign In'} style={{ margin: "30px 0 20px 0" }} />
    </FormControl>
  )
}
