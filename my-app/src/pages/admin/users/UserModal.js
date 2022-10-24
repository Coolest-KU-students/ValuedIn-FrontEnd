import React, { useState } from 'react';
import { Button, Checkbox, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material/';
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';
//import Notification from '../../GlobalFeatures/Notification';
//import { createNewUser, UpdateUser } from '../../DataSources/Users';
import { makeStyles } from 'tss-react/mui';
import { createNewUser, UpdateUser  } from '../../../API/internal_datasources/Users';
import USER_ROLES from '../../../config/enums/UserRoles';

const useStyles = makeStyles()((theme) => ({
    paper: {
        position: 'absolute',
        width: '33%',
        marginLeft: '34%',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            marginLeft: '2.5%',
        },

        marginTop: '10%',
    },
}));

export default function UserModal({ callback, userDetails }) {
    const createUser = userDetails ? false : true;
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
    const [role, setRole] = useState(userDetails.role);
    const [requirePasswordChange, setRequirePasswordChange] = useState(false);

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

       // Notification('', 'Please fill in all fields', 'warning', 2000);
        setSavingProgess(false);
    };

    const createNew = () => {
        createNewUser(
            {
                firstName: fullName.firstName,
                lastName: fullName.lastName,
                role: role, 
                login: login,
                password: password,
                //changePasswordOnLogin: requirePasswordChange,
            },
            Callback
        );
        //setTimeout(800, Callback); //fake saving

    };

    const updateCurrent = () => {
        
        UpdateUser(
            {
                firstName: fullName.firstName,
                lastName: fullName.lastName,
                login: login,
                role: role,
            },
            Callback
        );
        //setTimeout(800, Callback); //fake saving
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
                <FormControl fullWidth>
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
                    Object.keys(USER_ROLES).filter(role => USER_ROLES[role].systemRole).map(role =>{ 
                        console.log(role); console.log(USER_ROLES[role]);
                        return (
                            <MenuItem value={USER_ROLES[role].systemName}>{USER_ROLES[role].userFriendlyName}</MenuItem>
                    )})}

                </Select>
                </FormControl>
                {createUser && (
                    <>
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
                        <Typography>
                            <Checkbox
                                onChange={() => {
                                    setRequirePasswordChange(!requirePasswordChange);
                                }}
                            />
                            Require a password change
                        </Typography>
                    </>
                )}
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
