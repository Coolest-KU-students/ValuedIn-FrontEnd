import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PeopleIcon from '@mui/icons-material/People';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function NavigationButtons(props) {
    const [open, setOpen] = useState(false);

    const theme = useSelector((state) => state.Theme);

    const handleClick = () => {
        setOpen(!open);
    };

    const styleBasedOnType = (elementType) => {
        if (elementType === props.currentElement)
            return {
                backgroundColor: '#cadafa',
            };
        else return { backgroundColor: 'inherit' };
    };

    return (
        <div>
            <ListSubheader inset style={{ backgroundColor: 'inherit', color: 'inherit' }}>
                Navigation
            </ListSubheader>
             <ListItem button style={styleBasedOnType('Home')}>
                <ListItemIcon>
                    <HomeWorkIcon color='#cadafa' />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem> 
            <ListItem button component={Link} to="/feed" button style={styleBasedOnType('Feed')}>
                <ListItemIcon>
                    <SettingsApplicationsIcon color='#cadafa' />
                </ListItemIcon> 
                <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button component={Link} to="/users" style={styleBasedOnType('Users')}>
                <ListItemIcon>
                    <PeopleIcon color='#cadafa' />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItem>
            <ListItem
                button
                onClick={handleClick}
                style={open ? { backgroundColor: 'lightgrey' } : { backgroundColor: 'inherit' }}
            >
                <ListItemIcon>
                    <ListAltRoundedIcon color='#cadafa' />
                </ListItemIcon>
                <ListItemText primary="Feeds" />
                {open ? <ExpandLess color='#cadafa' /> : <ExpandMore color='#cadafa' />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit style={{ paddingLeft: '0.5rem' }}>
                <ListItem component={Link} to="/jobs" button style={styleBasedOnType('Jobs')}>
                    <ListItemIcon>
                        <LibraryAddCheckIcon color='#cadafa' />
                    </ListItemIcon>
                    <ListItemText primary="Jobs" />
                </ListItem>
                <ListItem component={Link} to="/organizations" button style={styleBasedOnType('Organizations')}>
                    <ListItemIcon>
                        <PriorityHighIcon color='#cadafa' />
                    </ListItemIcon>
                    <ListItemText primary="Organizations" />
                </ListItem>
            </Collapse>

            <ListItem component={Link} to="/logout" button>
                <ListItemIcon>
                    <ExitToAppIcon color='#cadafa' />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
            </ListItem>
        </div>
    );
}
