import { Box, TextField, Button as MuiButton } from "@mui/material"
import { Label } from "../../styledLogIn"
import { ForgotRouting } from "../forgotRouting/forgotRouting"

export const Form = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Label>Email</Label>
            <TextField
                id="outlined-size-small"
                size="small"
                sx={{
                    margin: '5px 0'
                }}
            />
            <Label>Password</Label>
            <TextField
                id="outlined-size-small"
                size="small"
                sx={{
                    margin: '5px 0'
                }}
            />
            <ForgotRouting/>
            <MuiButton
                variant="contained"
                sx={{
                    margin: '30px 0 20px 0'
                }}
            >Sign In</MuiButton>
        </Box>
    )
}