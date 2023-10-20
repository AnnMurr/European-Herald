import { FormHelperText } from "@mui/material";

interface ErrorMessageProps {
    text: string,
    value: boolean
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ text, value }) => {
    return (
        <FormHelperText
            sx={{
                color: "#d32f2f",
                margin: "0",
                fontSize: "11px",
            }}
            error={value}
        >{text}
        </FormHelperText>
    )
}