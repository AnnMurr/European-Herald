import { Button as MuiButton, SxProps } from "@mui/material";

interface ButtonProps {
    text: string,
    type: "submit" | "button",
    func?: () => void, 
    style?: SxProps
}

export const Button: React.FC<ButtonProps> = ({ text, type, func, style }) => {
    return (
        <MuiButton
            type={type}
            variant="contained"
            onClick={func}
            sx={style}>
            {text}
        </MuiButton>
    )
}