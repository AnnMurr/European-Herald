import { useState } from "react";
import {
  TextField,
  Button as MuiButton,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { BtnShowPassword, Label, StarMessage } from "./styledForm";
import { IconBtn } from "../../../../reusable/iconBtn/iconBtn";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { TogglePasswordType, inputPasswordType } from "../../types";
import { useForm } from "react-hook-form";

export const Form = () => {
  const [typeOfPassword, setTypeOfPassword] =
    useState<inputPasswordType>("password");
  const [typeOfRepeatPassword, setTypeOfRepeatPassword] =
    useState<inputPasswordType>("password");
  const togglePasswordType: TogglePasswordType = (type, setType) =>
    type === "password" ? setType("text") : setType("password");

  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setFullYear(today.getFullYear() - 12);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
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
          sx={{
            margin: "5px 0",
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
      </Label>
      <Label>
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
          sx={{
            margin: "5px 0",
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
        <StarMessage>*</StarMessage>
      </Label>
      <Label>
        Birthday
        <TextField
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
          }}
        />
      </Label>
      <Label>
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
          sx={{
            margin: "5px 0",
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
      <Label>
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
          sx={{
            margin: "5px 0",
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
      <MuiButton
        variant="contained"
        type="submit"
        sx={{
          margin: "30px 0 20px 0",
        }}
      >
        Sign Up
      </MuiButton>
    </FormControl>
  );
};
