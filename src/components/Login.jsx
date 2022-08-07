import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Login(_props) {
    const [status, setStatus] = useState(
        <Typography gutterBottom variant="h6" component="div">
            Logging you in...
        </Typography>)
    useEffect(() => {
        let query = new URLSearchParams(window.location.search);
        let location = "/"
        if(query.get("location")) {
            location = query.get("location")
        }
        
        if (query.get("token")) {
            Cookies.set("store", query.get("token"))
            setStatus(
                <Alert variant="filled" severity="success">
              Logged in successfully.
                </Alert>
            )
            window.location = location
            return
        } else {
            setStatus(
                <Alert variant="filled" severity="error" sx={{ width: '100%' }}>
            Failed to login, try again.
                </Alert>
            )
        }
    },  [])

    return (
    <Stack direction="row" >
        {status}
    </Stack>
    )
}