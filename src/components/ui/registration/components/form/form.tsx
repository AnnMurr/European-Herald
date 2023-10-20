import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { TextField, FormControl } from "@mui/material";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { TogglePasswordType, InputPasswordType } from "../../types";
import { AuthorizedContextType } from "../../../../../contexts/authorizedContext/types";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { AuthorizedContext } from "../../../../../contexts/authorizedContext/authorizedContext";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { Button } from "../../../../reusable/button/button";
import { BtnShowPassword } from "../../../../reusable/showPasswordBtn/showPasswordBtn";
import { ErrorMessage } from "../../../../reusable/errorMessage/errorMessage";
import { useAppDispatch } from "../../../../../redux/store/store";
import { UserDataFromRegistrationForm } from "../../../../../redux/reducers/usersReducer/types";
import { createUser, getUserByEmail } from "../../../../../redux/reducers/usersReducer/usersReducer";
import { SpacesPattern, emailPattern, passwordPattern } from "../../../../../consts/consts";
import { showToastMessage } from "../../../../../utils/alerts/alert";

import { Label, StarMessage } from "./styledForm";

export const Form = () => {
  const [typeOfPassword, setTypeOfPassword] = useState<InputPasswordType>("password")
  const [typeOfRepeatPassword, setTypeOfRepeatPassword] = useState<InputPasswordType>("password")
  const themeContext = useContext<ThemeContextType>(ThemeContext)
  const authorizedContext = useContext<AuthorizedContextType>(AuthorizedContext)
  const today = new Date()
  const maxDate = new Date(today)
  maxDate.setFullYear(today.getFullYear() - 12)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const togglePasswordType: TogglePasswordType = (type, setType) => {
    type === "password" ? setType("text") : setType("password")
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm<UserDataFromRegistrationForm>({
    mode: "onChange",
  })

  const registrationCheck = async (data: UserDataFromRegistrationForm) => {
    const isThisAccount = await dispatch(getUserByEmail(data.email))

    if (!isThisAccount.payload) {
      reset()
      navigate('/European-Herald/dist/')
      dispatch(createUser(data))
      authorizedContext.logIn()
    } else {
      showToastMessage({ type: 'error', text: 'this email has already been registered' })
    }
  }

  const onSubmit: SubmitHandler<UserDataFromRegistrationForm> = (data) => {
    registrationCheck(data)
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
        Name
        <TextField
          {...register("name", {
            required: true,
            minLength: {
              value: 2,
              message: "Minimum length is 2 characters.",
            },
            maxLength: {
              value: 20,
              message: "Maximum length is 20 characters.",
            },
            pattern: {
              value: SpacesPattern,
              message: 'Spaces are not allowed.',
            },
          })}
          id="outlined-size-small"
          size="small"
          type="text"
          placeholder="Your name"
          sx={{
            margin: "5px 0",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
          error={!!errors.name}
        />
        <ErrorMessage text={errors.name?.message as string} value={!!errors.name} />
        <StarMessage>*</StarMessage>
      </Label >
      <Label themestyles={themeContext.themeStyles}>
        Last Name
        <TextField
          {...register("lastName", {
            required: true,
            minLength: {
              value: 2,
              message: "Minimum length is 2 characters.",
            },
            maxLength: {
              value: 30,
              message: "Maximum length is 30 characters.",
            },
            pattern: {
              value: SpacesPattern,
              message: 'Spaces are not allowed.',
            },
          })}
          id="outlined-size-small"
          size="small"
          type="text"
          placeholder="Your last name"
          sx={{
            margin: "5px 0",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
          error={!!errors.lastName}
        />
        <ErrorMessage text={errors.lastName?.message as string} value={!!errors.lastName} />
        <StarMessage>*</StarMessage>
      </Label>
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
        <StarMessage>*</StarMessage>
      </Label>
      <Label themestyles={themeContext.themeStyles}>
        Birthday
        <TextField
          {...register("birthday")}
          id="outlined-size-small"
          size="small"
          type="date"
          InputProps={{
            inputProps: {
              min: "1900-01-01",
              max: maxDate.toISOString().split("T")[0],
            },
          }}
          sx={{
            margin: "5px 0",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
        />
      </Label>
      <Label themestyles={themeContext.themeStyles}>
        Password
        <TextField
          {...register("password", {
            required: true,
            pattern: {
              value:
                passwordPattern,
              message:
                "Password must contain at least one digit, one special character '!@#$%^&*', one lowercase letter, one uppercase letter, and should not contain any spaces.",
            },
            minLength: {
              value: 6,
              message: "Minimum length is 6 characters.",
            },
            maxLength: {
              value: 30,
              message: "Maximum length is 30 characters.",
            },
          })}
          id="outlined-size-small"
          size="small"
          type={typeOfPassword}
          placeholder="Your password"
          sx={{
            margin: "5px 0",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
          error={!!errors.password}
        />
        <StarMessage>*</StarMessage>
      </Label>
      <BtnShowPassword
        icon={typeOfPassword === "password" ? faEye : faEyeSlash}
        func={() => togglePasswordType(typeOfPassword, setTypeOfPassword)} />
      <ErrorMessage text={errors.password?.message as string} value={!!errors.password} />
      <Label themestyles={themeContext.themeStyles}>
        Repeat Password
        <TextField
          {...register("repeatPassword", {
            required: true,
            validate: (value) =>
              value === getValues("password") || "Passwords must match",
          })}
          id="outlined-size-small"
          size="small"
          type={typeOfRepeatPassword}
          placeholder="Repeat your password"
          sx={{
            margin: "5px 0",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
          error={!!errors.repeatPassword}
        />
        <StarMessage>*</StarMessage>
      </Label>
      <BtnShowPassword
        icon={typeOfRepeatPassword === "password" ? faEye : faEyeSlash}
        func={() => togglePasswordType(typeOfRepeatPassword, setTypeOfRepeatPassword)} />
      <ErrorMessage text={errors.repeatPassword?.message as string} value={!!errors.repeatPassword} />
      <Button type={'submit'} text={'Sign Up'} style={{ margin: "30px 0 20px 0", textTransform: 'initial' }} />
    </FormControl>
  )
}