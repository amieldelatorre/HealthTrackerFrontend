import React from "react";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

export const CredentialsHeader = (props) => {
    return (
        <>
            <Avatar>
                <LockOutlinedIcon />
            </Avatar>
            
            <Typography>
                {props.headerText}
            </Typography>
        </>
    )
}