import { Button as MuiButton, SxProps } from "@mui/material";
interface ButtonProps {
    text: string,
    type: "submit" | "button",
    func?: () => void, 
    style?: SxProps,
    backgroundColor?: 'error'
}

export const Button: React.FC<ButtonProps> = ({ text, type, func, style, backgroundColor }) => {
    return (
        <MuiButton
            type={type}
            variant="contained"
            onClick={func}
            color={backgroundColor}
            sx={style}>
            {text}
        </MuiButton>
    )
}