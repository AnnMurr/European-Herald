import { useContext, useState } from "react";
import { TextField, FormHelperText, FormControl } from "@mui/material";
import { BtnShowPassword, Label, StarMessage } from "./styledForm";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { TogglePasswordType, inputPasswordType } from "../../types";
import { useForm } from "react-hook-form";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { Button } from "../../../../reusable/button/button";
import { useAppDispatch } from "../../../../../redux/store/store";
import { createUser } from "../../../../../redux/reducers/usersReducer/usersReducer";
import { useNavigate } from "react-router-dom";
import { AuthorizedContext, AuthorizedContextType } from "../../../../../contexts/authorizedContext/authorizedContext";

export const Form = () => {
  const [typeOfPassword, setTypeOfPassword] = useState<inputPasswordType>("password")
  const [typeOfRepeatPassword, setTypeOfRepeatPassword] = useState<inputPasswordType>("password")
  const togglePasswordType: TogglePasswordType = (type, setType) => type === "password" ? setType("text") : setType("password")
  const themeContext = useContext<ThemeContextType>(ThemeContext)
  const today = new Date()
  const maxDate = new Date(today)
  maxDate.setFullYear(today.getFullYear() - 12)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const authorizedContext = useContext<AuthorizedContextType>(AuthorizedContext)
console.log('form', authorizedContext.isAuthorized)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm({
    mode: "onChange",
  })


  const onSubmit = (data: any) => {
    dispatch(createUser(data))
    reset()
    setTimeout(() => {navigate('/')}, 2000)
    authorizedContext.logIn()
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
          })}
          id="outlined-size-small"
          size="small"
          type="text"
          placeholder="Your name"
          sx={{
            margin: "5px 0",
            backgroundColor: "#dfdcdc",
            borderRadius: "5px",
          }}
          error={!!errors.name}
        />
        <FormHelperText
          sx={{
            color: "#d32f2f",
            margin: "0",
            fontSize: "11px",
          }}
          error={!!errors.name}
        >
          {errors.name?.message as string}
        </FormHelperText>
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
          })}
          id="outlined-size-small"
          size="small"
          type="text"
          placeholder="Your last name"
          sx={{
            margin: "5px 0",
            backgroundColor: "#dfdcdc",
            borderRadius: "5px",
          }}
          error={!!errors.lastName}
        />
        <FormHelperText
          sx={{
            color: "#d32f2f",
            margin: "0",
            fontSize: "11px",
          }}
          error={!!errors.lastName}
        >
          {errors.lastName?.message as string}
        </FormHelperText>
        <StarMessage>*</StarMessage>
      </Label>
      <Label themestyles={themeContext.themeStyles}>
        Email
        <TextField
          {...register("email", {
            required: true,
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
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
            backgroundColor: "#dfdcdc",
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
            backgroundColor: "#dfdcdc",
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
                /^(?=\S*?[0-9])(?=\S*?[?!@#$%^&*])(?=\S*?[a-z-а-я])(?=\S*?[A-Zа-яА-Я])\S+$/,
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
            backgroundColor: "#dfdcdc",
            borderRadius: "5px",
          }}
          error={!!errors.password}
        />
        <StarMessage>*</StarMessage>
      </Label>
      <BtnShowPassword>
        <IconBtn
          icon={typeOfPassword === "password" ? faEye : faEyeSlash}
          size={"sm"}
          onClickFunc={() =>
            togglePasswordType(typeOfPassword, setTypeOfPassword)
          }
        />
      </BtnShowPassword>
      <FormHelperText
        sx={{
          color: "#d32f2f",
          margin: "0",
          fontSize: "11px",
        }}
        error={!!errors.password}
      >
        {errors.password?.message as string}
      </FormHelperText>
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
            backgroundColor: "#dfdcdc",
            borderRadius: "5px",
          }}
          error={!!errors.repeatPassword}
        />
        <StarMessage>*</StarMessage>
      </Label>
      <BtnShowPassword>
        <IconBtn
          icon={typeOfRepeatPassword === "password" ? faEye : faEyeSlash}
          size={"sm"}
          onClickFunc={() =>
            togglePasswordType(typeOfRepeatPassword, setTypeOfRepeatPassword)
          }
        />
      </BtnShowPassword>
      <FormHelperText
        sx={{
          color: "#d32f2f",
          margin: "0",
          fontSize: "11px",
        }}
        error={!!errors.repeatPassword}
      >
        {errors.repeatPassword?.message as string}
      </FormHelperText>
      <Button type={'submit'} text={'Sign Up'} style={{ margin: "30px 0 20px 0" }} />
    </FormControl>
  )
}
