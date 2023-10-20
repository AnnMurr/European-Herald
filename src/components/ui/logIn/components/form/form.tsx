import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { TextField, FormControl } from "@mui/material";
import { InputPasswordType } from "../../types";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { Button } from "../../../../reusable/button/button";
import { BtnShowPassword } from "../../../../reusable/showPasswordBtn/showPasswordBtn";
import { useAppDispatch } from "../../../../../redux/store/store";
import { fetchSignIn } from "../../../../../redux/reducers/usersReducer/usersReducer";
import { AuthorizedContext } from "../../../../../contexts/authorizedContext/authorizedContext";
import { AuthorizedContextType } from "../../../../../contexts/authorizedContext/types";
import { UserDataType } from "../../../../../redux/reducers/usersReducer/types";
import { emailPattern } from "../../../../../consts/consts";

import { Label } from "./styledForm";
import { ErrorMessage } from "../../../../reusable/errorMessage/errorMessage";

export const Form = () => {
  const [typeOfPassword, setTypeOfPassword] = useState<InputPasswordType>("password")
  const themeContext = useContext<ThemeContextType>(ThemeContext)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const authorizedContext = useContext<AuthorizedContextType>(AuthorizedContext)

  const togglePasswordType = () => typeOfPassword === "password" ?
    setTypeOfPassword("text") :
    setTypeOfPassword("password")

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
      navigate('/European-Herald/dist/')
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
        <ErrorMessage text={errors.email?.message as string} value={!!errors.email} />
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
        <BtnShowPassword
          icon={typeOfPassword === "password" ? faEye : faEyeSlash}
          func={togglePasswordType} />
      </Label>
      <Button type={'submit'} text={'Sign In'} style={{ margin: "30px 0 20px 0", textTransform: 'initial' }} />
    </FormControl>
  )
}