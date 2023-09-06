import { Box, TextField, Button as MuiButton } from "@mui/material";
import { ForgotRouting } from "../forgotRouting/forgotRouting";
import { Label } from "./styledForm";


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
                type="text"
                sx={{
                    margin: '5px 0'
                }}
            />
            <Label>Password</Label>
            <TextField
                id="outlined-size-small"
                size="small"
                type="password"
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