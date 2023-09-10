import {
  TextField,
  Button as MuiButton,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { ForgotRouting } from "../forgotRouting/forgotRouting";
import { BtnShowPassword, Label } from "./styledForm";
import { useForm } from "react-hook-form";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { useState } from "react";
import { inputPasswordType } from "../../types";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const Form = () => {
  const [typeOfPassword, setTypeOfPassword] =
    useState<inputPasswordType>("password");

  const togglePasswordType = () =>
    typeOfPassword === "password"
      ? setTypeOfPassword("text")
      : setTypeOfPassword("password");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

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
      <Label>
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
          sx={{
            margin: "5px 0",
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
      <Label>
        Password
        <TextField
          id="outlined-size-small"
          size="small"
          type={typeOfPassword}
          sx={{
            margin: "5px 0",
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
      <MuiButton
        type="submit"
        variant="contained"
        sx={{
          margin: "30px 0 20px 0",
        }}
      >
        Sign In
      </MuiButton>
    </FormControl>
  );
};
