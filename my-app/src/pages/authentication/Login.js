import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';    
import { useDispatch } from 'react-redux';
import USER_ROLES from '../../config/enums/UserRoles';
import { AssignRole } from '../../redux/reducers/actions/UserRoleAction';

//TODO: Get The Logo
function Image() {
    return <AssignmentIcon fontSize="" />;
}

export default function LogIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //TODO: Enhance Modal popup when correct auth error measures are taken
    const [passwordModal, setPasswordModal] = useState(false);
    const setAuthenticated = props.setAuthenticated;

    document.body.style = 'background: linear-gradient(to right, #f64f29, #FEA880, #a0e5bc, #59F3E5, #01e2e9);';

    const LoggingInSuccessfully = () => {
        setAuthenticated({
            login: email,
            password: document.getElementById('password').value,
        });
    };

    const dispatch = useDispatch();

    const ByPassLogin = (userRole) =>{
        dispatch(AssignRole(userRole));
        LoggingInSuccessfully();
    } 

    return (
        <div>
            <Container component="main" maxWidth="sm">``
                <div>
                    <Avatar style={{
                        transform: 'scale(1.6)',
                        backgroundColor: 'primary.dark',
                        margin: 1,
                        marginLeft: '40%'
                        
                    }}>
                        <Image />
                    </Avatar>
                    <Typography component="div" variant="h2">
                        ValuedIn
                    </Typography>
                    <form  noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Username"
                            label="Username"
                            name="Username"
                            autoComplete="Username"
                            autoFocus
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={() => ByPassLogin(USER_ROLES.GUEST)}
                        >
                            Log In as GUEST
                        </Button> 
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={() => ByPassLogin(USER_ROLES.DEFAULT)}
                        >
                            Log In as DEFAULT
                        </Button>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={() => ByPassLogin(USER_ROLES.HR)}
                        >
                            Log In as HR
                        </Button>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={() => ByPassLogin(USER_ROLES.ORG_ADMIN)}
                        >
                            Log In as ORG Admin
                        </Button>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={() => ByPassLogin(USER_ROLES.SYSADMIN)}
                        >
                            Log In as SysAdmin
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                {/*TODO: Forgotten Password*/}
                            </Grid>
                            <Grid item>
                                {/*TODO: Registering*/}
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}

LogIn.propTypes = {
    setAuthenticated: PropTypes.func,
};
