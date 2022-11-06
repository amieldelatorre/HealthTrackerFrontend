import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from "react-router-dom";
import { CredentialsHeader } from "../components/CredentialsHeader";

export const Login = (props) => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let email = data.get('email');
        let password = data.get('password');

        let response = await makeQueryForCredentials(email, password);

        if (response.ok === true)
            navigate("/home");
        else if (response.status === 401) {
            alert("Login details incorrect!");
        }
        
    };
    
    const makeQueryForCredentials = async (email, password) => {
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(email + ":" + password));

        const url = 'https://localhost:8080/api/User';

        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        return response;
    }

    return (
        <Container> 
            <Box 
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
            >   
            
                <CredentialsHeader headerText="Sign In" />

                <Box component="form" onSubmit={handleSubmit}>
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link to="/signup" variant="body2">
                                {"Don't have an account? Sign up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}