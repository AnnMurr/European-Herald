import {
  FormControl,
  FormHelperText,
  TextField,
  Button as MuiButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Label } from "./styledForm";
import { LoginRouting } from "../loginRouting/loginRouting";

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
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
      <LoginRouting />
      <MuiButton
        type="submit"
        variant="contained"
        sx={{
          margin: "30px 0 20px 0",
        }}
      >
        Send
      </MuiButton>
    </FormControl>
  );
};
