import { TextField, FormControl, FormHelperText } from "@mui/material";
import { ForgotRouting } from "../forgotRouting/forgotRouting";
import { BtnShowPassword, Label } from "./styledForm";
import { useForm } from "react-hook-form";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { useContext, useState } from "react";
import { inputPasswordType } from "../../types";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { Button } from "../../../../reusable/button/button";

export const Form = () => {
  const [typeOfPassword, setTypeOfPassword] = useState<inputPasswordType>("password")
  const themeContext = useContext<ThemeContextType>(ThemeContext)

  const togglePasswordType = () =>
    typeOfPassword === "password"
      ? setTypeOfPassword("text")
      : setTypeOfPassword("password")

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  })

  const onSubmit = (data: any) => {
    console.log(data)
    reset()
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
      <ForgotRouting />
      <Button type={'submit'} text={'Sign In'} style={{ margin: "30px 0 20px 0" }} />
    </FormControl>
  )
}
