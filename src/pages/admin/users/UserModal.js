import React, { useState } from 'react';
import { Button, Checkbox, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material/';
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from 'tss-react/mui';
import { createNewUser, UpdateUser  } from '../../../API/internal_datasources/Users';
import USER_ROLES from '../../../config/enums/UserRoles';
import { ToastWrapper } from '../../global/notifications/ToastWrapper';
import { useSelector } from 'react-redux';

const useStyles = makeStyles()((theme) => ({
    paper: {
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            marginLeft: '2.5%',
        },
    },
}));

export default function UserModal({ callback, userDetails }) {
    const userRole = useSelector(state => state.UserRole);
    const isGuest = userRole.systemName == USER_ROLES.GUEST.systemName;
    const createUser = !isGuest && userDetails ? false : true;
    
    userDetails = userDetails
        ? userDetails
        : { firstName: '', lastName: '', login: '', password: '', requirePasswordChange: '' };

    const { classes } = useStyles();
    const [savingInProgress, setSavingProgess] = useState(false);
    const [fullName, setFullName] = useState({
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
    });
    const [login, setLogin] = useState(userDetails.login);
    const [password, setPassword] = useState(userDetails.password);
    const [role, setRole] = useState(!!userDetails.role ? userDetails.role : USER_ROLES.DEFAULT.systemName);
    const [requirePasswordChange, setRequirePasswordChange] = useState(false);
    const [toast, setToast] = useState();
    const [systemRoles] = useState(Object.keys(USER_ROLES).filter(role => USER_ROLES[role].systemRole));
    const [toastWrapper] = useState(ToastWrapper());
    const [email, setEmail] = useState(userDetails.email);
    const [number, setNumber] = useState(userDetails.number);

    const handleLoad = () => {
        setSavingProgess(true);
        if (createUser) {
            if (fullName.firstName != '' && fullName.lastName != '' && login != '' && password != '') {
                createNew();
                return;
            }
        } else {
            if (fullName.firstName != '' && fullName.lastName != '') {
                updateCurrent();
                return;
            }
        }

        popErrorToast();
        setSavingProgess(false);
    };

    const closeToastIfOpen = () => {
        console.log(toastWrapper.close(toast));
        if(toastWrapper.exists(toast)) 
            toastWrapper.close(toast);
            
    }

    const popSavingToast = () =>{
        closeToastIfOpen();
        setToast(toastWrapper.success(" Saving... "));
    }

    const popErrorToast = () =>{
        closeToastIfOpen();
        setToast(toastWrapper.error("Please fill in all fields"));
    }

    const createNew = () => {
        popSavingToast();
        createNewUser(
            {
                firstName: fullName.firstName,
                lastName: fullName.lastName,
                role: role, 
                login: login,
                password: password,
                email: email,
                telephone: number
            },
            Callback
        );
    };

    const updateCurrent = () => {
        popSavingToast();
        UpdateUser(
            {
                firstName: fullName.firstName,
                lastName: fullName.lastName,
                login: login,
                role: role,
                email: email,
                telephone: number
            },
            Callback
        );
    };

    const Callback = () => {
        setSavingProgess(false);
        callback();
    };

    const setFirstName = (e) => {
        setFullName({
            firstName: e.target.value,
            lastName: fullName.lastName,
        });
    };

    const setLastName = (e) => {
        setFullName({
            firstName: fullName.firstName,
            lastName: e.target.value,
        });
    };

    return (
        <form className={classes.paper}>
            <Paper style={{ margin: '1rem', padding: '1rem' }}>
                <Typography variant="h4" style={{ textAlign: 'center' }}>
                    {createUser ? 'Register new User:' : 'Edit User'}
                </Typography>
                {createUser && (
                    <>
                        <TextField
                            label="Login"
                            disabled={savingInProgress}
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            multiline
                            required
                            variant="outlined"
                            onChange={(e) => {
                                setLogin(e.target.value);
                            }}
                        />
                        <TextField
                            label="Password"
                            disabled={savingInProgress && userDetails}
                            style={{ margin: 8 }}
                            helperText=""
                            type="password"
                            fullWidth
                            required
                            margin="normal"
                            variant="outlined"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        
                        {!isGuest &&
                        <Typography>
                            <Checkbox
                                onChange={() => {
                                    setRequirePasswordChange(!requirePasswordChange);
                                }}
                            />
                            Require a password change
                        </Typography>}
                    </>
                )}
                {!isGuest &&
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        id="demo-simple-select" 
                        value={role}
                        label="Role"
                        style={{ margin: 8 }}
                        defaultValue={"DEFAULT"}
                        fullWidth
                        onChange={(e)=>{setRole(e.target.value)}}
                    >   
                        {
                        systemRoles.map(role =>{ 
                            return (
                                <MenuItem value={USER_ROLES[role].systemName}>{USER_ROLES[role].userFriendlyName}</MenuItem>
                        )})}

                    </Select>
                </FormControl> }
                <TextField
                    label="First Name"
                    autoFocus
                    value={fullName.firstName}
                    style={{ margin: 8 }}
                    fullWidth
                    disabled={savingInProgress}
                    margin="normal"
                    required
                    variant="outlined"
                    onChange={setFirstName}
                />
                <TextField
                    label="Last Name"
                    disabled={savingInProgress}
                    value={fullName.lastName}
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    multiline
                    required
                    variant="outlined"
                    onChange={setLastName}
                />
                <TextField
                    label="Email"
                    style={{ margin: 8 }}
                    fullWidth
                    value={email}
                    disabled={savingInProgress}
                    margin="normal"
                    required
                    variant="outlined"
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                <TextField
                    label="Telephone number"
                    style={{ margin: 8 }}
                    fullWidth
                    value={number}
                    disabled={savingInProgress}
                    margin="normal"
                    required
                    variant="outlined"
                    onChange={(e) => {setNumber(e.target.value)}}
                />
                <div style={{ textAlign: 'right' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={savingInProgress ? <CircularProgress size="20px" color="secondary" /> : <SaveIcon />}
                        onClick={handleLoad}
                    >
                        {savingInProgress ? 'Saving...' : 'Save'}
                    </Button>
                </div>
            </Paper>
        </form>
    );
}
