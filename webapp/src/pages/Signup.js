import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from "react-router-dom";
import { CredentialsHeader } from "../components/CredentialsHeader";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from "dayjs";
import Select from '@mui/material/Select';
import { FormControl, MenuItem } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';


export const Signup = (props) => {
    const [dob, setDob] = React.useState(dayjs(new Date()));
    const [gender, setGender] = React.useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        let firstName = data.get('firstName');
        let lastName = data.get('lastName');
        let email = data.get('email');
        let password = data.get('password');
        let dob = data.get('dob');
        let gender = data.get('gender');

        console.log(firstName, lastName, email, password, dob, gender);
        
    }

    const handleDobChange = (newValue) => {
        setDob(newValue);
    };

    const handleGenderChange = (newValue) => {
        console.log(newValue)
        setGender(newValue);
    };

    return(
        <Container>
            <Box 
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <CredentialsHeader headerText="Sign Up" />

                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField id="firstName"
                                label="First Name"
                                name="firstName"
                                autoFocus
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField id="lastname"
                                label="Last Name"
                                name="lastName"
                                autoFocus
                                required
                                fullWidth
                            />
                        </Grid>
                    </Grid>

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

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <MobileDatePicker
                                label="Date of Birth"
                                inputFormat="DD/MM/YYYY"
                                value={dob}
                                onChange={handleDobChange}
                                name="dob"
                                fullWidth
                                renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="gender">Gender</InputLabel>
                                <Select 
                                    labelId="gender"
                                    label="Gender"
                                    id="gender"
                                    name="gender"
                                    value={gender}
                                    onChange={handleGenderChange}
                                    fullWidth
                                    required
                                >
                                    <MenuItem value="0">Male</MenuItem>
                                    <MenuItem value="1">Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                    </Grid>

                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>

                </Box>


            </Box>

        </Container>
    );
}